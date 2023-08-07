import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
// import { useHistory } from 'react-router-dom';
import Navbar from "./Navbar";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import abc from "./online.png";

const Signup = () => {
  const [emailError, setEmailError] = useState("");
  const [email, setEmail] = useState("");
  const [password, passwordchange] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [username, setuserName] = useState("");
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [cPasswordError, setCpasswordError] = useState("");
  const [error, setErrors] = useState();

  const validateEmail = (e) => {
    var email = e.target.value;
    if (e.target.name === "username") {
      setuserName(e.target.value);
    }

    if (e.target.name === "email") {
      setEmail(e.target.value);
      if (validator.isEmail(email)) {
        setEmailError("");
      } else {
        setEmailError("Enter valid Email!");
      }
    }
    if (e.target.name === "password") {
      passwordchange(e.target.value);
      if (!password) {
        setPasswordError("Password is required");
      } else if (
        !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
          password
        )
      ) {
        setPasswordError(
          "Password must contain capital,small,numeric,special characters"
        );
      } else if (password.length < 6) {
        setPasswordError("Password must be atleast 6 characters");
      } else {
        setPasswordError("");
      }
    }
    if (e.target.name === "cpassword") {
      setCpassword(e.target.value);
      if (e.target.value !== password) {
        setCpasswordError("Passwords do not match");
      } else {
        setCpasswordError("");
      }
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      // "username": username,

      email: email,

      password: password
    };

    axios
      .post(
        "http://ec2-65-2-80-226.ap-south-1.compute.amazonaws.com:8001/register/",

        payload
      )
      .then((response) => {
        console.log(response);
        if (response?.status === 200) {
          console.log(response?.status);
          // navigate("/login");
        }
      })

      .catch((error) => {
        console.log(error.response.data); // handle error
      });

    setErrors({});
    if (username !== "" && email !== "" && password !== "") {
      toast.success("successfully signed up!");
      setTimeout(() => {
        navigate("/login");
      }, 6000);
    } else {
      toast.warn("noo");
    }
    setErrors({});
  };
  const loginNavigate = (e) => {
    navigate("/login");
    window.location.reload();
  };

  return (
    <>
      <Navbar />
      <div>
        <div className="man">
          <div className="flex">
            <div className="">
              <div className="f">
                <img src={abc} alt="dele" height="500" width="500" />
              </div>
            </div>
            <div className="">
              <div className="pg">
                <h1>Sign Up</h1>

                <form>
                  <div>
                    {/* <div className="mb-3" id="formBasicUsername">
                      <label>Username</label>
                      <input
                        onChange={(e) => validateEmail(e)}
                        name="username"
                        type="text"
                        placeholder="Enter Username"
                        className="form-control"
                        required
                      />
                    </div> */}

                    <div className="mb-3" id="formBasicEmail">
                      <label>Email address</label>
                      <input
                        onChange={(e) => validateEmail(e)}
                        name="email"
                        type="email"
                        placeholder="Enter email"
                        className="form-control"
                        required
                      />

                      <span style={{ color: "red" }}>{emailError}</span>
                    </div>
                    <div className="mb-3" id="formBasicLastName">
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        onChange={(e) => validateEmail(e)}
                        placeholder="password"
                        className="form-control"
                        required
                      />

                      <span style={{ color: "red" }}>{passwordError}</span>
                    </div>
                    {console.log(error)}
                    <div className="mb-3">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        name="cpassword"
                        className="form-control"
                        onChange={(e) => validateEmail(e)}
                        placeholder="Confirm Password"
                        required
                      />

                      <span style={{ color: "red" }}>{cPasswordError}</span>
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="btn btn-primary"
                      type="Submit"
                    >
                      Submit
                    </button>
                    <div>
                      <p>
                        Already have an account ?
                        <Link
                          style={{ color: "blue", textDecoration: "none" }}
                          onClick={loginNavigate}
                        >
                          Login
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
