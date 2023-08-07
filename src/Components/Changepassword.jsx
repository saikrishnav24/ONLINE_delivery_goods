import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import abc from './online.png';
import axios from "axios";
import Navbar from './Navbar';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Changepassword = () => {
  const [passwords, setPasswords] = useState({
    username: '',
    oldpassword: '',
    newpassword: ''
  });
  const [oldpassword, setoldPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState("")
  const [passwordError, setPasswordError] = useState("");
  const [oldpasswordError, setoldPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const handleChangePassword = (event) => {
    event.preventDefault();
    const validationErrors = validate(passwords);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    axios.post('http://ec2-43-204-108-116.ap-south-1.compute.amazonaws.com:8000/app/user/changepassword/', passwords)
      .then(response => {
        if (response?.status === 200) {
          alert("Password Changed successfully");
          navigate('/');
          console.log(response?.status);
        }
        // handle success
      })
      .catch(error => {
        console.log(error);
        // handle error
      });
  };

  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      toast.error("Enter correct user name");
      errors.username = 'User Name is required';
    }
    if (!values.oldpassword) {
      errors.oldpassword = 'Current password is required';
    }
    if (!values.newpassword) {
      errors.newpassword = 'New password is required';
    }
    // else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(passwords)) {
    //     errors.newPassword='Password must contain capital,small,numeric,special characters';
    //          }
    else if (values.newpassword.length < 8) {
      errors.newpassword = 'New password must be at least 8 characters long';
    }
    if (!values.confirmNewPassword) {
      errors.confirmNewPassword = 'Confirm new password is required';
    } else if (values.newpassword !== values.confirmNewPassword) {
      errors.confirmNewPassword = 'New password and confirm new password must match';
    }

    return errors;

  };

  //   const loginNavigate = (e) => {
  //              navigate('/login');
  //              window.location.reload();
  //        }
  // const handleoldPasswordChange = (e) => {


  //     setoldPassword(e.target.value);
  //     if (!oldpassword) {
  //         setoldPasswordError('Password is required');
  //     }
  //     else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(oldpassword)) {
  //         setoldPasswordError('must contain cap,small,num,special characters');
  //     }
  //     else if (oldpassword.length < 6) {
  //         setoldPasswordError('Password must be atleast 6 characters');
  //     }
  //     else {
  //         setoldPasswordError("")
  //     }
  // };
  // const handlePasswordChange = (e) => {
  //     setPassword(e.target.value);
  //     if (!password) {
  //         setPasswordError('Password is required');
  //     }
  //     else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)) {
  //         setPasswordError('must contain cap,small,num,special characters');
  //     }
  //     else if (password.length < 6) {
  //         setPasswordError('Password must be atleast 6 characters');
  //     }
  //     else {
  //         setPasswordError("")
  //     }
  // };
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
  // const handlesubmit = (e) => {
  //     e.preventDefault();
  //     if (oldpassword === '' || password === '' || confirmPassword === '') {
  //         alert("Enter all Fields");
  //     }
  //     else if (oldpassword !== '' && password !== '' && confirmPassword !== '') {
  //         //             if(!password ==confirmPassword){
  //         // setError("Passwords must match")
  //         //             }
  //         //             else{
  //         //                 error=''
  //         //             }
  //         alert("password changed successfully")
  //         navigate('/profile');
  //         // window.location.reload();
  //     }
  // }
  //     const handlesubmit = (e) => {
  //         e.preventDefault();
  //         if (oldpassword !== '' && password !== '' && confirmPassword !== '') {
  //             // Here you can send the data to your server
  //             alert(" password changed Successfully!");
  //             navigate('/')

  //         } 
  //         else if (oldpassword === '' || password === '' || confirmPassword === '') {
  //             toast.error("Please enter all details!"); 
  //         }
  //         else if(oldpassword === password){
  // setError("Old password and new password must be different")
  //         }
  //     };
  // const handlesubmit = (e) => {
  //     e.preventDefault();
  //     if (!oldpassword || !password || !confirmPassword) {
  //       toast.error('All fields are required');
  //     } else if (oldpassword === password) {
  //       setPasswordError('Old password and new password must be different');
  //     } 
  //     else if (password!==confirmPassword) {
  //       confirmPasswordError('Passwords must match');
  //     } 
  //     else {
  //       // submit new password
  //       alert('Password changed successfully');
  //       navigate('/')
  //     }
  // if (!oldpassword) {
  //     setoldPasswordError('Password is required');
  // }
  // else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(oldpassword)) {
  //     setoldPasswordError('must contain cap,small,num,special characters');
  // }
  // else if (oldpassword.length < 6) {
  //     setoldPasswordError('Password must be atleast 6 characters');
  // }
  // else {
  //     setoldPasswordError("")
  // }
  // if (!password) {
  //     setPasswordError('Password is required');
  // }
  // else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(password)) {
  //     setPasswordError('must contain cap,small,num,special characters');
  // }
  // else if (password.length < 6) {
  //     setPasswordError('Password must be atleast 6 characters');
  // }
  // else {
  //     setPasswordError("")
  // }
  // if(!confirmPassword){
  //     setConfirmPasswordError("Password is required")
  // }
  // else if (password!==confirmPassword) {
  //     confirmPasswordError('Passwords must match');
  //   } 
  //   };


  return (
    <>
    <Navbar/>
      <div>
        <div className="vv">
          <div className="flex">
            <div className="yz">
              <img src={abc} height="500" width="500" alt="del" />
            </div>
            <div class="ab">
              <h1>Change password ?</h1>
              <form onSubmit={handleChangePassword}>
                <div className="m-2" id="formBasicPassword">
                  <label htmlFor="Username">User Name</label>
                  <input type="text" id="username" value={passwords.username} onChange={(event) => setPasswords({ ...passwords, username: event.target.value })} className="form-control" placeholder="User Name" />
                  {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
                </div>
                {/* <div className="error">{error}</div> */}
                <div className="cd">
                  <div className="m-2" id="formBasicPassword">
                    <label htmlFor="old-password">Old Password</label>
                    <input type="password" id="old-password" value={passwords.oldpassword} onChange={(event) => setPasswords({ ...passwords, oldpassword: event.target.value })} className="form-control" placeholder="Old Password" />
                    {errors.currentPassword && <span style={{ color: 'red' }}>{errors.oldpassword}</span>}
                  </div>
                  <div className="m-2" id="formBasicPassword">
                    <label htmlFor="new-password">New Password</label>
                    <input type="password" id="new-password" value={passwords.newpassword} onChange={(event) => setPasswords({ ...passwords, newpassword: event.target.value })} className="form-control" placeholder="New Password" />
                    {errors.newPassword && <span style={{ color: 'red' }}>{errors.newpassword}</span>}
                  </div>
                  <div className="m-2" id="formBasicPassword">
                    <label htmlFor="confirm-new-password">Confirm New Password</label>
                    <input type="password" id="confirm-new-password" value={passwords.confirmNewPassword} onChange={(event) => setPasswords({ ...passwords, confirmNewPassword: event.target.value })} className="form-control" placeholder="Confirm New Password" />
                    {errors.confirmNewPassword && <span style={{ color: 'red' }}>{errors.confirmNewPassword}</span>}
                  </div>
                  {/* <div className="m-3" controlId="formBasicPassword">
                                        <label> Enter Old Password</label><br />
                                        <input type="password" onChange={handleoldPasswordChange} value={oldpassword} className="form-control" required placeholder="Old Password" />
                                        <p><span style={{ color: 'red' }}>{oldpasswordError}</span></p>
                                    </div> */}
                  {/* <div className="m-3" controlId="formBasicPassword">
                                        <label> Enter New Password</label><br />
                                        <input type="password" onChange={handlePasswordChange} value={password} className="form-control" required placeholder="New Password" />
                                        <p><span style={{ color: 'red' }}>{passwordError}</span></p>
                                    </div> */}
                  {/* <div className="m-3" controlId="formBasicPassword">
                                        <label>Confirm Password </label><br />
                                        <input type="password" onChange={handleConfirmPasswordChange} value={confirmPassword} className="form-control" required placeholder="Confirm Password" />
                                        <p><span style={{ color: 'red' }}>{confirmPasswordError}</span></p>
                                    </div> */}

                  <div>
                    <button type="submit" className="btn btn-primary">Confirm</button>
                  </div>
                  <ToastContainer />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};
export default Changepassword;