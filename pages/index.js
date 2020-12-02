
import React from 'react';
import {Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px',
  },
  button: {
    marginTop: theme.spacing(3)
  },
  textField: {
    marginTop: theme.spacing(2)
  }
}));


export default function Home() {
  const classes = useStyles();

    const  handleRegister = () => {

        axios.post('http://localhost:3030/register', {
            name: name,
            email: email,
            phone : phone,
            password: password
        })
            .then(function (response) {
                alert('registered successfully')
            })
    };

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');


  const [password, setPassword] = React.useState('');

  return (
      <Container maxWidth="xs" className={classes.paper}>
        <Typography component="h1" variant="h5" align="center">
          {'Sign Up'}
        </Typography>
        <TextField
            autoFocus
            fullWidth
            label="Name"
            margin="normal"
            onChange={event => setName(event.target.value)}
            required
            // type={text}
            variant="outlined"
            value={name}
        />
        <TextField
            fullWidth
            label="Email"
            margin="normal"
            onChange={event => setEmail(event.target.value)}
            required
            // type={email}
            variant="outlined"
            value={email}
        />
        <TextField
            fullWidth
            label="Phone"
            margin="normal"
            onChange={event => setPhone(event.target.value)}
            required
            variant="outlined"
            value={phone}
        />

        <TextField
            fullWidth
            label="Password"
            margin="normal"
            name="password"
            onChange={event => setPassword(event.target.value)}
            required
            variant="outlined"
            value={password}
        />
        <Button
            className={classes.button}
            color="primary"
            onClick={handleRegister}
            variant="contained"
            type="submit"
            fullWidth
        >
          Register
        </Button>

      </Container>
  )
}
