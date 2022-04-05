import React, {Fragment} from "react";
import { Box, Button, Checkbox, FormControlLabel, Grid, TextField } from "@mui/material";
import styles from "./from.module.scss"

const CustomForm = ({
    isOpen,
    handleChange,
    btnTitle,
    data,
    handleSubmit,
    errors
}) => {
    return (
        <Box sx={{display: isOpen ? 'flex' : 'none'}}
            className={styles.formBox}>
            <h2>Sign-in Form</h2>

            <form onSubmit={handleSubmit} className={'mt-2'}>
                <Grid container spacing={2}>
                    {data.map(({ name, type, placeholder, required, label }, index) => (
                        <Fragment key={index}>
                            <Grid item xs={12} >
                                {type === 'text'
                                    ? <TextField id={index + '-control'}
                                        name={name}
                                        tabIndex={index + 1}
                                        label={label}
                                        placeholder={placeholder}
                                        required={required}
                                        fullWidth={true}
                                        onChange={handleChange}
                                        error={errors && errors[name]}/>
                                    : (type === 'checkbox'
                                        ?  <FormControlLabel
                                            name={name}
                                            tabIndex={index + 1}
                                            required={required}
                                            control={<Checkbox onChange={handleChange} />}
                                            label={label}
                                        />
                                        : '')
                                }
                            </Grid>
                        </Fragment>
                    ))}
                    <Button
                        variant="contained"
                        type={'submit'}
                        color={'primary'}
                        size={'large'}
                        className={'margin-centered'}>
                        {btnTitle}
                    </Button>
                </Grid>
            </form>
        </Box>
    )
}

// CustomForm.propTypes = {
//     handleChange: PropTypes.func.isRequired,
//     handleSubmit: PropTypes.func.isRequired,
//     isOpen: PropTypes.bool,
//     data: PropTypes.object,
//     errors: PropTypes.object
// };

export default CustomForm;
