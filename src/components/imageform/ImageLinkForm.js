import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import FaceRecognition from '../faceRecognition/FaceRecognition';

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
    },
    divider: {
        marginTop: 10,
        marginBottom: 10,
    }
})

class ImageLinkForm extends React.Component {

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
                onChange={this.props.onInputChange}
                margin="normal"
                fullWidth
                helperText="http://link.to.someimage.jpg"
            />
            <Button 
            variant="contained"
            className={classes.button} 
            color="secondary" 
            onClick={this.props.onButtonSubmit}>
                Submit!
            </Button>



            <FaceRecognition imgURL={this.props.imgURL}/>
        </Paper>
    )
    }

}

export default withStyles(styles)(ImageLinkForm);