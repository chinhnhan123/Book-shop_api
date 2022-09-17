import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Login from "./components/form/Login";
import Home from "./page/Home";

import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
