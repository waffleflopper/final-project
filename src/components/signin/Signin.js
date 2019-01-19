import React from 'react';
import { withStyles, Card, CardContent, InputAdornment, InputLabel, CardActions, Button, FormControl, Input, IconButton, CardHeader } from '@material-ui/core';
import { Visibility, VisibilityOff} from '@material-ui/icons';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },

    margin: {
        margin: theme.spacing.unit,
    },

    loginTitle: {
        padding: '12px',
    },
    loginButton: {
        marginLeft: 'auto',
    }
})
class Signin extends React.Component {
    constructor() {
        super()
        this.state = {
            password: '',
            username: '',
            showPassword: false,
        }
    }

    handleChange = (prop) => evt => {
        this.setState({ [prop]: evt.target.value });
    }

    toggleShowPassword = () => {
        this.setState(state => ({showPassword: !state.showPassword}));
    } 
        
    render() {  
        const { classes } = this.props;
        return (
          <div className={classes.root}>
            <Card>
                <CardHeader 
                    title="Login"
                />
                <CardContent>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="username">Username</InputLabel>
                        <Input  
                            id="username"
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange("username")}
                            
                        />
                    </FormControl>
                    <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            id="password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="Toggle password visibility"
                                        onClick={this.toggleShowPassword}
                                    >
                                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </CardContent>
                <CardActions className={classes.margin}>
                    <Button onClick={() => this.props.onRouteChange('register')} size="small">Signup</Button>
                    <Button 
                        className={classes.loginButton} 
                        variant="contained" 
                        color="secondary" 
                        size="small"
                        onClick={() => this.props.onRouteChange('home')}
                    >Login</Button>
                </CardActions>
            </Card>
          </div>
        );
    }
}
export default withStyles(styles)(Signin)
