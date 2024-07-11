import { createSlice } from '@reduxjs/toolkit';


export const layoutSlice = createSlice({
	name: 'layout',
	initialState: {
		mobileSideNavOpen: false,
	},
	reducers: {
		toggleMobileSideNavState: (state) => {
			state.mobileSideNavOpen = !state.mobileSideNavOpen;
		},
		
	},
});

export const { toggleMobileSideNavState } =
	layoutSlice.actions;

export default layoutSlice.reducer;
