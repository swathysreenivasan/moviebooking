import React from 'react';
import { Box, Typography, CardMedia, Card, CardContent, Button, CardActions } from '@mui/material';

const Homepage = () => {
  return (
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
            <Button size="small">Book Movie</Button>
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
            <Button size="small">Book Movie</Button>
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
            <Button size="small">Book Movie</Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}

export default Homepage;
