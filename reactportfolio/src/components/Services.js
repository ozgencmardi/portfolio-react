import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from '@material-ui/core';
import webDesignImg from '../img/web-design.jpg';
import graphicDesignImg from '../img/ecommerce.jpg';
import mobileAppImg from '../img/seo.jpg';

const useStyles = makeStyles((theme) => ({
  servicesContainer: {
    padding: theme.spacing(8, 0),
    maxWidth: 1200,
    margin: '0 auto',
  },
  serviceCard: {
    maxWidth: 350,
  },
  serviceImage: {
    height: 150,
  },
}));

function Services() {
  const classes = useStyles();

  return (
    <div className={classes.servicesContainer} id="services">
      <Typography component="h3" variant="h3" align="center" gutterBottom>
        Services
      </Typography>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12} md={4}>
          <Card className={classes.serviceCard}>
            <CardActionArea>
              <CardMedia
                className={classes.serviceImage}
                image={webDesignImg}
                title="Web Design"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Web Design
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae rerum eligendi enim dolores nisi sint!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.serviceCard}>
            <CardActionArea>
              <CardMedia
                className={classes.serviceImage}
                image={graphicDesignImg}
                title="Graphic Design"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Ecommerce
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae rerum eligendi enim dolores nisi sint!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.serviceCard}>
            <CardActionArea>
              <CardMedia
                className={classes.serviceImage}
                image={mobileAppImg}
                title="Mobile App Development"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  SEO
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae rerum eligendi enim dolores nisi sint!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Services;
