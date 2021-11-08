import { Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

export function Experiences() {
  return (
    <>
      <Box lineHeight='2em' textAlign='left' marginX='2em'>
        <Typography>Several of my works I have done included :  </Typography> <br />
        <Typography>
          【 Articles 】 - Always write articles and summarize new ideas and new techniques I found{' '}
        </Typography>
        <br />
        <Typography>
          【 Development 】 - Collaborate on projects with UI/UX designer, and other developers besides
          self-development
        </Typography>
        <br />
        <Typography>
          【 Code Review 】 - Reviewed each others code with other developers and did some pair programming.
          And from design to development, I practiced using github in a way that was close to the actual
          practice with them. This is what I am currently working on: &emsp;
          <Link href='https://github.com/Sho-ki/fitness-beef' color='linkText.main'>
            Workout App(Frontend)
          </Link>
          &nbsp;&&nbsp;
          <Link href='https://github.com/Sho-ki/api.fitness-chicken' color='linkText.main'>
            Workout App(Backend)
          </Link>
        </Typography>
      </Box>
    </>
  );
}
