import React from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, isLoading, user, authError } = useAuth();

    const history = useHistory();
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Password Didn't match")
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    return (
        <Container>
            <Grid container spacing={2}>

                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h6" gutterBottom component="div">
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            name='name'
                            onBlur={handleOnBlur}
                            label="Your Name"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            type='email'
                            name='email'
                            onBlur={handleOnBlur}
                            label="Your Email"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            type='password'
                            id="standard-basic"
                            name='password'
                            onBlur={handleOnBlur}
                            label="Your Password"
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            type='password'
                            id="standard-basic"
                            name='password2'
                            onBlur={handleOnBlur}
                            label="Your Password"
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 2 }} variant='contained' type='submit' >Register</Button>

                        <NavLink style={{ textDecoration: "none" }} to='login'>

                            <Button variant="text">Already Register? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created Successfully</Alert>}

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

export default Register;