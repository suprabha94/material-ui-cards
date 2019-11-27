
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';

import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function PlaceholderCard () {
  const classes = useStyles;
  
  return(
    <Card>
      <CardActionArea>
        <RectShape color='blue' style={{width: 30, height: 80}}/>
        <CardContent>
          <TextBlock rows={3} color='yellow'/>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}