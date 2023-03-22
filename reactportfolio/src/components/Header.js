import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#222' }}>
        <Toolbar>
        <Typography variant="h6" href="#home" className={classes.title}>
          <a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>M. Ozgenc Mardi</a>
        </Typography>
          <Button color="inherit" href="#home">Home</Button>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#services">Services</Button>
          <Button color="inherit" href="#portfolio">Portfolio</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;

