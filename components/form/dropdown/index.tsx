import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

    formControl: {
        minWidth: "100%",
    },
    select: {
        color:"black",
        backgroundColor:"#fff",
        '&:hover': {
            cursor: 'pointer',

        }
    },
}));

export default function ControlledOpenSelect({ value, action, items }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const handleChange = (time) => {
        action(time.target.value);
      };
    return (
        <>

            <FormControl className={classes.formControl}>
                <Select

                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={value}
                    onChange={handleChange}
                >
                    {
                        items.map((item, key) => {
                            return <MenuItem className={classes.select} key={key} value={item}>{item}</MenuItem>
                        })
                    }


                </Select>
            </FormControl>
        </>
    );
}
