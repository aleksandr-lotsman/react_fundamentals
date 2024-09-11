import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/User';

const userInitialState: User = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

const userSlice = createSlice({
	name: 'user',
	initialState: userInitialState,
	reducers: {
		loginUser: (state, action) => {
			return {
				...state,
				isAuth: true,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
			};
		},
		logoutUser: () => {
			return userInitialState;
		},
	},
});

export const { loginUser, logoutUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
