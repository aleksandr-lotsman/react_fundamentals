import { FormSubmitErrors } from '../types/FormSubmitErrors';
import { User } from '../types/User';

export const isUserDataValid = (
	userData: User,
	setErrors: (errors: FormSubmitErrors) => void
): boolean => {
	const newErrors: FormSubmitErrors = {};

	Object.keys(userData).forEach((key) => {
		if (!userData[key]) {
			newErrors[key] =
				`${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
		}
	});
	setErrors(newErrors);
	return Object.keys(newErrors).length === 0;
};
