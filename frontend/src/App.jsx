import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";


import Login from "./pages/login/login";
import SignUp from "./pages/signup/signUp";
import Home from "./pages/home/home";
import { useAuthContext } from "./context/authContext";

const App = () => {
  const {authUser} = useAuthContext()
  return (
    <div className="p-4 h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-sky-300">
      <Routes>
        <Route path="/" element={authUser ?  <Home /> : <Navigate to={"/login"} />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <SignUp />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
