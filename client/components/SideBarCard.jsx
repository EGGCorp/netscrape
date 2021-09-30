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

export default function BasicCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          IMDB Rating: {props.rating}
        </Typography>
        <Typography variant="body2">
          {props.synopsis}
        </Typography>
        <br></br>
        <Typography variant="body2" color="text.secondary">
          Available in: {Object.values(props.countrylist).join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
}
