import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import Home from "./pages/home";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Routing from "./constants/routing"
import { Container } from "@mui/material";

function App() {

    return (
        <Container>
            <Header />

            <hr />

            <Routes>
                <Route path={Routing().Home} element={<Home/>} />
                <Route path={Routing().About} element={<About/>} />
                <Route path={Routing().Dashboard} element={<Dashboard/>} />
            </Routes>
        </Container>
    );
}

export default App;
