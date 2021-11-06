import { Container, Grid, Typography } from '@mui/material';
import { RecruiteSystemApp } from './RecruitSystemApp';
import { TodoApp } from './TodoApp';
import { Box } from '@mui/system';

function MyWork() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        width: '100%',
      }}
      id='myWorks'
    >
      <Container sx={{ paddingTop: 8 }} maxWidth='md'>
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
