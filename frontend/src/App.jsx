import React from "react";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import { useContext } from "react";
import { userDataContext } from "./context/UserContext";

function App() {
  let { userData } = useContext(userDataContext);
  return (
    <>
      {userData && <Nav />}
      <Routes>
        <Route path="/signup" element={<Registration />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
