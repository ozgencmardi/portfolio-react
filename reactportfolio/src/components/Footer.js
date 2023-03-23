import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Link,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    backgroundColor: '#222',
    color: '#fff',
    padding: theme.spacing(4, 0),
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(0, 2),
    },
  },
  pagesLinks: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(0, 2),
    },
  },
  copyright: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footerContainer}>
      <Typography variant="body2" className={classes.copyright}>
        Copyright &copy; {new Date().getFullYear()} M. Ozgenc Mardi. All rights reserved.
      </Typography>
    </div>
  );
}

export default Footer;
