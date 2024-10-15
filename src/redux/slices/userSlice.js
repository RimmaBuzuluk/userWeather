import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const fetchWeather = async (latitude, longitude) => {
	const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m`);
	const data = await response.json();
	return data;
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async (page = 1) => {
	const response = await fetch(`https://randomuser.me/api/?results=10&page=${page}`);
	const users = await response.json();

	const usersWithWeather = await Promise.all(
		users.results.map(async user => {
			const { latitude, longitude } = user.location.coordinates;

			try {
				const weather = await fetchWeather(latitude, longitude);
				return { ...user, weather };
			} catch (error) {
				console.error('Failed to fetch weather:', error);
				return { ...user, weather: null };
			}
		})
	);

	return usersWithWeather;
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
