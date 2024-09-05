import { Author } from '../../types/Author';
import { AuthorActionTypes } from './types';

type SaveAuthorsAction = {
	type: AuthorActionTypes.SAVE_AUTHORS;
	payload: Author[];
};

export const saveAuthorsAction = (
	authorsData: Author[]
): SaveAuthorsAction => ({
	type: AuthorActionTypes.SAVE_AUTHORS,
	payload: authorsData,
});

type AddAuthorAction = {
	type: AuthorActionTypes.ADD_AUTHOR;
	payload: Author;
};

export const addAuthorAction = (authorData: Author): AddAuthorAction => ({
	type: AuthorActionTypes.ADD_AUTHOR,
	payload: authorData,
});
