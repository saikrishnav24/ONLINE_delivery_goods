import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import abc from './online.png';
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from './Navbar';

const Forgotpassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("")
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [otpError, setOtpError] = useState("");
    const [isValid, setIsValid] = useState(false);
    const navigate = useNavigate();
    // const validatepassword = (e) => {
    //     if (e.target.name === "password") {
    //         setPassword(e.target.value)
    //         if (!password) {
    //             setPasswordError('Password is required');
    //         }
    //         else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)) {
    //             setPasswordError('must contain cap,small,num,specialcharacters');
    //         }
    //         else if (password.length < 6) {
    //             setPasswordError('Password must be atleast 6 characters');
    //         }
    //         else {
    //             setPasswordError("")
    //         }
    //     }
    // }
    // const handleConfirmPasswordChange = (e) => {
    //     setConfirmPassword(e.target.value);
    //     if (e.target.value !== password) {
    //         setConfirmPasswordError("Passwords must match.");
    //         setIsValid(false);
    //     } else {
    //         setConfirmPasswordError("");
    //         setIsValid(true);
    //     }
    // };
    // if (e.target.name === "confirmPassword") {
    //     setConfirmPassword(e.target.value)
    //     if (e.target.value !== password) {
    //         setConfirmPasswordError("Passwords do not match")
    //     }
    //     else {
    //         setConfirmPasswordError("")
    //     }
    // }


    // const handlesubmit = (e) => {
    //     e.preventDefault();
    //     if (password === '' || confirmPassword === '' || otp === '') {
    //         alert("Enter all Fields");
    //     }
    //     else if (password !== '' && confirmPassword !== '' && otp !== '') {

    //         // if(!password ==confirmPassword){
    //         //     setError("Passwords must match")
    //         //        }
    //         //        else{
    //         //            error=''
    //         //        }

    //         // navigate('/login');
    //         // window.location.reload();
    //     }
    //     alert("password changed successfully")
    //     navigate('/login');
    //         window.location.reload();
    // }
    // const handlesubmit = (e) => {
    //     e.preventDefault();
    //     if (password === '' || password === '' || confirmPassword === '') {
    //         toast.warn(" Please enter all Fields");
    //     }
    //     else if (password !== '' && password !== '' && confirmPassword !== '') {
    //         //             if(!password ==confirmPassword){
    //         // setError("Passwords must match")
    //         //             }
    //         //             else{
    //         //                 error=''
    //         //             }
    //         toast.success("password changed successfully")
    //         navigate('/login');
    //         // window.location.reload();
    //     }
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.length < 8) {
            alert('Password must be at least 8 characters long');
          } else if (!password.match(/[a-z]/) || !password.match(/[A-Z]/) || !password.match(/[0-9]/) || !password.match(/[!@#$%^&*]/)) {
            alert(' password must contain cap,small,num,special characters');
          } else if (password !== confirmPassword) {
            alert('Passwords do not match');
          } 
          else if(otp.length !==6){
            alert("OTP must be 6 characters long")

          }
          else {
            alert('password changed successfully')
            navigate('/')
            // send password change request to server
          }
        // if (password !== '' && password !== '' && confirmPassword !== '') {
        //   // Here you can send the data to your server
        //   alert(" password changed Successfully!");
        //   navigate('/')
          
        // } else {
        //   toast.error("Please enter all details!");
        // }
      };
    // const handleOtpChange = (e) => {
    //     setOtp(e.target.value);
    //     if (e.target.value.length !== 6) {
    //         setOtpError("OTP must be 6 characters long.");
    //         setIsValid(false);
    //     } else {
    //         setOtpError("");
    //         setIsValid(true);
    //     }
    // };
    // const loginNavigate = (e) => {
    //     // navigate('/login');
    //     // window.location.reload();
    // }
    return (
        <>
        <Navbar/>
            <div>
                <div className="gg">
                    <div className="flex">
                        <div className="x ">
                            <img src={abc} height="500" width="500" alt="del" />
                        </div>
                        <div class="ab">
                            <h1>Forgot password ?</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="cd">
                                    <div className="m-3" controlId="formBasicPassword">
                                        <label> Enter New Password</label><br />
                                        <input type="password" onChange={(e) => setPassword(e.target.value)} name="password" className="form-control" required placeholder="New Password" />
                                        <p><span style={{ color: 'red' }}>{passwordError}</span></p>
                                    </div>
                                    <div className="m-3" controlId="formBasicPassword">
                                        <label> Confirm Password</label><br />
                                        <input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} name="password" className="form-control" required placeholder="confrim Password" />
                                        <p><span style={{ color: 'red' }}>{confirmPasswordError}</span></p>
                                    </div>
                                    <div className="m-3" controlId="formBasicPassword">
                                        <label>OTP</label><br />
                                        <input type="number" onChange={(e)=>setOtp(e.target.value)} value={otp} className="form-control" required placeholder="Otp" />
                                        <p><span style={{ color: 'red' }}>{otpError}</span></p>
                                    </div>

                                    <div>
                                        <button type="submit" className="btn btn-primary" >Confirm</button>
                                    </div>
                                    {error && <p>{error}</p>}
                                </div>
                                <ToastContainer/>
                            </form>
                        </div>
                        {/* <div class="">
                            
                            <div className="zx">
                                <h1>Forgot password ?</h1>
                            </div>
                           
                            <form>
                                <div className="z">
                                    <div className="m-2" controlId="formBasicPassword">
                                        <label> Enter New Password </label><br />
                                        <input type="password" name="password" onChange={(e) => validatepassword(e)} className="form-control" required placeholder="New Password" />

                                        <p><span style={{ color: 'red' }}>{passwordError}</span></p>
                                    </div>
                                    <div className="m-2" controlId="formBasicPassword">
                                        <label>Confirm Password</label><br />
                                        <input type="password" name="confirmPassword" onChange={(e => validatepassword(e))} className="form-control" required placeholder="Confirm password" />

                                        <p><span style={{ color: 'red' }}>{confirmPasswordError}</span></p>
                                    </div>
                                    <div className="m-2" controlId="formBasicOtp">
                                        <label>OTP</label><br />
                                        <input type="text" onChange={handleOtpChange} value={otp} className="form-control" required placeholder="6-digit code" />
                                        <p><span style={{ color: 'red' }}>{otpError}</span></p>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-primary" onClick={handlesubmit}>Confirm</button>
                                    </div>
                                    <div>
                                        <Link style={{ color: "black", textDecoration: "none" }} onClick={loginNavigate}>Back </Link>
                                    </div>
                                </div>
                            </form>
                            
                        </div> */}
                    </div>
                </div>
            </div >
        </>
    );
};
export default Forgotpassword;