export const FORM_GROUP = {
    email: {
        label: "Email",
        required: true,
        type: "text",
        placeholder: "demo@gmail.com",
        name: "email",
        value: '',
        errors: '',
        validateOnSubmit: true
    },
    password: {
        label: "Password",
        required: true,
        type: "text",
        placeholder: "Password",
        name: "password",
        value: '',
        errors: '',
        validateOnSubmit: false
    },
    allowAdvertisement: {
        label: 'Allow Advertisement',
        required: false,
        type: 'checkbox',
        placeholder: null,
        name: 'allowAdvertisement',
        value: false,
        errors: '',
        validateOnSubmit: false
    }
}

export const ALERTS_TYPES = {
    Error: 'error',
    Warning: 'warning',
    Info: 'info',
    Success: 'success'
}

export const ALERT_MODEL = {
    showAlert: false,
    alertType: ALERTS_TYPES.Success,
    alertMessage: ''
}
export const URL = 'https://jsonplaceholder.typicode.com/';
// eslint-disable-next-line
export const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
export const IP_PATTERN = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;

export const HEADERS = {
    'Content-type': 'application/json; charset=UTF-8'
}

export const EMPLOYEES_TABLE_COLUMNS = [
    {name: 'ID'},
    {name: 'Name'},
    {name: 'Username'},
    {name: 'Email'},
    {name: 'Phone Number'},
    {name: 'Website'},
    {name: 'Address'}
]

export const AUTH_USER = 'auth-user';

export const IP_URL = 'https://www.cloudflare.com/cdn-cgi/trace';

export const CONFIRMATION_MODAL = {
    title: 'Confirmation Modal',
    description: 'If you are close this modal your progress will be lost.',
    btnReject: 'Disagree',
    btnAccept: 'Agree',
}

