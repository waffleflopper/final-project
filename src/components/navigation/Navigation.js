import React from 'react';
import './Navigation.css';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
})

const Navigation = (props) => {
    const { classes } = props;

    return (

        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        RB
                    </IconButton>
                    <Typography variant="h4" color="inherit" className={classes.grow}>
                        Facial Recognition - Final Project
                    </Typography>
                    <Button color="inherit">Logout</Button>
                </Toolbar>
            </AppBar>
        </div>

    );



    /* const { classes } = props;
    return(
        <nav>
            <Button variant="contained" className={classes.button} color="secondary">Sign Out</Button>
        </nav>
    ); */
}

export default withStyles(styles)(Navigation);
