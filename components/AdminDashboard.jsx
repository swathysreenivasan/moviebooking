import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Autocomplete, TextField, AppBar, Toolbar, Card, CardContent, Grid } from '@mui/material';
import MovieIcon from "@mui/icons-material/Movie";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import PersonIcon from "@mui/icons-material/Person";

import { Link } from 'react-router-dom';
import axios from 'axios';

const dummyarray = ["Brahmastra", "Drisyam", "Bahubali"];

const Header = () => {
  return (
    <AppBar position='sticky' sx={{ bgcolor: "#2b2d42" }}>
      <Toolbar>
        <Box width={"30%"}>
          <MovieIcon />
        </Box>
        <Box width={"30%"} margin="auto">
          <Autocomplete
            freeSolo
            options={dummyarray.map((option) => option)}
            renderInput={(params) => (
              <TextField
                sx={{ input: { color: "white" } }}
                variant="standard"
                {...params}
                placeholder="Search Across Multiple Movies"
              />
            )}
          />
        </Box>
        <Box display={"flex"}>
          <Button variant="contained" color="primary" sx={{ marginRight: 1, "& a": { textDecoration: "none", color: "white" } }}>
            <Link to="/Adminmovies">Movies</Link>
          </Button>
          <Button variant="contained" color="primary" sx={{ marginRight: 1, "& a": { textDecoration: "none", color: "white" } }}>
            <Link to="/Addmovies">Add Movies</Link>
          </Button>
          <Button variant="contained" color="primary" sx={{ marginRight: 1, "& a": { textDecoration: "none", color: "white" } }}>
            <Link to="/Adminbookings">Bookings</Link>
          </Button>
          <Button variant="contained" color="primary" sx={{ "& a": { textDecoration: "none", color: "white" } }}>
            <Link to="/Adminusers">Users</Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

const AdminDashboard = () => {
  const [moviesCount, setMoviesCount] = useState(0);
  const [bookingsCount, setBookingsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);

  useEffect(() => {
    // Fetch counts from your backend or update them based on your logic
    axios.get("http://localhost:3000/getMoviesCount")
      .then((resp) => {
        setMoviesCount(resp.data.count);
      })
      .catch((err) => console.log(err));

    axios.get("http://localhost:3000/getBookingsCount")
      .then((resp) => {
        setBookingsCount(resp.data.count);
      })
      .catch((err) => console.log(err));

    axios.get("http://localhost:3000/getUsersCount")
      .then((resp) => {
        setUsersCount(resp.data.count);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Header />

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        minHeight="70vh"  // Adjusted height
        padding="6rem"
      >
        <Typography variant="h2" color="primary" gutterBottom>
          Welcome to Admin Dashboard
        </Typography><br></br><br></br><br></br><br></br><br></br>

        <Grid container spacing={10} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card sx={{ background: "#2b2d42", color: "white", borderRadius: 8 }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  <MovieIcon fontSize="large" sx={{ marginRight: 1 }} />
                  Movies Count: {moviesCount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ background: "#2b2d42", color: "white", borderRadius: 8 }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  <EventSeatIcon fontSize="large" sx={{ marginRight: 1 }} />
                  Bookings Count: {bookingsCount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ background: "#2b2d42", color: "white", borderRadius: 8 }}>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  <PersonIcon fontSize="large" sx={{ marginRight: 1 }} />
                  Users Count: {usersCount}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AdminDashboard;
