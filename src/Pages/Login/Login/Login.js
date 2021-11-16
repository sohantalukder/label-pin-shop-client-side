import React from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { loginUser, isLoading, user, authError, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }
    return (
        <Container>
            <Grid container spacing={2}>

                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h6" gutterBottom component="div">
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            name='email'
                            onChange={handleOnChange}
                            label="Your Email"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            type='password'
                            id="standard-basic"
                            name='password'
                            onChange={handleOnChange}
                            label="Your Password"
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 2 }} variant='contained' type='submit' >Login</Button>

                        <NavLink style={{ textDecoration: "none" }} to='register'>

                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                    </form>

                    <p>-----------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained" color="success">Google Sign In</Button>


                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Logged In Successfully</Alert>}

                    {authError && <Alert severity="error">{authError}</Alert>
                    }

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }}
                        src="https://image.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg" alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;