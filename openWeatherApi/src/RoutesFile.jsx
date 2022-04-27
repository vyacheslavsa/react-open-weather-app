import  React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home"
import Settings from "./pages/Settings/Settings"

const RoutesFile = () => (

    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Navigate to="/home" />} />redirect to home
    </Routes>
)

export default RoutesFile;


