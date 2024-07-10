import {Author} from "../types/Author";

export const getAuthorNameById = (id: string, authorsList: Author[]) => {
	const author = authorsList.find(author => author.id === id);
	return author ? author.name : 'Unknown Author';
}