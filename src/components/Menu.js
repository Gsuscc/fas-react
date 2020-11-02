import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import RegistrationModal from './ui/RegistrationModal'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
  }

}));

const Menu = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [openRegistration, setOpenRegistration] = React.useState(false);

  const handleClickRegistrationOpen = () => {
    setOpenRegistration(true);
  };

  const handleRegistrationClose = () => {
    setOpenRegistration(false);
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
    <div className={classes.root}>
      <div>
          <RegistrationModal onClose={handleRegistrationClose} open={openRegistration} />
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
                    <MenuItem className={classes.menuitem} onClick={(event) => {
                        handleClose(event)
                        handleClickRegistrationOpen()
                    }}>Registration</MenuItem>
                    <MenuItem className={classes.menuitem} onClick={handleClose}>Login</MenuItem>
                    <MenuItem className={classes.menuitem} onClick={handleClose}>My flights</MenuItem>
                    <MenuItem className={classes.menuitem} onClick={handleClose}>My cities</MenuItem>
                    <MenuItem className={classes.menuitem} onClick={handleClose}>About</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}

export default Menu;