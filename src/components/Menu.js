import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import RegistrationModal from './ui/RegistrationModal'
import LoginModal from './ui/LoginModal';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '0px 0px 0px 26px'
  },
  paper: {
    background: '#ffffffaa',
    borderRadius: '10px',
    boxShadow: '1px 1px 7px black'
  },
  button: {
    fontSize: '27px',
    color: '#abe390',
    fontFamily: 'pageTitle'
  },
  menuitem: {
    fontSize: '22px',
    color: 'black',
    fontFamily: 'pageTitle'
  },
  loggedIn: {
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      fontSize: '20px',
      color: '#cacfeb'
  }

}));

const Menu = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [openRegistration, setOpenRegistration] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(window.localStorage.getItem('fas-user') && window.localStorage.getItem('fas-token'));
  const [registrationDetails, setRegistrationDetails] = React.useState({
      message: null,
      username: null,
  });

  const handleClickRegistrationOpen = () => {
    setOpenRegistration(true);
  };

  const handleRegistrationClose = () => {
    setOpenRegistration(false);
  };


  const handleClickLoginOpen = () => {
    setOpenLogin(true);
  };

  const handleClickLogout = (event) =>  {
    setIsLoggedIn(false)
    window.localStorage.removeItem('fas-token')
    window.localStorage.removeItem('fas-user')
    handleClose(event)
  }

  const handleLoginClose = () => {
    setRegistrationDetails({
        message: null,
        username: null,
    });
    setOpenLogin(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
  <React.Fragment>
    {isLoggedIn && <div className={classes.loggedIn}>
                      <img className="user-icon-img" src="user-icon.png" alt="user-icon"></img>
                      {window.localStorage.getItem('fas-user')}
                        </div>
                        }
        <div className={classes.root}>
      <div>
        {openRegistration && <RegistrationModal 
            onClose={handleRegistrationClose} 
            open={openRegistration} 
            openLogin={handleClickLoginOpen}
            setDetails={setRegistrationDetails}/>}
        {openLogin && <LoginModal 
            onClose={handleLoginClose} 
            open={openLogin} 
            details={registrationDetails}
            onLogin={setIsLoggedIn} />}
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={classes.button}
        >
          Menu
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition placement="bottom-end" disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: 'center top' }}
            >
              <Paper className={classes.paper}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    {!isLoggedIn && <MenuItem className={classes.menuitem} onClick={(event) => {
                        handleClose(event)
                        handleClickRegistrationOpen()
                    }}>Registration</MenuItem>}

                    {!isLoggedIn && <MenuItem className={classes.menuitem} onClick={(event) => {
                        handleClose(event)
                        handleClickLoginOpen()
                    }}>Login</MenuItem>}

                    {isLoggedIn && <MenuItem className={classes.menuitem} onClick={handleClose}>My flights</MenuItem>}
                    {isLoggedIn && <MenuItem className={classes.menuitem} onClick={handleClose}>My cities</MenuItem>}
                    {isLoggedIn && <MenuItem className={classes.menuitem} onClick={handleClickLogout}>Logout</MenuItem>}
                    <MenuItem className={classes.menuitem} onClick={handleClose}>About</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
    </React.Fragment>

  );
}

export default Menu;