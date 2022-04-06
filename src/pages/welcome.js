import React, { Component } from "react";

class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1 className={'margin-centered'}>Welcome</h1>
            </div>
        )
    }
}

export default Welcome;
