import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    mobileSideNavOpen: false,
  },
  reducers: {
    toggleMobileSideNavState: (state) => {
      state.mobileSideNavOpen = !state.mobileSideNavOpen;
      if(document.body.classList.contains('no-scroll')){
        document.body.classList.remove('no-scroll')
      }else {
        document.body.classList.add('no-scroll')
      }
    },
  },
});

export const { toggleMobileSideNavState } = layoutSlice.actions;

export default layoutSlice.reducer;
