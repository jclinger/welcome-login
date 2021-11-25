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
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';

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
            <Dialog
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
            </Dialog>
            <Dialog
              fullScreen={fullScreen}
              open={openDelete}
              onClose={() => handleClose(false)}
              aria-labelledby="responsive-dialog-title"
            >
              <DialogTitle id="responsive-dialog-title">
                {"Delete Account"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please confirm that you want to permanently delete your account.
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={() => handleClose(false)}>
                  Cancel
                </Button>
                <Button 
                  onClick={() => handleClose(false)} autoFocus
                  color="secondary"
                >
                  Delete
                </Button>
              </DialogActions>
            </Dialog>
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