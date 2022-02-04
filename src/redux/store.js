import { configureStore } from '@reduxjs/toolkit';
import FrontPageSlice from '../pages/FrontPage/FrontPageSlice';
import getExistingBusinessSlice from '../pages/AboutBusiness/ExistingBusiness/getExistingBusiness-slice';
import getNewBusinessSlice from '../pages/AboutBusiness/NewBusiness/getNewBusinessSlice';
import getShareHolderSlice from '../pages/DashBoard/Details/getShareHolderSlice';
import getOfficersSlice from '../pages/DashBoard/Details/getOfficersSlice';
import getCapitalSlice from '../pages/DashBoard/Details/getCapitalSlice';
import getBusinessActivitySlice from '../pages/DashBoard/Details/getBusinessActivitySlice';
import getFinanceDataSlice from '../pages/DashBoard/Payments/getFinanceDataSlice';
import  PaidUpCapital  from '../pages/DashBoard/Modals/PaidUpCapital/addPaidUpCapitalSlice';
import  NewAddress  from '../pages/DashBoard/Modals/ChangeAddress/ChangeAddressSlice';
export const store = configureStore({
  reducer: {
    userData: FrontPageSlice,
    selectValue: getExistingBusinessSlice,
    selectActivity: getNewBusinessSlice,
    ShareHoldersInfo: getShareHolderSlice,
    OfficersInfo:getOfficersSlice,
    CapitalData:getCapitalSlice,
    ActivityData:getBusinessActivitySlice,
    FinanceData:getFinanceDataSlice,
    Capitals:PaidUpCapital,
    Address: NewAddress,
  },
});
