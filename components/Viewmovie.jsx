import { Button, CardMedia, CardContent, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';

const Viewmovie = () => {
  // Initialize data as an array
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
    <div style={{ margin: '4%' }}>
      <Grid container spacing={2}>
        {data.map((val, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card sx={{ minWidth: 275 }}>
              {/* Use CardMedia to display the image */}
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
                <Button
                  onClick={() => deleteValue(val._id)}
                  size="small" variant='contained' color="secondary">Book Movie
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Viewmovie;
