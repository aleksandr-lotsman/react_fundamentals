export const getCourseDuration = (mins: number): string => {
	// Calculate hours and minutes
	const hh = Math.floor(mins / 60);
	const mm = mins % 60;

	const formattedHours = hh < 10 ? `0${hh}` : `${hh}`;
	const formattedMinutes = mm < 10 ? `0${mm}` : `${mm}`;

	return `${formattedHours}:${formattedMinutes} hours`;
};
