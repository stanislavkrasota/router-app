import React, {Fragment} from "react";
import { Box, Button, Checkbox, FormControlLabel, FormGroup, Grid, TextField } from "@mui/material";
import styles from "./from.module.scss"

const CustomForm = ({
    isOpen,
    handleChange,
    btnTitle,
    handleButtonClick,
    data,
    handleSubmit,
    values,
    id,
    formClassName,
    inputClassName,
    errors
}) => {
    return (
        <Box
            sx={{display: isOpen ? 'flex' : 'none'}}
            className={styles.formBox}>
            <h2>Sign-in Form</h2>

            <FormGroup onSubmit={handleSubmit} className={'mt-2'}>
                <Grid container spacing={2}>
                    {data.map(({ name, type, placeholder, required, label }, index) => (
                        <Fragment key={index}>
                            <Grid item xs={12} >
                                {type === 'text'
                                    ? <TextField id={index + 'control'}
                                        name={name}
                                        label={label}
                                        placeholder={placeholder}
                                        required={required} fullWidth={true}
                                        onChange={handleChange}

                                        error={errors && errors[name]}/>
                                    : (type === 'checkbox'
                                        ?  <FormControlLabel
                                            name={name}
                                            required={required}
                                            control={<Checkbox />}
                                            label={label}
                                        />
                                        : '')
                                }
                            </Grid>
                        </Fragment>
                    ))}
                    <Button
                        variant="contained"
                        color={'primary'}
                        size={'large'}
                        className={'margin-centered'}
                        onClick={handleButtonClick}>
                        {btnTitle}
                    </Button>
                </Grid>
            </FormGroup>
        </Box>
    )
}

export default CustomForm;
