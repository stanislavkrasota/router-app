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
import { AUTH_USER } from "./constants/en";
import StorageService from "./services/storage.service";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {isAuth: !!this.getDataFromLS()};

        this.handleAuth = this.handleAuth.bind(this);
        this.getDataFromLS = this.getDataFromLS.bind(this);
    }

    getDataFromLS() {
        return StorageService.getLSItem(AUTH_USER, true);
    }

    handleAuth (auth) {
        this.setState({isAuth: auth});
        if (this.state.isAuth) {
            this.props.navigate(Routing().Welcome)
        }
    }

    render() {
        const {isAuth} = this.state;
        return (
            <Container className={'relative'}>
                <Header isAuth={isAuth} handleAuth={this.handleAuth}/>

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
                </Routes>
            </Container>
        );
    }
}

export default App;


//TODO: Works only when react-router-dom version lower than v6.0
// <GuardedRoute path={Routing().Dashboard} component={Dashboard} auth={isAuth} />
