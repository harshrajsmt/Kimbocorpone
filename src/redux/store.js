import { configureStore } from '@reduxjs/toolkit';
import FrontPageSlice from '../pages/FrontPage/FrontPageSlice';

export const store = configureStore({
  reducer: {
    FrontPage: FrontPageSlice,
  },
});
