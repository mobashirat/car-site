import { Container, TextField, Typography, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, loading, authError } = useAuth()

    const location = useLocation()
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault()
    }
    return (
        <Container>
            <Typography sx={{ mt: 5, color: 'purple', fontWeight: 800 }} variant="h3" gutterBottom component="div">
                Login
            </Typography>
            <form onSubmit={handleLogin}>
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="your name"
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    id="standard-basic"
                    label="your email"
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
                <Button sx={{ width: '75%', m: 1, backgroundColor: 'purple' }} type="submit" variant="contained">Login</Button>
                <NavLink style={{ textDecoration: 'none' }} to="/register">
                    <Button sx={{ width: '75%', m: 1, backgroundColor: 'purple' }} type="submit" variant="contained">Sign Up</Button>
                </NavLink>
            </form>
            {loading && <CircularProgress color="inherit" />}
            {user?.email &&
                <Alert severity="success">logged in successfully</Alert>}

        </Container>
    );
};

export default Login;