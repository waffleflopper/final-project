import React from 'react';
import './Navigation.css';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const Navigation = () => {
    return(
        <nav>
            <Button variant="contained" color="secondary">Sign Out</Button>
        </nav>
    );
}

export default Navigation;