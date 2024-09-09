import {User} from "../../types/User";

type RootState = {
	user: User;
};

export const getUserName = (state: RootState) => state.user.name;