


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
    color: '#E1DFDE',
    background: '#E1DFDE'
  },
});

export default function PlaceholderCard () {
  const classes = useStyles;
  
  return(
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <ContentLoader 
            height={160}
            width={400}
            speed={2}
            primaryColor="#f3f3f3"
            secondaryColor="#ecebeb"
          >
            <rect x="9" y="8" rx="0" ry="0" width="382" height="110" /> 
            <rect x="164" y="43" rx="0" ry="0" width="0" height="0" /> 
            <rect x="201" y="55" rx="0" ry="0" width="0" height="0" /> 
            <rect x="47" y="136" rx="0" ry="0" width="300" height="13" />
          </ContentLoader>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}