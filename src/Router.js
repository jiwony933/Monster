import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Monsters from "./Monsters";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Monsters />} />
                <Route path="/" element={<></>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
