import React, {useState} from "react";
import { Box, Button } from "@mui/material";
import CustomForm from "../components/form/form";
import { en } from "../constants/en";
import classNames from "classnames";

export default function Home() {
    const [showForm, setForm] = useState(false);

    const toggle = () => {
        setForm(!showForm);
    }

    return (
        <>
            <Box className={classNames('flex', 'mt-2')}>
                <h1 className={'mr-2'}>Home</h1>
                <Button variant="contained"
                        color={!showForm ? 'primary' : 'error'}
                        size={'large'}
                        sx={{width: '144px', height: 'max-content'}}
                        onClick={toggle}>{!showForm ? 'Get Started' : 'Close'}</Button>
            </Box>
            <CustomForm isOpen={showForm} data={en.form} btnTitle={'Submit'} />
        </>
    );
}
