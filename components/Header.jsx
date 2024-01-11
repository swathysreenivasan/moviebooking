import { AppBar, Box, Toolbar,TextField,Autocomplete,  Button } from '@mui/material'

import MovieIcon from "@mui/icons-material/Movie";

import { Link } from 'react-router-dom';
const  dummyarray=["bramastra","for ","uigggui"];


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
        <Button color="inherit">
          <Link to={"/movies"}>Movies</Link></Button>
          <Button color="inherit">
          <Link to={"/user"}>User</Link></Button>
          <Button color="inherit">
          <Link to={"/admin"}>Admin</Link></Button>
        
          </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header