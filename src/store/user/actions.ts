import {UserActionTypes} from "./types";
import {User} from "../../types/User";

type LoginUserAction = {
	type: UserActionTypes.LOGIN;
	payload: User;
};

export const loginUserAction = (userData: User): LoginUserAction => ({
	type: UserActionTypes.LOGIN,
	payload: userData,
});

type LogoutUserAction = {
	type: UserActionTypes.LOGOUT;
};

export const logoutUserAction = (): LogoutUserAction => ({
	type: UserActionTypes.LOGOUT,
});
