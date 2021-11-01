import {
  Button,
  Card,
  CardActions,
  Container,
  Grid,
  Typography,
  CardContent,
} from '@mui/material';
import { RecruiteSystemApp } from './RecruitSystemApp';
import { TodoApp } from './TodoApp';
import styles from '../../styles/Home.module.css';
import { Box } from '@mui/system';

const cards = [1, 2, 3];

function MyWork() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        width: '100%',
      }}
    >
      <Container sx={{ py: 10 }} maxWidth='md'>
        <Typography component='h1' variant='h2' align='center' gutterBottom>
          My Works
        </Typography>
        <Grid container spacing={6}>
          <TodoApp />

          <RecruiteSystemApp />
        </Grid>
      </Container>
    </Box>
  );
}

export default MyWork;
