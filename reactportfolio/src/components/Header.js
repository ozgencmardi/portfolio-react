import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem
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
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

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
          <div className="mobile-menu">
            <Button
              aria-controls="mobile-menu"
              aria-haspopup="true"
              onClick={handleMenuOpen}
              style={{ color: '#fff' }}
            >
              Menu
            </Button>
            <Menu
              id="mobile-menu"
              anchorEl={menuAnchorEl}
              keepMounted
              open={Boolean(menuAnchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <Button color="inherit" href="#home">Home</Button>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button color="inherit" href="#about">About</Button>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button color="inherit" href="#services">Services</Button>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button color="inherit" href="#portfolio">Portfolio</Button>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button color="inherit" href="#contact">Contact</Button>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
