import * as React from 'react';
import Button from "@material-ui/core/Button";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import { staticImage } from "../../images/index";
import "./Welcome.css"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .DialogTitle-root': {
    justifyContent: "right !important",
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ 
      m: 0, 
      p: 2, 
      justifyItems: "right" 
      }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            left: "calc((100%) - 20px)",
            bottom: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 480,
  width: 640,
  lineHeight: '60px',
  fontSize: '20px'
}));

const WelcomeScreen = () => {
  const lightTheme = createTheme({ palette: { mode: 'light' } });
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleLogout = () => {
    window.location.assign('https://www.bluebeam.com/');
	};

  // TODO move dialog to its own component for reusability 
  // TODO don't hard code button content, pass in data for it

  const handleOpen = (editButton) => {
    if(editButton) {
      setOpenEdit(true);
    } else {
      setOpenDelete(true);
    }
  };

  const handleClose = (editButton) => {
    if(editButton) {
      setOpenEdit(false);
    } else {
      setOpenDelete(false);
    }
  };
  const handleDelete = () => {
      setOpenDelete(false);
      window.location.reload(true);
  };

  return (
    <Grid container spacing={3} aria-label="welcome page">
      <Grid item xs={12} key={1}>
        <ThemeProvider theme={lightTheme}>
          <Box
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '99%',
              mx: '1%',
              my: '3%',
              bgcolor: 'background.default',
              display: 'grid',
              gridColumn: '1', gridRow: 'span 2'
            }}
          >

            {/* <Dialog
              fullScreen={fullScreen}
              open={openEdit}
              onClose={() => handleClose(true)}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                {"Account Edited"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Your account settings have been saved.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => handleClose(true)} autoFocus>
                  Okay
                </Button>
              </DialogActions>
            </Dialog> */}

            <BootstrapDialog
              onClose={() => handleClose(true)}
              aria-labelledby="customized-dialog-title"
              open={openEdit}
            >
              <BootstrapDialogTitle id="customized-dialog-title" onClose={() => handleClose(true)} />
              <DialogContent>
                <DialogContentText>
                  Your account has been edited.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={() => handleClose(true)} autoFocus>
                  Okay
                </Button>
              </DialogActions>
            </BootstrapDialog>

            <BootstrapDialog
              onClose={() => handleClose(false)}
              aria-labelledby="customized-dialog-title"
              open={openDelete}
            >
              <BootstrapDialogTitle id="customized-dialog-title" onClose={() => handleClose(false)} />
                <img src={staticImage} />
              <DialogContent>
                <DialogContentText>
                  Are you sure you want to delete your account?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={() => handleClose(false)}>
                  Cancel
                </Button>
                <Button 
                  onClick={handleDelete}
                  color="secondary"
                >
                  Delete
                </Button>
              </DialogActions>
            </BootstrapDialog>


            <Item key={24} elevation={24}>
              <br/>
              {`Welcome!`}
              <br/>
              <br/>
              <br/>
              <Grid container spacing={3} sx={{ justifyContent: 'center' }}>
                <Grid key={1} item>
                  <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleOpen(true)}
                  >
                    Edit Account
                  </Button>
                </Grid>
                <Grid key={2} item>
                  <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => handleOpen(false)}
                  >
                    Delete Account
                  </Button>
                </Grid>
                <Grid key={3} item>
                  <Button
                  variant="outlined"
                  onClick={handleLogout}
                  >
                    Log Out
                  </Button>
                </Grid>
              </Grid>
            </Item>
          </Box>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
}

export default WelcomeScreen;