import {Author} from "../../types/Author";

export enum AuthorActionTypes {
	SAVE_AUTHORS = 'SAVE_AUTHORS',
	ADD_AUTHOR = 'ADD_AUTHOR',
}

interface SaveAuthors {
	type: AuthorActionTypes.SAVE_AUTHORS;
	payload: Author[];
}

interface AddAuthor {
	type: AuthorActionTypes.ADD_AUTHOR;
	payload: Author;
}

export type AuthorAction = SaveAuthors | AddAuthor;