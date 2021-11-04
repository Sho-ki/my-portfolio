import { AppBar, Typography, Toolbar, Button } from '@mui/material';

function Bar() {
  return (
    <AppBar
      position='fixed'
      style={{
        backgroundColor: '#131A1D ',
        borderBottom: `1px solid white}`,
      }}
    >
      <Toolbar>
        <Button href='#top'>
          <Typography mr={4} variant='h5' noWrap>
            Top
          </Typography>{' '}
        </Button>
        <Button href='#about'>
          <Typography mr={4} variant='h6' noWrap>
            About
          </Typography>{' '}
        </Button>
        <Button href='#myWorks'>
          <Typography mr={4} variant='h6' noWrap>
            Works
          </Typography>{' '}
        </Button>
        <Button href='#myArticles'>
          <Typography mr={4} variant='h6' noWrap>
            Articles
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Bar;
