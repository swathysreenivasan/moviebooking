// AdminLogin.jsx
import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';


// Import Header component
import Header from './Header';

const AdminLogin = () => {
  const [adminCredentials, setAdminCredentials] = useState({ username: 'admin', password: 'adminpassword' });
  const [loginError, setLoginError] = useState(false);

  const handleLogin = () => {
    if (adminCredentials.username === 'admin' && adminCredentials.password === 'adminpassword') {
      // Successful login - redirect using Link
      window.location.href = '/admindashboard';
    } else {
      // Failed login
      setLoginError(true);
    }
  };

  return (
    <>
      {/* Include the Header component */}
      <Header />

      <div>
        <Typography variant="h5">Admin Login</Typography>
        <TextField
          label="Username"
          value={adminCredentials.username}
          onChange={(e) => setAdminCredentials({ ...adminCredentials, username: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={adminCredentials.password}
          onChange={(e) => setAdminCredentials({ ...adminCredentials, password: e.target.value })}
          fullWidth
          margin="normal"
        />
        {loginError && <p style={{ color: 'red' }}>Invalid credentials. Please try again.</p>}
        <Button variant="contained" onClick={handleLogin} fullWidth>
          Login
        </Button>
      </div>
    </>
  );
};

export default AdminLogin;
