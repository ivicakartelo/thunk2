import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ width: '100%' }} variant="outlined">
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Welcome to my new Playlist!
        </Typography>
        <Typography variant="h1" component="div" style={{ textAlign: 'center' }}>
          Teach{bull}How{bull}To{bull}Teach{bull} React
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Why? Here's why:
        </Typography>
        <Typography variant="body2" style={{backgroundColor: '#2B3132', color: '#fff'}}>
        <h3>Businesses are like a river of employees, only if employees teach each other. If not, the river stops and becomes a swamp, and the business fails. That's why the most sought-after people are not those who learn all their lives, but those who teach all their lives. After all, learning has no other purpose than to pass on what we've learned to our colleagues.</h3>
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}