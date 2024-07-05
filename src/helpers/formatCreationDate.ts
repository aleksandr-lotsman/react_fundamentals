import { parse, format } from 'date-fns';

import { CREATE_DATE_INPUT_FORMAT, CREATE_DATE_OUTPUT_FORMAT } from '../constants';

export const formatCreationDate = (date: string): string => {
	// Parse the input date string using the date format
	const parsedDate = parse(date, CREATE_DATE_INPUT_FORMAT, new Date());

	// Format the date in 'dd.MM.yyyy' format
	return format(parsedDate, CREATE_DATE_OUTPUT_FORMAT);
};
