import React, { useEffect, useState } from "react";
import { Route, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
    const userToken = localStorage.getItem("token");
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      // alert("redirecting to login page, please login to access these pages!")
      // toast.warn("redirecting to login page, please login to access these pages!")
      navigate("/");
    }
    setIsLoggedIn(true);
  };
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);
  return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
};
<ToastContainer/>
export default ProtectedRoute;





// import React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// const useAuth = () => {
// //   const user = localStorage.getItem("user");
// //   if (user) {
// //     return true;
// //   } else {
// //     return false;
// //   }
//   return true
//   // return false
// };
// const ProtectedRoutes = (props) => {
//   const auth = useAuth();
//   return auth ? <Outlet /> : <Navigate to="/" />;
// };
// export default ProtectedRoutes;
