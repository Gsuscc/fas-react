import React ,{useContext, useState}from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => (
  {
    paper: {
      padding: '20px',
    },
    fields: {
      display: 'flex',
      flexDirection: 'column'
    },
    title: {
        fontSize: '27px',
        color: 'grey',
        fontFamily: 'pageTitle !important'
    }
  }));


export default function RegistrationModal(props) {
  const classes = useStyles();
  const { onClose, open } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");


  const handleClick =()=> {
      axios.post('http://localhost:8080/auth/register',{
        username: username,
        email: email,
        password: password
      }).then((response)=>{
        console.log(response)
      })
  }

  return (
    <div>
      <Dialog PaperProps={{className: classes.paper}} open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.title} id="form-dialog-title" disableTypography>Registration</DialogTitle>
        <DialogContent>
          <div className={classes.fields}>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
            />
            <TextField
                margin="dense"
                id="name"
                label="Username"
                type="username"
                onChange={(event) => setUsername(event.target.value)}
                value={username}
            />
            <TextField
                margin="dense"
                id="name"
                label="Password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
            />  
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClick} color="primary">
            Register
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}