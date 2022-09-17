import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const loggedIn = useSelector((state) => state.login.email);
  console.log(
    "🚀 -----------------------------------------------------------------------🚀"
  );
  console.log(
    "🚀 ~ file: PrivateRoute.js ~ line 7 ~ PrivateRoute ~ loggedIn",
    loggedIn
  );
  console.log(
    "🚀 -----------------------------------------------------------------------🚀"
  );

  return loggedIn ? children : <Navigate to={`/login`}></Navigate>;
};

export default PrivateRoute;
