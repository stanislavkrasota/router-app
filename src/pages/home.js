import React, { Component } from "react";
import { Box, Button } from "@mui/material";
import CustomForm from "../components/form/form";
import { ALERTS_TYPES, EMAIL_PATTERN, en } from "../constants/en";
import classNames from "classnames";
import HomeService from "../services/home.service";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: '',
                password: '',
                allowAdvertisement: false
            },
            isOpen: false,
            alertOptions: {
                showAlert: false,
                alertType: ALERTS_TYPES.Success,
                alertMessage: ''
            }
        };

        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggle() {
        this.setState({...this.state, isOpen: !this.state.isOpen});
    }

    handleSubmit(e) {
        e.preventDefault();
        const {email, password, allowAdvertisement} = this.state.form;
        if (EMAIL_PATTERN.test(email) && password.length > 3 ) {
            HomeService.doSignIn({email, password, allowAdvertisement}).then((res) => {
                if (res.id) {
                    this.fadeAlert(ALERTS_TYPES.Success, 'Successfully Login');
                    this.props.handleAuth(true);
                }
            });
        } else {
            this.fadeAlert(ALERTS_TYPES.Error, 'Invalid email address or password');
        }
    }

    handleChange(e) {
        e.preventDefault();
        const form = this.state.form
        if (!e.target.hasOwnProperty('checked')) {
            let controlName = e.target.attributes[2].value;
            form[controlName] = e.target.value;
            this.setState({...this.state, form: form})
        } else {
            let controlName = e.target.attributes[1].value;
            form[controlName] = e.target.checked;
            this.setState({...this.state, form: form})
        }
    }

    fadeAlert(alertType, alertMessage) {
        const alert = {showAlert: true, alertType: alertType, alertMessage: alertMessage};
        this.setState({...this.state, alertOptions: alert});
        setTimeout(() => {
            alert.showAlert = false;
            this.setState({...this.state, alertOptions: alert});
        }, 5000);
    }

    render() {
        return (
            <>
                <Box className={classNames('flex', 'mt-2', 'mb-2')}>
                    <h1 className={'mr-2'}>Home</h1>
                    <Button variant="contained"
                            color={!this.state.isOpen ? 'primary' : 'error'}
                            size={'large'}
                            sx={{width: '144px', height: 'max-content'}}
                            onClick={this.toggle}>{!this.state.isOpen ? 'Get Started' : 'Close'}</Button>
                </Box>
                <CustomForm isOpen={this.state.isOpen} data={en.form} btnTitle={'Submit'}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit} />

                <Snackbar open={this.state.alertOptions.showAlert} sx={{ width: '100%'}} spacing={2}
                          anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
                    <Alert variant="filled" severity={this.state.alertOptions.alertType}>
                        {this.state.alertOptions.alertMessage}
                    </Alert>
                </Snackbar>
            </>
        );
    }
}

export default Home;

