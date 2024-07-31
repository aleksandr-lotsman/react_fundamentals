export const isDataValid = <T, E> (
	data: T,
	setErrors: (errors: E) => void
): boolean => {
	const newErrors = {} as E;

	Object.keys(data).forEach((key) => {
		if (!data[key]) {
			newErrors[key] =
				`${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
		}
	});
	setErrors(newErrors);
	return Object.keys(newErrors).length === 0;
};
