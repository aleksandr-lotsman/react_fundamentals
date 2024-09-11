export type UserState = {
	isAuth: boolean; // default value - false. After success login - true
	name: string; // default value - empty string. After success login - name of user
	email: string; // default value - empty string. After success login - email of user
	token: string; // default value - empty string or token value from localStorage.
	role: string;
};
