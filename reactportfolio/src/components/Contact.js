import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  TextField,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    padding: theme.spacing(8, 0),
    maxWidth: 1200,
    margin: '0 auto',
  },
  contactDetailsCard: {
    maxWidth: 350,
    margin: 'auto',
  },
  contactFormCard: {
    maxWidth: 600,
    margin: 'auto',
  },
  contactDetails: {
    marginBottom: theme.spacing(2),
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  formField: {
    margin: theme.spacing(2, 0),
  },
  submitButton: {
    margin: theme.spacing(3, 0),
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.contactContainer} id="contact">
      <Typography component="h3" variant="h3" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card className={classes.contactDetailsCard}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" align="center">
                Contact Details
              </Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Phone: 123-456-7890" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Address: London - United Kingdom" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Email: ozgencmardi@gmail.com" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.contactFormCard}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" align="center">
                Contact Form
              </Typography>
              <form className={classes.contactForm}>
                <TextField
                  label="Name"
                  variant="outlined"
                  className={classes.formField}
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  className={classes.formField}
                />
                <TextField
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  className={classes.formField}
                />
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.submitButton}
                >
                  Send
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
