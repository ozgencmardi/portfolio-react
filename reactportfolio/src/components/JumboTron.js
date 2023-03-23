import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  Button
} from '@material-ui/core';
import portfolioBanner from '../img/portfolio-banner1.jpg';

const useStyles = makeStyles((theme) => ({
  jumbotron: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${portfolioBanner})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    padding: theme.spacing(8, 0, 6),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(16, 0, 12),
    },
  },
  jumbotronText: {
    marginBottom: theme.spacing(4),
  },
  jumbotronButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    color: '#fff',
    padding: theme.spacing(2, 0, 4),
  },
  socialLink: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    '&:first-child': {
      marginLeft: 0,
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
}));

function Jumbotron() {
  const classes = useStyles();

  return (
    <div className={classes.jumbotron}>
      <Container maxWidth="sm">
        <Typography component="h2" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.jumbotronText} style={{ color: '#fff' }}>
          WEB DEVELOPER & DESIGNER
        </Typography>
        <Typography variant="h4" align="center" style={{ color: '#fff' }} paragraph>
          HTML5, CSS3, JavaScript
        </Typography>
        <div className={classes.socialLinks}>
          <a href="https://github.com/ozgencmardi" style={{ color: '#fff', textDecoration: 'none', marginRight: '10px' }}  target="_blank">
            <Typography variant="body2" align="center" className={classes.socialLink}>
              Github
            </Typography>
          </a>
          <a href="https://www.linkedin.com/in/ozgencmardi/" style={{ color: '#fff', textDecoration: 'none', marginLeft: '10px' }} target="_blank">
            <Typography variant="body2" align="center" className={classes.socialLink}>
              Linkedin
            </Typography>
          </a>
          </div>
        <div className={classes.jumbotronButton}>
          <Button variant="contained" color="primary" href="#contact" style={{ backgroundColor: '#fff', color: '#222' }}>
            Message Me
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Jumbotron;

