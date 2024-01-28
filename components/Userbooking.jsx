import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserBooking = () => {
  const [bookingData, setBookingData] = useState({
    movie: '',
    date: '',
    seatNumber: '',
    user: '', // Assuming you get the user dynamically or from authentication
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend API
      await axios.post('http://localhost:3000/Badd', bookingData);

      console.log('Booking data submitted successfully');

      // You can add redirection logic or any other actions here after successful submission.
    } catch (error) {
      console.error('Error submitting booking data:', error.message);
    }
  };

  return (
    <Box width={"80%"} margin="auto">
      <Typography variant="h4" textAlign={"center"} marginY={2}>
        Book Movie
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Movie"
          name="movie"
          value={bookingData.movie}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Date"
          name="date"
          type="date"
          value={bookingData.date}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Seat Number"
          name="seatNumber"
          type="number"
          value={bookingData.seatNumber}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
  label="User"
  name="user"
  value={bookingData.user}
  onChange={handleChange}
  fullWidth
  margin="normal"
/>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Confirm Booking
        </Button>
      </form>
      <Box display="flex" justifyContent="center" marginTop={2}>
        <Button component={Link} to="/Userhome" variant="outlined" color="primary">
          Back to Home
        </Button>
      </Box>
    </Box>
  );
};

export default UserBooking;
