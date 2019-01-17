import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './ImageLinkForm.css';


const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        clear: 'both',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    }
})

class ImageLinkForm extends React.Component {
    state = {
        url: 'https://some_url'
    }

    handleChange = name => event => {
        this.setState ({
            [name]: event.target.value,
        })
    }

    render() {
        const { classes } = this.props;
    
    return (
        <Paper className={classes.root} elevation={1}>
            <Typography variant="button">
                Enter the URL of the image you wish to process facial recognition on:
            </Typography>
            <TextField
                id="url"
                label="URL"
                className={classes.textField}
                value={this.state.name}
                onChange={this.handleChange('url')}
                margin="normal"
                fullWidth
                helperText="http://link.to.someimage.jpg"
            />
            <Button className={classes.button} color="primary">Submit!</Button>
        </Paper>
    )
    
    
    }

}

export default withStyles(styles)(ImageLinkForm);