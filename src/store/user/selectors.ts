import { UserState } from '../../types/UserState';

type RootState = {
	user: UserState;
};

export const getUserName = (state: RootState) => state.user.name;
export const getUserRole = (state: RootState) => state.user.role;
