import { format } from 'date-fns';

export const formatCurrentDate = (outputFormat: string): string => {
	return format(new Date(), outputFormat);
};
