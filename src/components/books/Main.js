import React, { Fragment } from "react";
import Header from "components/Header";
import { Outlet } from "react-router-dom";
import Footer from "components/Footer";

const Main = () => {
  return (
    <Fragment>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </Fragment>
  );
};

export default Main;
