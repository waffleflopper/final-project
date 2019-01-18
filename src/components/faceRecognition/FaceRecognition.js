import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import './FaceRecognition.css';

const styles = theme => ({
    media: {
        padding: 0,
        margin: 5,
        position: 'relative',
    }
})

const FaceRecognition = (props) => {
    const { classes, imgURL, box } = props;
    return (
        <div className={classes.media}>
            <img id='inputimage' src={imgURL} alt='' width="500px" height="auto"/>
            <div className='bounding-box' style={{top: box.topRow+'px', right: box.rightCol+'px', bottom: box.bottomRow+'px', left: box.leftCol+'px'}}></div>
        </div>
    );
}



export default withStyles(styles)(FaceRecognition);