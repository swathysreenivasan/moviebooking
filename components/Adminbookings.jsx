import React, { useEffect, useState } from 'react';
import { Button, Card, CardActions,  CardContent, Grid, Typography, AppBar, Box, Toolbar, TextField, Autocomplete } from '@mui/material';
import MovieIcon from "@mui/icons-material/Movie";
import { Link } from 'react-router-dom';
import axios from 'axios';

const dummyarray = ["Brahmastra", "Drisyam", "Bahubali"];

const Header = () => {
  return (
    <AppBar position='sticky' sx={{ bgcolor: "#2b2d42" }}>
      <Toolbar>
        <Box width={"20%"}>
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

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/Bview")
      .then((resp) => {
        console.log(resp.data);
        setBookings(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const cancelBooking = (id) => {
    console.log(id)
    axios.delete(`http://localhost:3000/Bremove/${id}`)
      .then((response) => {
        alert(response.data)
        window.location.reload(false)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Header />
      <div style={{ margin: '4%' }}>
        <Grid container spacing={2}>
          {bookings.map((booking, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ minWidth: 275 }}>
                
                <CardContent>
                  <Typography variant="h5" component="div">
                    {booking.movie}
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    Date: {booking.date}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Seat Number: {booking.seatNumber}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    User: {booking.user}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => cancelBooking(booking._id)}
                    size="small" variant='contained' color="secondary">Cancel Booking
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default AdminBookings;
