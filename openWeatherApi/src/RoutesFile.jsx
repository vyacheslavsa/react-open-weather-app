import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/index"
import Index from "./pages/Settings"
import Contact from "./pages/Contact";
import About from "./pages/About";

const RoutesFile = () => (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Navigate to="/home" />} /> {/*redirect to home*/}
    </Routes>
)

export default RoutesFile;


