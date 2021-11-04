import { Typography } from '@mui/material';
import { Link } from '@mui/material';

function Copyright() {
  return (
    <Typography variant='body2' color='secondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        My Portfolio By Shoki Ishii
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default Copyright;
