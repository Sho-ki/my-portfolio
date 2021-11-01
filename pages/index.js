import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Copyright from '../components/Copyright';
import Bar from '../components/Bar';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Top from '../components/Top/Top';
import MyWork from '../components/MyWorks/MyWorks';
import MyArticles from '../components/MyArticles/MyArticles';
import AboutMe from '../components/AboutMe/AboutMe';
import { blueGrey } from '@mui/material/colors';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import { bgcolor } from '@mui/system';

const theme = createTheme({
  typography: {
    allVariants: {
      color: '#ededed',
    },
    fontFamily: ['Montserrat', 'sans-serif'].join(','),
  },
  palette: {
    primary: { main: blueGrey[900] },
    secondary: { main: '#149918' },
    tertiary: { main: blueGrey[500] },
    cardColor: { main: blueGrey[800] },
    textColor: { main: '#ededed' },
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
        <meta name='description' content='Generated by create next app' />
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

        <MyArticles articleSet={props} />

        {/* Footer */}
        <Box sx={{ p: 6, bgcolor: 'primary.main' }} component='footer'>
          <Typography variant='h6' align='center' gutterBottom>
            Shoki Ishii
          </Typography>
          <Typography variant='subtitle1' align='center' component='p'>
            Something here to give the footer a purpose!
          </Typography>
          <Copyright />
        </Box>

        {/* End footer */}
      </ThemeProvider>
    </>
  );
}
