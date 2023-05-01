import React from "react";
import {
  IconButton,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import { DialogProps } from "../../types/utils";

const TableDialog = (props: DialogProps) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title={props.tooltip_title}>
        <IconButton size="small" color={props.color} onClick={handleClickOpen}>
          {props.icon}
        </IconButton>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.dialog_title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.content}
          </DialogContentText>
        </DialogContent>
        {props.action && (
          <DialogActions>
            <Button onClick={handleClose}>いいえ</Button>
            <Button onClick={props.action} autoFocus>
              はい
            </Button>
          </DialogActions>
        )}
      </Dialog>
    </>
  );
};

export default TableDialog;