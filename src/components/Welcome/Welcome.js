import * as React from 'react';
import Button from "@material-ui/core/Button";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import ConfirmationDialog from "../Dialog/ConfirmationDialog"
import "./Welcome.css"

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

  const handleLogout = () => {
    window.location.assign('https://www.bluebeam.com/');
	};

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

  const parentProps = {
    handleClose,
    handleDelete,
    openEdit,
    openDelete
  }

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
            <ConfirmationDialog
              dialogType={"edit"}
              parentProps={parentProps}
            />
            <ConfirmationDialog
              dialogType={"delete"}
              parentProps={parentProps}
            />
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