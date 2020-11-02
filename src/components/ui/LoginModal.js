import React ,{useEffect, useState}from 'react';
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
    },
    errorMessage: {
        textAlign: 'center',
        fontSize: '12px',
        color: 'red',
        fontWeight: 'bold'
    },
    message: {
      textAlign: 'center',
      fontSize: '12px',
      color: 'green',
      fontWeight: 'bold'
    }
  }));


export default function LoginModal(props) {
  const classes = useStyles();
  const { onClose, open, details } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("")

  const handleClick =()=> {
      axios.post('http://localhost:8080/auth/login',{
        username: username,
        password: password
      }).then((response)=>{
        window.localStorage.setItem("fas-token", response.data.token)
        window.localStorage.setItem("fas-user", response.data.username)
        onClose()
      }).catch((err) => {
        setErrorMessage(err.response.data)
      })
  }
  useEffect(() => {
    setErrorMessage("")
  },[username, password])

  return (
    <div>
      <Dialog PaperProps={{className: classes.paper}} open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle className={classes.title} id="form-dialog-title" disableTypography>Login</DialogTitle>
        {details.message && <div className={classes.message}>{details.message}</div>}
        {errorMessage && <div className={classes.errorMessage}>{errorMessage}</div>}
        <DialogContent>
          <div className={classes.fields}>
            <TextField
                margin="dense"
                id="name"
                label="Username"
                type="username"
                onChange={(event) => setUsername(event.target.value)}
                value={details.username}
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
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}