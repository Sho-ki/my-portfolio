import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

export function Experiences() {
  return (
    <>
      <Box lineHeight='2em' textAlign='left' marginX='2em'>
        <Typography marginBottom='0.2em'>Several of my works I have done included :  </Typography>
        <Typography marginBottom='0.4em'>
          【 Articles 】<br /> - Always write articles and summarize new ideas and new techniques I found.{' '}
          <span style={{ color: '#0bb810' }}>
            <a href='https://dev.to/shoki'>HERE</a>
          </span>{' '}
          is the acount my articles are on
        </Typography>

        <Typography marginBottom='0.4em'>
          【 Development 】 <br />- Collaborate on projects with UI/UX designer, and a senior developer. And have
          improved my code as well as system design and architecture
        </Typography>

        <Typography marginBottom='0.4em'>
          【 Code Review 】<br /> - Review code with other developers and did some pair programming. During review, have
          gained better understanding of the code base and learn from others
        </Typography>
      </Box>
    </>
  );
}
