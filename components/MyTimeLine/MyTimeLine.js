import Box from '@mui/material/Box';
import {
  Button,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
} from '@mui/material';
import { Tooltip } from '@mui/material';

export function MyTimeLine({ handleChange }) {
  const SelfDev = {
    title: 'Self Development',
    description: '3/2020~, Start to Learn Coding',
  };
  const BsEdu = {
    title: 'B.S. in Education',
    description: '4/2016 ~ 3/2021, Doshisha University, Japan',
  };
  const BsCs = {
    title: 'B.S. in Computer Science',
    description:
      '5/2021 ~ Present, University of the People, USA (Part time student)',
  };
  const Gym = {
    title: 'Gym Trainer & Manager',
    description: 'Start Up a Peronal Gym in Vietnam',
  };

  const SdIntern = {
    title: 'Software Developer Intern',
    description: '7/2020 ~ 10/2021, Daise Veho Works, Vietnam',
  };

  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        width: '100%',
        height: '30vh',
      }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          spacing={3}
          onClick={(e) => {
            handleChange(e, 0);
          }}
        >
          <Grid item xs={5}></Grid>
          <Tooltip
            style={{ cursor: 'pointer' }}
            title={
              <>
                <h6 style={{ color: '#0288d1', fontWeight: 'bold' }}>
                  {SelfDev.title}
                </h6>
                <span>{SelfDev.description}</span>
              </>
            }
            placement='right'
            style={{ cursor: 'pointer' }}
          >
            <Grid item xs={7}>
              {' '}
              <Typography textAlign='left'>{SelfDev.title}</Typography>
              <hr
                style={{
                  color: 'red',
                  backgroundColor: 'purple',
                  height: 4,
                  width: '100%',
                  marginLeft: 'inherit',
                }}
              />
            </Grid>
          </Tooltip>
        </Grid>

        <Grid
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
                <h6 style={{ color: '#0288d1', fontWeight: 'bold' }}>
                  {Gym.title}
                </h6>
                <span>{Gym.description}</span>
              </>
            }
            placement='right'
          >
            <Grid item xs={3}>
              {' '}
              <Typography textAlign='left'>{Gym.title}</Typography>
              <hr
                style={{
                  color: 'red',
                  backgroundColor: 'orange',
                  height: 4,
                  width: '100%',
                  marginLeft: 'inherit',
                }}
              />
            </Grid>
          </Tooltip>
          <Grid item xs={3}></Grid>

          <Tooltip
            style={{ cursor: 'pointer' }}
            title={
              <>
                <h6 style={{ color: '#0288d1', fontWeight: 'bold' }}>
                  {SdIntern.title}
                </h6>
                <span>{SdIntern.description}</span>
              </>
            }
            placement='right'
          >
            <Grid item xs={5}>
              <Typography textAlign='left'>{SdIntern.title}</Typography>
              <hr
                style={{
                  color: 'red',
                  backgroundColor: 'orange',
                  height: 4,
                  width: '100%',
                  marginLeft: 'inherit',
                }}
              />
            </Grid>
          </Tooltip>
        </Grid>
        <Grid
          container
          spacing={3}
          onClick={(e) => {
            handleChange(e, 2);
          }}
        >
          <Tooltip
            style={{ cursor: 'pointer' }}
            title={
              <>
                <h6 style={{ color: '#0288d1', fontWeight: 'bold' }}>
                  {BsEdu.title}
                </h6>
                <span>{BsEdu.description}</span>
              </>
            }
            placement='bottom-start'
          >
            <Grid item xs={8}>
              <Typography textAlign='left'>{BsEdu.title}</Typography>
              <hr
                style={{
                  color: 'red',
                  backgroundColor: '#0288d1',
                  height: 4,
                  width: '100%',
                  marginLeft: 'inherit',
                }}
              />
            </Grid>
          </Tooltip>

          <Tooltip
            style={{ cursor: 'pointer' }}
            title={
              <>
                <h6 style={{ color: '#0288d1', fontWeight: 'bold' }}>
                  {BsCs.title}
                </h6>
                <span>{BsCs.description}</span>
              </>
            }
            placement='right'
          >
            <Grid item xs={4}>
              <Typography textAlign='left'>{BsCs.title}</Typography>
              <hr
                style={{
                  color: 'red',
                  backgroundColor: '#0288d1',
                  height: 4,
                  width: '100%',
                  marginLeft: 'inherit',
                }}
              />
            </Grid>
          </Tooltip>
        </Grid>
        <hr
          style={{
            color: 'red',
            backgroundColor: 'red',
            height: 1,
            width: '100%',
          }}
        />
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <Typography textAlign='left'>2018</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography textAlign='left'>2020</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography textAlign='left'>2021</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
