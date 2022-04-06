import React, { Component } from 'react';
import { Navigate } from "react-router-dom";

class GuardedRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {isAuth: props.isAuth};
    }

    render() {
        return this.state.isAuth ? this.props.children : <Navigate to={this.props.rootPath} />;
    }

    // Works only when react-router-dom version lower than v6.0
    // return(
    //     <Route {...rest} render={(props) => (
    //         auth === true
    //             ? <Component {...props} />
    //             : <Navigate to={Routing().Home} />
    //     )} />
    // )
}

export default GuardedRoute;
