import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	savedUsers: JSON.parse(localStorage.getItem('savedUsers') || '[]'),
};

const savedUserSlice = createSlice({
	name: 'savedUsers',
	initialState,
	reducers: {
		addSavedUser: (state, action) => {
			const exists = state.savedUsers.find(user => user.login.uuid === action.payload.login.uuid);

			if (exists) {
				state.savedUsers = state.savedUsers.filter(user => user.login.uuid !== action.payload.login.uuid);
			} else {
				state.savedUsers.push(action.payload);
			}

			localStorage.setItem('savedUsers', JSON.stringify(state.savedUsers));
		},
	},
});

export const { addSavedUser } = savedUserSlice.actions;
export default savedUserSlice.reducer;
