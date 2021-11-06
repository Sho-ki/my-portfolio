import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MyArticle } from './MyArticle';

function MyArticles({ articleSet }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        width: '100%',
      }}
      id='myArticles'
    >
      <Container sx={{ paddingTop: 8 }} maxWidth='lg'>
        <Typography component='h1' variant='h2' gutterBottom textAlign='center'>
          My Articles
        </Typography>

        <Slider {...settings} style={{ margin: '0 20px' }}>
          {articleSet.data.map((article, i) => (
            <MyArticle article={article} key={article.id} num={i} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
}

export default MyArticles;
