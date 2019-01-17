import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 500,
        margin: '2em',
    }
})

const Rank = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Typography variant="h4" color="inherit">
                Robert, your curret rank is...
            </Typography>
            <Typography variant="h3" color="inherit">
                #5
            </Typography>
        </div>
    );
}

export default withStyles(styles)(Rank);