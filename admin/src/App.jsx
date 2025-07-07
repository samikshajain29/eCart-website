import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Orders from "./pages/Orders.jsx";
import Add from "./pages/Add.jsx";
import Lists from "./pages/Lists.jsx";
import Login from "./pages/Login.jsx";
import { adminDataContext } from "./Context/AdminContext.jsx";

function App() {
  let { adminData } = useContext(adminDataContext);
  return (
    <>
      {!adminData ? (
        <Login />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/lists" element={<Lists />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
