import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.less';
import FrontPage from './pages/FrontPage';
import StepForm from './pages/StepForm/index.js';
import NewBusiness from './pages/AboutBusiness/NewBusiness';
import ExistBusinessInfo from './pages/ExistBusinessInfo';
import ExistingBusiness from './pages/AboutBusiness/ExistingBusiness';
import OwnerInfo from './pages/OwnerInfo';
import ShareHolders from './pages/ShareHolders';
import ShareHolderInfo from './pages/ShareHolderInfo';
import AboutDirector from './pages/Director/AboutDirector';
import AppointDirector from './pages/Director/AppointDirector';
import DirectorInfo from './pages/Director/DirectorInfo';
import Address from './pages/Address';
import MainHeader from './components/MainHeader';
import Payments from './pages/DashBoard/Payments';
import PaymentPlan from './pages/DashBoard/Modals/PaymentPlans';
import CanclePlan from './pages/DashBoard/Modals/CanclePlan';
import CheckOutPlans from './pages/DashBoard/Modals/CheckOutPlans';
import Files from './pages/DashBoard/Files';
import Invite from './pages/DashBoard/Invite';
import Tasks from './pages/DashBoard/Tasks';
function App() {
  return (
    <>
    
    <Router>
      <Routes>
          <Route exact path='/' element={ <FrontPage/> }></Route>
          <Route path='/stepform' element={ <StepForm/> }></Route>
          <Route path='/existbusinessinfo' element={<ExistBusinessInfo/>}></Route>
          <Route path='/existingbusiness' element={<ExistingBusiness/> }></Route>
          <Route path='/newbusiness' element={  <NewBusiness/>}></Route>
          <Route path='/ownerinfo' element={ <OwnerInfo/> }></Route>
          <Route path='/shareholders' element={ <ShareHolders/> }></Route>
          <Route path='/shareholderinfo' element={ <ShareHolderInfo/> }></Route>
          <Route path='/aboutdirector' element={ <AboutDirector/> }></Route>
          <Route path='/appointdirector' element={ <AppointDirector/> }></Route>
          <Route path='/directorinfo' element={ <DirectorInfo/> }></Route>
          <Route path='/address' element={ <Address/> }></Route>
          <Route path='/mainheader' element={ <MainHeader/> }></Route>
          <Route path='/payments' element={ <Payments/> }></Route>
          <Route path='/paymentplan' element={ <PaymentPlan/> }></Route>
          <Route path='/cancleplan' element={ <CanclePlan/> }></Route>
          <Route path='/checkoutplans' element={ <CheckOutPlans/> }></Route>
          <Route path='/files' element={ <Files/> }></Route>
          <Route path='/invite' element={ <Invite/> }></Route>
          <Route path='/tasks' element={ <Tasks/> }></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
