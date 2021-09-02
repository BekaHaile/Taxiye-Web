import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import store from '../../redux/store';
import { showMessage } from "../../redux/actions/navigation";

function Alert(props) {
    return <MuiAlert elevation={2} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
}));

export default function SnackBar() {
    const classes = useStyles();
    const message = useSelector((state) => state["navigation"]["message"]);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        store.dispatch(showMessage(false, "", ""));
    };

    return (
        <div className={classes.root}>

            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={message.show} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={message.type}>
                    {message.text}
                </Alert>
            </Snackbar>
        </div>
    );
}
