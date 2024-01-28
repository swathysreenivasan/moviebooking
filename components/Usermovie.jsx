import React, { useEffect, useState } from 'react';
import { Button,Card,CardActions, CardMedia, CardContent, Grid, Typography, AppBar, Box, Toolbar, TextField, Autocomplete } from '@mui/material';
import MovieIcon from "@mui/icons-material/Movie";
import { Link } from 'react-router-dom';
import axios from 'axios';

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
            <Button component={Link} to="/Usermovie" variant="contained" color="primary" sx={{ mr: 1 }}>
              Movies
            </Button>
            <Button component={Link} to="/Userprofile" variant="contained" color="primary" sx={{ mr: 1 }}>
              User
            </Button>
            <Button component={Link} to="/logout" variant="contained" color="primary">
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
const Usermovie = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/Mview")
      .then((resp) => {
        console.log(resp.data);
        setData(resp.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteValue = (id) => {
    console.log(id)
    axios.delete(`http://localhost:3000/Mremove/${id}`)
      .then((response) => {
        alert(response.data)
        window.location.reload(false)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Userheader />
      <div style={{ margin: '4%' }}>
        <Grid container spacing={2}>
          {data.map((val, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Card sx={{ minWidth: 275 }}>
                <CardMedia
                  component="img"
                  alt={val.title}
                  height="400"
                  image={val.imageurl}
                />
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {val.title}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {val.description}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {val.actors}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button   component={Link} to={"/Userbooking"}
                    onClick={() => deleteValue(val._id)}
                    size="small" variant='contained' color="secondary">Book Movie
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

export default Usermovie;
