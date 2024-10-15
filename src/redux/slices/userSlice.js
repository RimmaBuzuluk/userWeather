import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (page = 1) => {
	const response = await fetch(`https://randomuser.me/api/?results=10&page=${page}`);
	const data = await response.json();
	return data.results;
});

const usersSlice = createSlice({
	name: 'users',
	initialState: {
		users: [],
		status: 'idle',
		error: null,
		page: 1,
	},
	reducers: {
		incrementPage(state) {
			state.page += 1;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchUsers.pending, state => {
				state.status = 'loading';
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.users = [...state.users, ...action.payload];
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const { incrementPage } = usersSlice.actions;
export default usersSlice.reducer;
