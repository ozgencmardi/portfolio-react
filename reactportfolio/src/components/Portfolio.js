import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';
import project1Img from '../img/furniture-store.png';
import project2Img from '../img/travel-california.png';
import project3Img from '../img/css-snippet.png';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundColor: '#f7f7f7',
  },
  portfolioContainer: {
    padding: theme.spacing(8, 0),
    maxWidth: 1200,
    margin: '0 auto',
  },
  projectCard: {
    maxWidth: 350,
  },
  projectImage: {
    height: 250,
  },
}));

function Portfolio() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="portfolio">
    <div className={classes.portfolioContainer}>
      <Typography component="h3" variant="h3" align="center" gutterBottom>
        Portfolio
      </Typography>
      <Grid container spacing={4} justify="center">
        <Grid item xs={12} md={4}>
        <a href="https://ozgencmardi.github.io/furniture-store/" style={{ color: '#222', textDecoration: 'none' }} target="_blank">
          <Card className={classes.projectCard}>
            <CardActionArea>
              <CardMedia
                className={classes.projectImage}
                image={project1Img}
                title="Project 1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Furniture Store
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at blandit eros, nec lobortis augue. Sed ac ipsum vel felis ornare ullamcorper. Nam malesuada est eu tellus auctor lobortis.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </a>
        </Grid>
        <Grid item xs={12} md={4}>
        <a href="https://ozgencmardi.github.io/travel-california/" style={{ color: '#222', textDecoration: 'none' }} target="_blank">
          <Card className={classes.projectCard}>
            <CardActionArea>
              <CardMedia
                className={classes.projectImage}
                image={project2Img}
                title="Project 2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                Travel California
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at blandit eros, nec lobortis augue. Sed ac ipsum vel felis ornare ullamcorper. Nam malesuada est eu tellus auctor lobortis.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </a>
        </Grid>
        <Grid item xs={12} md={4}>
        <a href="https://ozgencmardi.github.io/css-snippet-cheatsheet/" style={{ color: '#222', textDecoration: 'none' }} target="_blank">
          <Card className={classes.projectCard}>
            <CardActionArea>
              <CardMedia
                className={classes.projectImage}
                image={project3Img}
                title="Project 3"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                CSS Snippet
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at blandit eros, nec lobortis augue. Sed ac ipsum vel felis ornare ullamcorper. Nam malesuada est eu tellus auctor lobortis.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          </a>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

export default Portfolio;
