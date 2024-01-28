import React from 'react';
import { Box, Typography, CardMedia, Card, CardContent, Button, CardActions, AppBar, Toolbar, TextField, Autocomplete } from '@mui/material';
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
          <Button component={Link} to="/Usermovie" variant="contained" color="primary" sx={{ mr: 1 }}>
            Movies
          </Button>
          <Button component={Link} to="/Userprofile" variant="contained" color="primary" sx={{ mr: 1 }}>
            User
          </Button>
          <Button component={Link} to="/logout" variant="contained"  color="primary">
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

const Userhome = () => {
  return (
    <>
      <Userheader />
      <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
        <Box margin={"auto"} width="80%" height={"40vh"} padding={2}>
          <img
            src="https://i.ytimg.com/vi/bweRG6WueuM/maxresdefault.jpg"
            alt="Brahmastra"
            width={"100%"}
            height={"100%"}
          />
        </Box>
        <Box padding={5} margin="auto">
          <Typography variant="h4" textAlign={"center"}>
            Latest Releases
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-around">
          {/* First Card */}
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="https://webneel.com/daily/sites/default/files/images/daily/08-2018/4-india-movie-poster-design-idea-bahubali.jpg"
              title="Bahubali"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bahubali
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Amarendra Baahubali, the heir apparent to the throne of Mahishmati, finds his life and relationships endangered as his adoptive brother Bhallaladeva conspires to claim the throne.
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} to={"/Userbooking"} size="small" variant="contained" color="primary">
                Book Movie
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="https://tse4.mm.bing.net/th?id=OIP.7xrs1Wu33mfNdZP2zP1UQAHaEK&pid=Api&P=0&h=220"
              title="Home"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Home
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Oliver Twist (Indrans) wants to be tech-savvy and become a better companion to his two sons, who spend more time on their phones than with their loved ones.
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} to={"/Userbooking"} size="small" variant="contained" color="primary">
                Book Movie
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 300 }}
              image="https://4.bp.blogspot.com/-OlqpQc6GAQE/UrLTu1fNtMI/AAAAAAAAKRE/IQhNv5m-fVM/s1600/1523308_638169002888773_1776440072_o.jpg"
              title="Drishyam"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bahubali
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A man goes to extreme lengths to save his family from punishment after the family commits an accidental crime.
              </Typography>
            </CardContent>
            <CardActions>
              <Button component={Link} to={"/Userbooking"} size="small" variant="contained" color="primary">
                Book Movie
              </Button>
            </CardActions>
          </Card>
        </Box>
        <Box display="flex" padding={5} margin="auto">
          <Button component={Link} to="/Usermovie" variant='outlined' color="primary" sx={{ margin: "auto" }}>
            View All Movies
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default Userhome;
