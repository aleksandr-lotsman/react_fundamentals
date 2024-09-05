import {User} from "../../types/User";
import {UserAction, UserActionTypes} from "./types";

const userInitialState: User = {
	isAuth: false,
	name: '',
	email: '',
	token: '',
};

export const userReducer = (state = userInitialState, action: UserAction): User => {
	switch (action.type) {
		case UserActionTypes.LOGIN:
			return {
				...state,
				isAuth: true,
				name: action.payload.name,
				email: action.payload.email,
				token: action.payload.token,
			};
		case UserActionTypes.LOGOUT:
			return userInitialState;
		default:
			return state;
	}
};