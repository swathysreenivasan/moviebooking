import React from 'react';
import { AppBar, Box, Toolbar, TextField, Autocomplete, Button } from '@mui/material';
import MovieIcon from "@mui/icons-material/Movie";
import { Link } from 'react-router-dom';

const dummyarray = ["Brahmastra", "Drisyam", "Bahubali"];

const Userheader = () => {
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
          <Button variant="contained" color="primary">
            <Link to="/movies">Movies</Link>
          </Button>
          <Button variant="contained" color="primary">
            <Link to="/Userprofile">User</Link>
          </Button>
          <Button variant="contained" color="primary">
            <Link to="/logout">Logout</Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Userheader;
