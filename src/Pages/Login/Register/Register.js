import { Container, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})

    const { user, registerUser, loading, authError } = useAuth()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }
    const handleLogin = e => {
        if (loginData.password !== loginData.password2) {
            alert('your password did not match.please try again.')
            return
        }
        registerUser(loginData.email, loginData.password)
        e.preventDefault()
    }
    return (
        <Container>
            <Typography sx={{ mt: 5 }} variant="h3" gutterBottom component="div">
                Sign Up
            </Typography>
            {!loading && <form onSubmit={handleLogin}>
                {/* <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="your name"
                    variant="standard" /> */}
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="your email"
                    type="email"
                    name="email"
                    onChange={handleOnChange}
                    variant="standard" />

                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="your password"
                    type="password"
                    name="password"
                    onChange={handleOnChange}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="retype your password"
                    type="password"
                    name="password2"
                    onChange={handleOnChange}
                    variant="standard" />
                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Sign up</Button>
                <NavLink to="/login">
                    <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">For Login</Button>
                </NavLink>
            </form>}
            {loading && <CircularProgress color="inherit" />}
            {user?.email &&
                <Alert severity="success">your account added successfully</Alert>}
            {authError && <Alert severity="error">{authError}</Alert>}
        </Container>
    );
};

export default Register;