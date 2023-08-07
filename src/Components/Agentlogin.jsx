import React, { useEffect } from "react";
import qwe from "./12.png";
import { useState } from "react";
import axios from "axios";
import {Link, useNavigate } from "react-router-dom";
import logo from "./sk.png";
import agl from "./agl2.png";

const Agentlogin=()=> {
    const home=useNavigate();
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // http://ec2-13-233-151-187.ap-south-1.compute.amazonaws.com:8001/AgentLogin
    axios.post(`http://ec2-3-111-51-229.ap-south-1.compute.amazonaws.com:8001/AgentLogin`,
    {
      "email": email,
      "password": password
    }
    )
    .then((res)=> {
      // if (res.status === 200){
        sessionStorage.setItem("Access",res.data.token)
        console.log(res.data.token)
        localStorage.setItem("Token",res.data.token)
    setTimeout(function() { window.location.replace('/agentdash'); }, 2000)
        // alert('logged succesfully')
      // }
    }
    ).catch(()=>{
      alert('unsuccessfull! enter correct details')
    }
    )


    const validEmail = email.includes("@gmail.com");
    const validPassword = password.match(/[a-z]/) && password.match(/[A-Z]/) && password.match(/[0-9]/) && password.match(/[!@#$%^&*]/)

    // if (
    //   validEmail &&
    //   validPassword  
    // ) {
    //   alert(
    //     'User Successfully Logged In!!');
    //   // home("/agentdash");
    // } else if (!password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/[0-9]/) || !password.match(/[!@#$%^&*]/)) {
    //   alert(' Password must contain capital,small,num,special characters');
    // }
    // else {
    //   alert("Error Occurred!");
    // }
}

    return (
        <>
         <nav class="fixed-nav-bar">
      <nav class="navbar navbar-expand-lg navbar-dark ">
        <a class="navbar-brand" href="#"><img src={logo} alt="qwe" width="95" height="30"/> </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
        </div>
      </nav>
      </nav>


        <div className="bgj">
          <div className="cont">
            <div className="row">
                <div className="col-6">
                  <center>
                <img src={agl} alt="dele" height="700" width="700" />
                </center>
                </div>
                <div className="col-6">
            <div className="form-agent">
              <form onSubmit={handleSubmit}>
                <center>
                  <h4>Agent Login here!</h4>
                </center>
                <div class="row">
                    {/* <div className="col-4"></div> */}
                  <div class="col-md-12">
                    <div>

                      <div>
                        <input
                          type="email"
                          value={email}
                          class="form-control"
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter email"
                          required
                        />
                      </div>

                      <div>
                        <input
                          type="password"
                          value={password}
                          className="form-control"
                          onChange={(e) => setPassword(e.target.value)}
                          placeholder="Enter Password"
                          required
                        />
                      </div>
                      <div className="heading6">
                        <button className="btn btn-primary" onClick={handleSubmit}>LogIn</button>
                      </div>
                      <div className="d-flex flex-row justify-content-center">
                        <h5 className="aglogin">Don't have an account? </h5>
                        <Link to="/agent"><h5><a className="nn" href="">Register</a></h5></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* <div className="col-4"></div> */}
            </div>
            </div>
          </div>
      </div>
        </>
    )
}
export default Agentlogin;