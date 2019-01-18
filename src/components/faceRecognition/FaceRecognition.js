import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    media: {
        padding: 0,
        margin: 5,
    }
})

const FaceRecognition = (props) => {
    const { classes, imgURL } = props;
    return (
        <div className={classes.media}>
            <img id='inputimage' src={imgURL} alt='' width="500px" height="auto"/>
        </div>
    );
}

export default withStyles(styles)(FaceRecognition);