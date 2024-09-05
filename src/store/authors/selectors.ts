import {Author} from "../../types/Author";

type RootState = {
	authors: Author[];
};
export const getAuthors = (state: RootState) => state.authors;
