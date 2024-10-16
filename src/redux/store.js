import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/userSlice';
import savedUsersReducer from './slices/savedUserSlice';

const store = configureStore({
	reducer: {
		users: usersReducer,
		savedUsers: savedUsersReducer,
	},
});

export default store;
