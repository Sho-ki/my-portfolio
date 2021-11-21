import { Typography } from '@mui/material';

export function ArticleDescription({ about, background }) {
  return (
    <>
      <Typography color='white' variant='h6'>
        【About】
      </Typography>
      <Typography color='white'>{about}</Typography>
      <Typography color='white' variant='h6'>
        【Background】
      </Typography>
      <Typography color='white'>{background}</Typography>
    </>
  );
}
