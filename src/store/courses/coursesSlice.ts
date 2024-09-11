import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Course } from '../../types/Course';
import { ApiResponse } from '../../types/ApiResponse';
import * as apiService from '../../api/ApiService';

export const fetchCourses = createAsyncThunk<Course[]>(
	'courses/fetchCourses',
	async () => {
		const responseBody: ApiResponse<Course[]> = await apiService.getCourses();
		if (responseBody.successful) {
			const courses: Course[] = responseBody.result.map((course) => ({
				id: course.id,
				title: course.title,
				description: course.description,
				creationDate: course.creationDate,
				duration: course.duration,
				authors: course.authors,
			}));
			return courses;
		} else {
			console.error('Courses fetching failed');
		}
	}
);

const coursesSlice = createSlice({
	name: 'courses',
	initialState: [] as Course[],
	reducers: {
		addCourse: (state, action: PayloadAction<Course>) => {
			state.push(action.payload);
		},
		deleteCourse: (state, action: PayloadAction<string>) => {
			return state.filter((course) => course.id !== action.payload);
		},
		updateCourse: (state, action: PayloadAction<Course>) => {
			const courseIndex = state.findIndex(
				(course) => course.id === action.payload.id
			);
			if (courseIndex >= 0) {
				state[courseIndex] = action.payload;
			}
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchCourses.fulfilled, (state, action) => {
			return action.payload;
		});
	},
});

export const { addCourse, deleteCourse, updateCourse } = coursesSlice.actions;
export const coursesReducer = coursesSlice.reducer;
