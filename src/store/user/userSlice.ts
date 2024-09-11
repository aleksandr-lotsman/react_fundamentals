import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { UserState } from '../../types/UserState';
import * as apiService from '../../api/ApiService';
import {User} from "../../types/User";
import {ApiResponse} from "../../types/ApiResponse";
import * as localStorage from '../../helpers/localStorage';

const userInitialState: UserState = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
	role: '',
};

export const fetchUser = createAsyncThunk(
	'users/me',
	async (userToken: string) => {
		const responseBody: ApiResponse<User> = await apiService.getUser(userToken);
		if (responseBody.successful) {
			return {
				name: responseBody.result.name,
				email: responseBody.result.email,
				password: responseBody.result.password,
				role: responseBody.result.role,
				id: responseBody.result.id,
			} as User;
		} else {
			console.error('User fetching failed');
		}
	}
);

export const logoutUser = createAsyncThunk(
	'users/logout',
	async () => {
		const response = await apiService.logOut(localStorage.getToken());
		if (response) {
			return;
		} else {
			console.error('Logout failed');
		}
	}
);

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
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUser.fulfilled, (state, action) => {
			return {
				...state,
				name: action.payload.name,
				email: action.payload.email,
				role: action.payload.role,
			};
		});
		builder.addCase(logoutUser.fulfilled, () => {
			return userInitialState;
		});
	}
});

export const { loginUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
