export const en = {
    form: [
        {
            label: "Email",
            required: true,
            type: "text",
            placeholder: "demo@gmail.com",
            name: "email",
        },
        {
            label: "Password",
            required: true,
            type: "text",
            placeholder: "Password",
            name: "password",
        },
        {
            label: 'Allow Advertisement',
            required: false,
            type: 'checkbox',
            placeholder: null,
            name: 'allowAdvertisement'
        }
    ],
}
export const URL = 'https://jsonplaceholder.typicode.com/';
// eslint-disable-next-line
export const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

export const HEADERS = {
    'Content-type': 'application/json; charset=UTF-8'
}

export const ALERTS_TYPES = {
    Error: 'error',
    Warning: 'warning',
    Info: 'info',
    Success: 'success'
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


