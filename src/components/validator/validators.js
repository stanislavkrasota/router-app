import { EMAIL_PATTERN } from "../../constants/en";

export function ValidateField(control) {
    if (control?.required) {
        switch (control.name) {
            case 'email':
                control.errors = EMAIL_PATTERN.test(control.value)
                    ? ''
                    : 'Email is not valid!';
                break;
            case 'password':
                control.errors = control?.value?.length < 8 && control?.value?.length > 0
                    ? 'Password must be 8 characters long!'
                    : '';
                break;
            default:
                break;
        }
        return control.errors;
    } else {
        return '';
    }
}

export function ValidateForm(data) {
    let form = Object.entries(data).map(e => (e[1]));

    form.map((control) => {
        control.errors = ValidateField(control);
        data[control.name].errors = control.errors;
    });
    return {errors: form.find(c => c.errors.length), form: data};
}
