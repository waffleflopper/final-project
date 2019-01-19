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
    regButton: {
        marginLeft: 'auto',
    }
})
class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            password: '',
            username: '',
            email: '',
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
                    title="Registration"
                />
                <CardContent>
                <FormControl fullWidth className={classes.margin}>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input  
                            id="email"
                            type="email"
                            autoComplete="email"
                            value={this.state.email}
                            onChange={this.handleChange("email")}
                        />
                </FormControl>
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
                    <Button onClick={()=>this.props.onRouteChange('signin')} size="small">Login</Button>
                    <Button 
                        className={classes.regButton} 
                        variant="contained" 
                        color="secondary" 
                        size="small"
                        onClick={() => this.props.onRouteChange('home')}
                    >Signup!</Button>
                </CardActions>
            </Card>
          </div>
        );
    }
}
export default withStyles(styles)(Register)

