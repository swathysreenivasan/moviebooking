import { AppBar, Box, Toolbar,TextField,Autocomplete,  Button } from '@mui/material'

import MovieIcon from "@mui/icons-material/Movie";

import { Link } from 'react-router-dom';
const  dummyarray=["bramastra","Drisyam ","Bahubali"];


const Header = () => {
  return (
  
 
    <AppBar position='sticky' sx={{ bgcolor: "#2b2d42" }}>
        <Toolbar>
            <Box width={"20%"} >
                <MovieIcon/>

            </Box>
            <Box width={"30%"} margin="auto">
          <Autocomplete
            //onChange={handleChange}
            freeSolo
            options={dummyarray.map((option) => option)}
            renderInput={(params) => (
              <TextField
                sx={{ input: { color: "white" } }}
                variant="standard"
                {...params}
                placeholder="Search Acroos Multiple Movies"
              />
            )}
          />
        </Box>
        <Box display={"flex"}>
            <Button variant="contained" color="primary" sx={{ marginRight: 1, "& a": { textDecoration: "none", color: "white" } }}>
              <Link to="/movies">Movies</Link>
            </Button>
            
            <Button variant="contained" color="primary" sx={{ marginRight: 1, "& a": { textDecoration: "none", color: "white" } }}>
              <Link to="/login">A</Link>
            </Button>
            
            <Button variant="contained" color="primary" sx={{ "& a": { textDecoration: "none", color: "white" } }}>
              <Link to="/Adminlogin">Admin</Link>
            </Button>
          </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header