import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MyArticle } from './MyArticle';

function MyArticles({ articleSet }) {
  const reversedArr = [...articleSet].reverse();
  const articleDescriptionSet = [
    {
      about:
        'Researched how to use useContext in React, wrote the code with illustrations, and explained it.',
      background:
        'During development, I was wondering if passing the same value as props over and over again was the right way to do it. In my research, I found out that useContext can be used, so I looked up how to use it and shared it in this article.',
    },
    {
      about:
        'Researched and summarized what happens to the database behind the scenes when drag and drop is performed through the implementation of a to-do list.',
      background:
        'I was wondering what database manipulation was going on, after seeing a drag and drop without a save button. So, I researched what was going on and implemented the mechanism by myself.',
    },
    {
      about:
        'Complied a list of what to put on a portfolio site with reference to various resources such as radio and articles.',
      background:
        'I wanted to provide useful information that summarizes various resources for developers who are in a similar position to me.',
    },
    {
      about:
        'Explained what aliases are and how to set them up, along with how to use vim, and introduces some useful aliases.',
      background:
        'When I was looking for shortcuts to commands, I found a way to create aliases, so I summarized what I found to improve my own understanding of vim and aliases.',
    },
    {
      about: 'Explained what REST API is and what the best practices are for designing REST API.',
      background:
        'I wanted to gain knowledge on what makes a good UI/UX REST API design for developers and use it in team development.',
    },
    {
      about: 'Summarized what readable code is and what advantages it has.',
      background:
        'When I was having my code reviewed, I was advised that I am not good at naming useless code and variables. So I read a book and learned how to write readable code, which is especially important in team development for readability and maintainability.',
    },
    {
      about:
        'Solved the open-source-project of type-challenges myself and explained the type specification in TypeScript.',
      background:
        'When I was developing with typescript, I often encountered errors about the type specification. Then I was introduced to this open source, and I found mapped types, lookup types, etc. there. And for my own learning, I understood deeply and wrote an article about it.',
    },
  ];

  let settings = {
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
        breakpoint: 768,
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
        <Typography component='h1' variant='h2' textAlign='center'>
          My Articles
        </Typography>
        <Typography variant='h6' textAlign='center' gutterBottom>
          【Learn and Understand → Research more → Find similarities → Draw conclusions】
          <br /> These are my steps that I always have in my learning process.
        </Typography>

        <Slider {...settings} style={{ margin: '20px 20px 0 20px' }}>
          {reversedArr.map((article, i) => (
            <MyArticle
              article={article}
              key={article.id}
              num={i}
              articleDescription={articleDescriptionSet[i]}
            />
          ))}
        </Slider>
      </Container>
    </Box>
  );
}

export default MyArticles;
