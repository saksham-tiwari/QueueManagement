import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import SignUp from './components/Auth/SignUp/SignUp';
import Login from './components/Auth/Login/Login';
import Otp from './components/Auth/OTP/OTP';
import Forgot from './components/Auth/ForgotPass/ForgotPass';
import ResetPass from './components/Auth/ForgotPass/ResetPass';
import Details from './components/Auth/Detail/Detail';
import QrScanner from './components/Layout/QR-Code/QR-Scan';
import HomePage from './components/Layout/Homepage/HomePage';
import StorePage from './components/Layout/StorePage/StorePage';
import CreateStore from './components/Layout/CreateStore/CreateStore';
import ViewQueue from './components/Layout/ViewQueue/ViewQueue';
import Loader from './components/Layout/Loaders/GifLoader';
import { useSelector } from 'react-redux';
import Error404 from './components/Layout/Error404/Error404';
import DemoLine from './components/Layout/Charts/Chart';

function App() {
  let loader = useSelector(state=>state.LoaderReducer)
  useEffect(()=>{
    window.scrollTo(0,0)
  },[loader])
  return ( <>
        {loader[0]?<Loader/>:<></>}

       <Routes>
       
         {/* Auth Routes */}

        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/otp" element={<Otp />} />
        <Route exact path="/forgot" element={<Forgot />} />
        <Route exact path="/reset" element={<ResetPass />} />
        <Route exact path="/detail" element={<Details />} />

        {/* Layout Routes */}
          <Route exact path="/store/:id" element={<StorePage/>}/>
        <Route exact path="/create-store" element={<CreateStore/>}/>
        <Route exact path="/view-queue/id" element={<ViewQueue/>}/>
        <Route exact path="/qrcode" element={<QrScanner />} />
        <Route exact path="/chart" element={<DemoLine />} />


        <Route path="/404" element={<Error404/>} />
        <Route path="*" element={<Error404 />} />

      </Routes>
    </>
  );
}

export default App;
