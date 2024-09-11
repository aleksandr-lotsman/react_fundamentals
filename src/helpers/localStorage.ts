export const getToken = () => {
	const token = localStorage.getItem('token');
	return token ? token.replace(/^"|"$/g, '') : null;
};

export const setToken = (token: string) => {
	localStorage.setItem('token', JSON.stringify(token));
};

export const removeItem = (key: string) => {
	localStorage.removeItem(key);
};
