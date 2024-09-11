import { Author } from '../../types/Author';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApiResponse } from '../../types/ApiResponse';
import * as apiService from '../../api/ApiService';

export const fetchAuthors = createAsyncThunk<Author[]>(
	'authors/fetchAuthors',
	async () => {
		const responseBody: ApiResponse<Author[]> = await apiService.getAuthors();
		if (responseBody.successful) {
			const authors: Author[] = responseBody.result.map((author) => ({
				id: author.id,
				name: author.name,
			}));
			return authors;
		} else {
			console.error('Authors fetching failed');
		}
	}
);

const authorsSlice = createSlice({
	name: 'authors',
	initialState: [] as Author[],
	reducers: {
		addAuthor: (state, action: PayloadAction<Author>) => {
			state.push(action.payload);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAuthors.fulfilled, (state, action) => {
			return action.payload;
		});
	},
});

export const { addAuthor } = authorsSlice.actions;
export const authorsReducer = authorsSlice.reducer;
