import { configureStore } from '@reduxjs/toolkit';
import FrontPageSlice from '../pages/FrontPage/FrontPageSlice';
import getExistingBusinessSlice from '../pages/AboutBusiness/ExistingBusiness/getExistingBusiness-slice';
import getNewBusinessSlice from '../pages/AboutBusiness/NewBusiness/getNewBusinessSlice';
export const store = configureStore({
  reducer: {
    userData: FrontPageSlice,
    selectValue: getExistingBusinessSlice,
    selectActivity: getNewBusinessSlice,
  },
});
