import { User } from '../../types/User';

export const enum UserActionTypes {
	LOGIN = 'LOGIN',
	LOGOUT = 'LOGOUT',
}

interface Login {
	type: UserActionTypes.LOGIN;
	payload: User;
}

interface Logout {
	type: UserActionTypes.LOGOUT;
}

export type UserAction = Login | Logout;
