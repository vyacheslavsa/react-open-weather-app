import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/index";
import Settings from "./pages/Settings/index";

const App = () => (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Navigate to="/home" />} /> {/*redirect to home*/}
    </Routes>
)
export default App


