import { Author } from '../types/Author';

export const getCourseAuthorsNames = (
	authorsIds: string[],
	authors: Author[]
): string => {
	return authors
		.filter((author) => authorsIds.includes(author.id))
		.map((author) => author.name)
		.join(', ');
};
