import Submit from "./Components/Submit";
import Source from "./Components/Source";
import Destination from "./Components/Destination";
import Layout from "./Components/Layout";
import Confirm from "./Components/Confirm";
import "./Components/Styles.scss";
import axios from "axios";
import { useState, useEffect } from "react";

import Next from "./Components/Other.jsx";
import "./styles.scss";
import Primary from "./Components/Primary";
import Hello from "./Components/Hello";
// import Create from "./Components/CreateProfile";

// import logo from './logo.svg';
// import './App.css';
import "./Style.scss";
// import React from 'react';
import Agent from './Components/Agent';
import { Navigate, Outlet } from "react-router-dom";
// import {useEffect } from "react";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeNew from './Components/HomeNew';
import Home from './Components/Home';
import Previous from "./Components/Previous";
import Order from "./Components/Items";
import Agentdash from './Components/Agentdash';
import VerticalStepper from "./Components/Tracking";
import Confirmscreen from "./Components/Confirmscreen";
import StepperWrapper from "./Components/StepperWrapper";

import Login from './Components/Login';
// import "./Login.scss";
import "./Signup.scss";
// import "./OTP.scss";
// import "./Changepassword.scss";
import "./Forgotpassword.scss";
import "./Profile.scss";
import"./Components/Tracking.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import OTP from './Components/OTP';
import User from './Components/User';
import Changepassword from './Components/Changepassword';
import Profile from './Components/Profile';
import CreateProfile from "./Components/CreateProfile";
import Forgotpassword from './Components/Forgotpassword';
import Agentlogin from "./Components/Agentlogin";
import Acceptscreen from "./Components/Acceptscreen";
import Rejectscreen from "./Components/Rejectscreen";

const App = () => {
  // function App() {
    const [key1,setKey1]=useState([])
    const ddata=(l)=> {
      setKey1(()=>[l])

    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const handleLogin = () => {
    //   setIsAuthenticated(true);
    // };
    }
  
    // const checkUserToken = () => {
    //   const userToken = localStorage.getItem("token");
  
    //   if (!userToken || userToken === "undefined") {
    //     setIsLoggedIn(false);
    //     Navigate("/");
    //     // toast.warn("redirecting you to login page please login into and access it!")
    //   }
    //   else{
    //     // <Navigate  to =''
    //   }
    
    //   setIsLoggedIn(true);
    // };
  
    // useEffect(() => {
    //   checkUserToken();
    // }, [isLoggedIn]);
    const [uid,setUid]=useState("");
    const fun1=(q)=> {
      setUid(q)
    }
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<HomeNew />} />
          <Route path="/primary1" element={<Primary />} />
          <Route path="/hi" element={<Hello />} />
          <Route path="/t" element={<Layout />} />
          <Route path="/source" element={<StepperWrapper/>}/>
          <Route path="/items" element={<Order/>}/>
          <Route path="/source" element={<Source />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path='/' element={<Home />}></Route>
          <Route path='/agent' element={<Agent />} />
          <Route path='/agentdash' element={<Agentdash display={ddata} dis={fun1}/>} />
          <Route path='/previous' element={<Previous />} />
          <Route path="/tracking" element={<VerticalStepper />} />
          <Route path="/confirmscreen" element={<Confirmscreen display1={key1} dis1={uid} />} />
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/OTP' element={<OTP />}></Route>
          <Route path='/user' element={<User />}></Route>
          <Route path='/changepassword' element={<Changepassword />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path="/createprofile" element={<CreateProfile/>}/>
          <Route path='/forgotpassword' element={<Forgotpassword />}></Route>
          <Route path="/confirmScreen" element={<Confirmscreen />} />
          <Route path="/agentlogin" element={<Agentlogin/>}/>
          <Route path="/acceptscreen" element={<Acceptscreen/>}/>
          <Route path="/rejectscreen" element={<Rejectscreen/>}/>
        </Routes>
      </BrowserRouter>
      <React.Fragment>
      {/* {isLoggedIn && <HomeNew />}

      <Outlet />

      {isLoggedIn && <Login />} */}
    </React.Fragment>
  {/* <ToastContainer/> */}
    </>
  );
};
export default App;
