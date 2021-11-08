import Image from 'next/image';
import { Grid, Typography } from '@mui/material';

export function Introduction() {
  return (
    <>
      <Grid container spacing={1} alignItems='center' marginX='1em'>
        <Grid item xs={12} sm={4} md={4}>
          <div>
            <Image src={'/mypic.jpg'} width='300' height='200' />
          </div>
        </Grid>
        <Grid item xs={12} sm={7} md={7} textAlign='left'>
          <Typography lineHeight='2em'>
            I grew up in Japan and graduated from Doshisha University with a major in English Education. After
            that, I started going to University of the People with a major in CS. <br />
            <br />I started my career in sales, but became interested in technology and began studying
            computer science. Combined with my communication and problem-solving skills, I believe I am an
            excellent Web Developer.
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}
