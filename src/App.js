import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/header";
import GuardedRoute from "./components/guard/guard-route";
import Home from "./pages/home";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Welcome from "./pages/welcome";
import Routing from "./constants/routing"
import { Container } from "@mui/material";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isAuth: false};

        this.handleAuth = this.handleAuth.bind(this);
    }

    handleAuth (auth) {
        this.setState({isAuth: auth});
    }

    render() {
        const {isAuth} = this.state;
        return (
            <Container>
                <Header />

                <hr />

                <Routes>
                    <Route path={!isAuth ? Routing().Home : Routing().Welcome}
                           element={!isAuth ? <Home handleAuth={this.handleAuth}/> : <Welcome />} />
                    <Route path={Routing().About} element={<About/>} />
                    <Route path={Routing().Dashboard}
                           element={
                               <GuardedRoute isAuth={isAuth} rootPath={Routing().Home}>
                                   <Dashboard />
                               </GuardedRoute>
                           }
                    />
                    {/*Works only when react-router-dom version lower than v6.0*/}
                    {/*<GuardedRoute path={Routing().Dashboard} component={Dashboard} auth={isAuth} />*/}
                </Routes>
            </Container>
        );
    }
}

export default App;
