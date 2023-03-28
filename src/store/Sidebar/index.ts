import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const SidebarSlice = createSlice({
    name: "Sidebar",
    initialState,
    reducers: {
        setOpenSidebar: (state: any, action: PayloadAction<boolean>) => {
            state.sidebar = action.payload;
        },
    },
});

export const { setOpenSidebar } = SidebarSlice.actions;
export default SidebarSlice.reducer;
