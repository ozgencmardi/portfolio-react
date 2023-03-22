import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ozgencMardi from '../img/ozgenc-mardi.jpg';
import {
  Container,
  Grid,
  Typography,
  Avatar,
  Divider
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    backgroundColor: '#f7f7f7',
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

function About() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="about">
      <Container maxWidth="md">
        <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={4}>
          <Avatar className={classes.avatar} src={ozgencMardi} alt="M. Ozgenc Mardi" />
        </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h3" gutterBottom>
              About
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris accumsan elit quis risus cursus rutrum. Nam tincidunt orci id odio rhoncus aliquam. Nulla facilisi. Phasellus accumsan, massa id finibus pharetra, odio est maximus nulla, id bibendum augue quam in tellus.
            </Typography>
            <Divider style={{ margin: '16px 0' }} />
            <Typography variant="h5" gutterBottom>
              Skills
            </Typography>
            <Typography variant="body1" gutterBottom>
              - HTML5/CSS3/Bootstrap<br />
              - JavaScript<br />
              - JQUERY<br />
              - React<br />
              - Node.js
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default About;
