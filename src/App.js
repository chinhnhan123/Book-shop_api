import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Login from "./components/form/Login";
import Home from "./page/Home";

import PrivateRoute from "./components/PrivateRoute";
import Main from "components/books/Main";
import Cart from "page/Cart";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main />}>
          <Route
            path="/home"
            element={
              // <PrivateRoute>
              <Home />
              // </PrivateRoute>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              // <PrivateRoute>
              <Cart />
              // </PrivateRoute>
            }
          ></Route>
        </Route>

        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
