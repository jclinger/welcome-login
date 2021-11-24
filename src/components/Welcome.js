import * as React from 'react';
import Button from "@material-ui/core/Button";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

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

  const handleLogout = () => {
    window.location.assign('https://www.bluebeam.com/');
	};

  return (
    <Grid container spacing={1} aria-label="welcome page">
      <Grid item xs={12} key={1}>
        <ThemeProvider theme={lightTheme}>
          <Box
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              width: '95%',
              mx: '1%',
              my: '3%',
              bgcolor: 'background.default',
              display: 'grid',
              gridColumn: '1', gridRow: 'span 2'
            }}
          >
            <Item key={24} elevation={24}>
              <br/>
              {`Welcome!`}
              <br/>
              <br/>
              <br/>
              <Button
              variant="contained"
              color="primary"
              onClick={handleLogout}
              >
                Log Out
              </Button>
            </Item>
          </Box>
        </ThemeProvider>
      </Grid>
    </Grid>
  );
}

export default WelcomeScreen;