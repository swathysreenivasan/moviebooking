// src/RegisterForm.jsx

import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

const RegisterForm = ({ onRegister, setMessage }) => {
    const [registerData, setRegisterData] = useState({ name: '', email: '', password: '' });
  
    const handleRegister = async () => {
        try {
          const response = await axios.post('http://localhost:3000/register', registerData);
          console.log(response.data);
          setMessage('Registration successful!');
        } catch (error) {
          console.error('Registration error:', error.message);
          setMessage('Registration failed. Please try again.');
        }
      };
    
  return (
    <div>
      <Typography variant="h5">Register</Typography>
      <TextField
        label="Name"
        value={registerData.name}
        onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        value={registerData.email}
        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={registerData.password}
        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleRegister} fullWidth>
        Register
      </Button>
    </div>
  );
};

export default RegisterForm;