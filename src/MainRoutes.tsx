import {
  Routes,
  Route
} from "react-router-dom";
import Sign from './pages/Sign';
import Home from './pages/Home';
import React from "react";
import Profile from "./pages/Profile";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sign/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </div>
  )
  
}

export default MainRoutes;
