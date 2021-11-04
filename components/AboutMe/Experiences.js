import { Typography } from '@mui/material';
import { Box } from '@mui/system';

export function Experiences() {
  return (
    <>
      <Box lineHeight='2em' textAlign='left' marginLeft='3em'>
        <Typography>
          Several of my achievements I have done included :  
        </Typography>{' '}
        <br />
        <Typography>
          【 Articles 】 - Always write articles and summarize new ideas and new
          techniques I found{' '}
        </Typography>
        <br />
        <Typography>
          【 Development 】 - Collaborate on projects with UI/UX designer, and
          other developers besides self-development
        </Typography>
        <br />
        <Typography>
          {' '}
          もう一つか二つくらい何かを書く(OSS, Testing, Architecture )
        </Typography>
      </Box>
    </>
  );
}
