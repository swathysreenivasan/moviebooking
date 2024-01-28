import React, { useState } from 'react';
import { Button, TextField, Box, Typography, AppBar, Toolbar, Autocomplete } from '@mui/material';
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

const AddMovies = () => {
  const [movieData, setMovieData] = useState({
    title: '',
    description: '',
    actors: '',
    imageurl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovieData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    axios.post("http://localhost:3000/Madd", movieData)
      .then((response) => {
        alert(response.data)
        // Redirect or handle success as needed
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Header />
      <Box mt={6} mx={4}>
        <Typography variant="h4">Add Movie</Typography>
        <form>
          <TextField
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            margin="normal"
            value={movieData.title}
            onChange={handleChange}
          />
          <TextField
            name="description"
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={movieData.description}
            onChange={handleChange}
          />
          <TextField
            name="actors"
            label="Actors"
            variant="outlined"
            fullWidth
            margin="normal"
            value={movieData.actors}
            onChange={handleChange}
          />
          <TextField
            name="imageurl"
            label="Image URL"
            variant="outlined"
            fullWidth
            margin="normal"
            value={movieData.imageurl}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add Movie
          </Button>
        </form>
      </Box>
    </>
  );
}

export default AddMovies;
