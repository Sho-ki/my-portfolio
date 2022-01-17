import Head from 'next/head';
import * as React from 'react';
import { createTheme, ThemeProvider, Box, Typography } from '@mui/material';
import { blueGrey } from '@mui/material/colors';

import Copyright from '../components/Copyright';
import Bar from '../components/Bar';
import Top from '../components/Top/Top';
import MyWork from '../components/MyWorks/MyWorks';
import MyArticles from '../components/MyArticles/MyArticles';
import AboutMe from '../components/AboutMe/AboutMe';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';

const breakpoints = createBreakpoints({});
const theme = createTheme({
  typography: {
    allVariants: {
      color: '#ededed',
    },
    h2: {
      fontSize: '2.5em',
      [breakpoints.up('sm')]: {
        fontSize: '3em',
      },
    },
    h5: {
      fontSize: '1.5em',
      margin: '0!important',
      [breakpoints.up('sm')]: {
        fontSize: '1.8em',
      },
    },
    h6: {
      fontSize: '1.2em',
      margin: '0!important',
      [breakpoints.up('sm')]: {
        fontSize: '1.4em',
        marginRight: ' 1em!important',
      },
    },
    fontFamily: ['Karla', 'sans-serif'].join(','),
  },

  palette: {
    primary: { main: blueGrey[900] },
    secondary: { main: '#149918' },
    cardColor: { main: blueGrey[800] },
    textColor: { main: '#ededed' },
    linkText: { main: '#0bb810' },
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '1rem',
          color: 'white',
          backgroundColor: blueGrey[900],
          border: 'white solid 2px',
        },
      },
    },
  },
});
const username = 'shoki';
const url = 'https://dev.to/api/articles?username=' + username;

export async function getServerSideProps() {
  const res = await fetch(url);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name='description' content='I am Shoki Ishii' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css'
          integrity='sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS'
          crossOrigin='anonymous'
        />
        <link
          rel='stylesheet'
          href='https://pro.fontawesome.com/releases/v5.10.0/css/all.css'
          integrity='sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p'
          crossOrigin='anonymous'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <Bar />

        <Top />

        <AboutMe />

        <MyWork />

        {props.data && <MyArticles articleSet={props.data} />}

        {/* Footer */}
        <Box sx={{ p: 6, bgcolor: 'primary.main' }} component='footer'>
          <Typography variant='h6' align='center' gutterBottom>
            Shoki Ishii
          </Typography>

          <Copyright />
        </Box>

        {/* End footer */}
      </ThemeProvider>
    </>
  );
}
