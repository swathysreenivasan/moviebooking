// src/LoginForm.jsx

import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const LoginForm = ({ onLogin, setMessage }) => {
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:3000/userlogin', loginData);
      console.log(response.data);
      setMessage('Login successful!');
      onLogin(); // Notify the parent component about the successful login
    } catch (error) {
      console.error('Login error:', error.message);
      setMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div>
      <Typography variant="h5">Login</Typography>
      <TextField
        label="Email"
        value={loginData.email}
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={loginData.password}
        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleLogin} fullWidth>
        Login
      </Button>
    </div>
  );
};

export default LoginForm;
