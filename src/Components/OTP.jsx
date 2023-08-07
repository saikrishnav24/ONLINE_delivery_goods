import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import abc from './online.png';
import Navbar from './Navbar';
const OTP = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("")
    const navigate = useNavigate();
    
    const validateEmail = (e) => {
        var email = e.target.value
        setEmail(e.target.value);
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get('').then(response => {
            if (email === '') {
                alert("enter all fields");
            }
            else if (response?.status === 200) {
                navigate('/forgotpassword');
                alert("OTP sent successfully");
                console.log(response)
            }

        })
            .catch(error => {
                console.log(error.response.data);
            })



    };
    
    const loginNavigate = (e) => {
        navigate('/login');
        window.location.reload();
    }
    return (
<>
<Navbar/>
        <div className="tt">
            <div className='flex'>
                <div className="zz">
                    
                    <img src={abc} alt='dele' height="500" width="500" />
                    
                </div>
                
                <div className='xx'>
                    <h1>OTP ?</h1>

                    <form>
                        <div className=" mb-3" id="formBasicEmail">
                            <label>Email</label>
                            <input value={email} onChange={(e) => validateEmail(e)} className="form-control" type="email" placeholder="Enter email" />
                            <span style={{ color: 'red' }}>{emailError}</span>
                        </div>
                        <button onClick={handleSubmit} className="btn btn-primary" type="submit">
                            Generate OTP
                        </button>
                        <div>
                            <p> <Link style={{ color: "black", textDecoration: "none" }} onClick={loginNavigate}>Back</Link></p>
                        </div>
                    </form>
                </div>
                
            </div>


        </div>
        </>
    );
}
export default OTP;