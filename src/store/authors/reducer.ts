import { Author } from '../../types/Author';
import { AuthorActionTypes } from './types';

const authorsInitialState: Author[] = [];

export const authorsReducer = (state = authorsInitialState, action: any) => {
	switch (action.type) {
		case AuthorActionTypes.SAVE_AUTHORS:
			return action.payload;
		case AuthorActionTypes.ADD_AUTHOR:
			return [...state, action.payload];
		default:
			return state;
	}
};
