import React from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { CONFIRMATION_MODAL } from "../../constants/en";

const ConfirmationModal = ({
   open,
   title= CONFIRMATION_MODAL.title,
   description = CONFIRMATION_MODAL.description,
   btnAccept = CONFIRMATION_MODAL.btnAccept,
   btnReject = CONFIRMATION_MODAL.btnReject,
   handleAccept,
   handleReject
}) => {
    return (
        <Dialog
            open={open}
            disableEscapeKeyDown={false}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleReject}>{btnReject}</Button>
                <Button onClick={handleAccept} autoFocus>
                    {btnAccept}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ConfirmationModal;
