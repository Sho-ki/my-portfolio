import Box from '@mui/material/Box';
import { Container, Grid, Typography, Tooltip } from '@mui/material';

export function MyTimeLine({ handleChange }) {
  const SelfDev = {
    title: 'Self Development',
    description: '3/2020~, Start to Learn Coding',
  };
  const BsEdu = {
    title: 'B.A. in English Literature',
    description: '4/2016 ~ 3/2021, Doshisha University, Japan',
  };
  const BsCs = {
    title: 'B.S. in Computer Science',
    description: '5/2021 ~ Present, University of the People, USA (Part time student)',
  };
  const Gym = {
    title: 'Gym Founder',
    description: 'Start Up a Peronal Gym in Vietnam',
  };

  const VehoWorks = {
    title: 'Software Developer Intern',
    description: '7/2020 ~ 10/2021, Daise Veho Works, Vietnam',
  };

  const Teatis = {
    title: 'Software Developer',
    description: '12/2021 ~ Present, Teatis Inc., USA',
  };

  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        width: '100%',
        height: '20vh',
        marginTop: '-100px',
        paddingTop: '60px',
      }}
      id='about'
      display='table'
    >
      <Container maxWidth='lg'>
        <Grid
          alignItems='end'
          container
          spacing={3}
          onClick={(e) => {
            handleChange(e, 0);
          }}
          href='#about'
          display='flex'
        >
          <Grid item xs={4}></Grid>
          <Tooltip
            title={
              <>
                <h6 style={{ color: '#0288d1', fontWeight: 'bold' }}>{SelfDev.title}</h6>
                <span>{SelfDev.description}</span>
              </>
            }
            placement='bottom'
            style={{ cursor: 'pointer' }}
          >
            <Grid item xs={8}>
              {' '}
              <Typography textAlign='left'>{SelfDev.title}</Typography>
              <hr
                style={{
                  color: 'red',
                  backgroundColor: 'purple',
                  height: 4,
                  width: '100%',
                  marginLeft: 'inherit',
                  borderRadius: '10px',
                }}
              />
            </Grid>
          </Tooltip>
        </Grid>

        <Grid
          alignItems='end'
          container
          spacing={3}
          onClick={(e) => {
            handleChange(e, 1);
          }}
        >
          <Tooltip
            style={{ cursor: 'pointer' }}
            title={
              <>
                <h6 style={{ color: '#0288d1', fontWeight: 'bold' }}>{Gym.title}</h6>
                <span>{Gym.description}</span>
              </>
            }
            placement='bottom'
            href='#about'
          >
            <Grid item xs={3} md={3}>
              {' '}
              <Typography textAlign='left'>{Gym.title}</Typography>
              <hr
                style={{
                  color: 'red',
                  backgroundColor: 'orange',
                  height: 4,
                  width: '100%',
                  marginLeft: 'inherit',
                  borderRadius: '10px',
                }}
              />
            </Grid>
          </Tooltip>
          <Grid item xs={2} md={2}></Grid>

          <Tooltip
            style={{ cursor: 'pointer' }}
            title={
              <>
                <h6 style={{ color: '#0288d1', fontWeight: 'bold' }}>{VehoWorks.title}</h6>
                <span>{VehoWorks.description}</span>
              </>
            }
            placement='bottom'
          >
            <Grid item xs={4} md={4}>
              <Typography textAlign='left'>{VehoWorks.title}</Typography>
              <hr
                style={{
                  color: 'red',
                  backgroundColor: 'orange',
                  height: 4,
                  width: '100%',
                  marginLeft: 'inherit',
                  borderRadius: '10px',
                }}
              />
            </Grid>
          </Tooltip>

          <Tooltip
            style={{ cursor: 'pointer' }}
            title={
              <>
                <h6 style={{ color: '#0288d1', fontWeight: 'bold' }}>{Teatis.title}</h6>
                <span>{Teatis.description}</span>
              </>
            }
            placement='bottom'
          >
            <Grid item xs={3} md={3}>
              <Typography textAlign='left'>{Teatis.title}</Typography>
              <hr
                style={{
                  color: 'red',
                  backgroundColor: 'orange',
                  height: 4,
                  width: '100%',
                  marginLeft: 'inherit',
                  borderRadius: '10px',
                }}
              />
            </Grid>
          </Tooltip>
        </Grid>

        <Grid
          alignItems='end'
          container
          spacing={3}
          onClick={(e) => {
            handleChange(e, 2);
          }}
          href='#about'
        >
          <Tooltip
            style={{ cursor: 'pointer' }}
            title={
              <>
                <h6 style={{ color: '#0288d1', fontWeight: 'bold' }}>{BsEdu.title}</h6>
                <span>{BsEdu.description}</span>
              </>
            }
            placement='bottom'
          >
            <Grid item xs={7} md={7}>
              <Typography textAlign='left'>{BsEdu.title}</Typography>
              <hr
                style={{
                  color: 'red',
                  backgroundColor: '#0288d1',
                  height: 4,
                  width: '100%',
                  marginLeft: 'inherit',
                  borderRadius: '10px',
                }}
              />
            </Grid>
          </Tooltip>

          <Tooltip
            style={{ cursor: 'pointer' }}
            title={
              <>
                <h6 style={{ color: '#0288d1', fontWeight: 'bold' }}>{BsCs.title}</h6>
                <span>{BsCs.description}</span>
              </>
            }
            placement='bottom'
          >
            <Grid item xs={5} md={5}>
              <Typography textAlign='left'>{BsCs.title}</Typography>
              <hr
                style={{
                  color: 'red',
                  backgroundColor: '#0288d1',
                  height: 4,
                  width: '100%',
                  marginLeft: 'inherit',
                  borderRadius: '10px',
                }}
              />
            </Grid>
          </Tooltip>
        </Grid>

        <Grid container spacing={3}>
          <Grid container item xs={12}>
            {' '}
            <hr
              style={{
                color: 'red',
                backgroundColor: 'red',
                height: 4,
                width: '100%',
                marginLeft: 'inherit',
                borderRadius: '10px',
              }}
            />{' '}
            <Grid item xs={3}>
              <Typography textAlign='left'>2019</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography textAlign='left'>2020</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography textAlign='left'>2021</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography textAlign='left'>2022</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
