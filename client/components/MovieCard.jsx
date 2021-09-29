import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="movie or show poster not available"
        height="140"
        image={props.poster}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.synopsis}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Available in: {Object.values(props.countrylist).join(", ")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
