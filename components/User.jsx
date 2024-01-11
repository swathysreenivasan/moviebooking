// src/User.jsx
import React, { useState } from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';

const User = () => {
  const [isRegistered, setIsRegistered] = useState(false);
  const [message, setMessage] = useState(null);

  const handleRegister = () => {
    setIsRegistered(true);
  };

  const handleLogin = () => {
    setIsRegistered(false);
  };

  return (
    <div>
      {isRegistered ? (
        <RegisterForm onRegister={handleLogin} setMessage={setMessage} />
      ) : (
        <LoginForm onLogin={handleRegister} setMessage={setMessage} />
      )}

      {message && <Typography color={message.includes('failed') ? 'error' : 'success'}>{message}</Typography>}

      <Typography>
        {isRegistered ? (
          <>
            Already have an account? <Link to="/login" onClick={handleLogin}>Login here</Link>.
          </>
        ) : (
          <>
            Don't have an account? <Link to="/register" onClick={handleRegister}>Register here</Link>.
          </>
        )}
      </Typography>
    </div>
  );
};
export default User;
