import React from 'react';
import './Navigation.css';
import {FormControlLabel, Switch, IconButton, Button, Typography, Toolbar, AppBar, withStyles} from '@material-ui/core';

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
    const { classes, themeClicker, lightTheme } = props;

    return (

        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                <FormControlLabel
                        control={
                            <Switch
                            checked={!lightTheme}
                            onChange={themeClicker}
                            value='Theme'
                        />
                        }
                        label="Light/Dark"
                    />
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
