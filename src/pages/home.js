import React, { Component } from "react";
import { Box, Button } from "@mui/material";
import CustomForm from "../components/form/form";
import ConfirmationModal from "../components/confirmation-modal/confirmation-modal";
import { ALERT_MODEL, ALERTS_TYPES, AUTH_USER, FORM_GROUP } from "../constants/en";
import classNames from "classnames";
import HomeService from "../services/home.service";
import StorageService from "../services/storage.service";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { ValidateField, ValidateForm } from "../components/validator/validators";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: FORM_GROUP,
            isOpenForm: false,
            isOpenConfirmModal: false,
            alertOptions: ALERT_MODEL
        };

        this.toggleForm = this.toggleForm.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAccept = this.handleAccept.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    componentWillUnmount() {
        this.setState({...this.state, form: this.resetForm()});
    }

    toggleForm() {
        this.setState({...this.state, isOpenForm: !this.state.isOpenForm});
    }

    toggleModal() {
        const {email, password, allowAdvertisement} = this.state.form;
        if ((email.value.length || password.value.length || allowAdvertisement.value)) {
            this.setState({...this.state, isOpenConfirmModal: !this.state.isOpenConfirmModal});
        } else {
            this.toggleForm();
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const {email, password, allowAdvertisement} = this.state.form;
        const {errors, form} = ValidateForm(this.state.form);

        if (!errors) {
            // TODO: Mock request
            HomeService.doSignIn({email, password, allowAdvertisement}).then((res) => {
                if (res.id) {
                    this.fadeAlert(ALERTS_TYPES.Success, 'Successfully Login');
                    this.props.handleAuth(true);
                    StorageService.setLSItem(AUTH_USER, res, true);
                }
            });
        } else {
            this.setState({...this.state, form: form})
            this.fadeAlert(ALERTS_TYPES.Error, 'Invalid email address or password');
            this.props.handleAuth(false);
        }
    }

    handleChange(e) {
        e.preventDefault();

        const form = this.state.form
        let controlName = '';
        if (!e.target.hasOwnProperty('checked')) {
            controlName = e.target.attributes[2].value;
            form[controlName].value = e.target.value;
        } else {
            controlName = e.target.attributes[1].value;
            form[controlName].value = e.target.checked;
        }
        form[controlName].errors = !form[controlName].validateOnSubmit
            ? ValidateField(form[controlName]) : '';
        this.setState({...this.state, form: form})
    }

    fadeAlert(alertType, alertMessage) {
        const alert = {showAlert: true, alertType: alertType, alertMessage: alertMessage};
        this.setState({...this.state, alertOptions: alert});
        setTimeout(() => {
            alert.showAlert = false;
            this.setState({...this.state, alertOptions: alert});
        }, 5000);
    }

    handleAccept() {
        this.setState({...this.state, form: this.resetForm()}, () => {
            this.setState({...this.state, isOpenConfirmModal: false}, () => {
                this.toggleForm();
            })
        });
    }

    resetForm() {
        const {email, password, allowAdvertisement} = this.state.form;
        email.value = '';
        email.errors = '';
        password.value = '';
        password.errors = '';
        allowAdvertisement.value = false;
        return {email, password, allowAdvertisement};
    }

    render() {
        const {isOpenForm, isOpenConfirmModal, alertOptions, form} = this.state;
        return (
            <>
                <Box className={classNames('d-flex', 'mt-2', 'mb-2')}>
                    <h1 className={'mr-2'}>Home</h1>
                    <Button variant="contained"
                            color={!isOpenForm ? 'primary' : 'error'}
                            size={'large'}
                            sx={{width: '144px', height: 'max-content'}}
                            onClick={!isOpenForm ? this.toggleForm : this.toggleModal }>
                        {!isOpenForm ? 'Get Started' : 'Close'}
                    </Button>
                </Box>
                <CustomForm isOpen={isOpenForm} data={form} btnTitle={'Submit'}
                            errors={form.errors}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit} />

                <Snackbar open={alertOptions.showAlert} sx={{ width: '100%'}} spacing={2}
                          anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
                    <Alert variant="filled" severity={alertOptions.alertType}>
                        {alertOptions.alertMessage}
                    </Alert>
                </Snackbar>

                <ConfirmationModal open={isOpenConfirmModal}
                     handleAccept={this.handleAccept}
                     handleReject={this.toggleModal}/>
            </>
        );
    }
}

export default Home;

