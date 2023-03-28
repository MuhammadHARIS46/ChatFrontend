import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import SidebarSlice from "./Sidebar";
export const store = configureStore({
  reducer: {
    Sidebar: SidebarSlice,
  },
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
