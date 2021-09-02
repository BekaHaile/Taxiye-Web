import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({

    formControl: {
        minWidth: "100%",
    },
    select: {
        color:"black",
        backgroundColor:"${theme.colors.white};",
        '&:hover': {
            cursor: 'pointer',

        }
    },
}));

export default function OpenSelect({ value, action, items }) {
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
