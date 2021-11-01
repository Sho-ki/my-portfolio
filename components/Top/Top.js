import { Box } from '@mui/system';
import { Container, Grid } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from '../../styles/Home.module.css';
import { SkillTag } from '../Tags/SkillTag';

function Top() {
  return (
    <Box
      sx={{
        pt: 15,
        pb: 6,
        bgcolor: 'primary.main',
      }}
    >
      <Container maxWidth='sm'>
        <Typography component='h1' variant='h2' align='center' gutterBottom>
          Shoki Ishii
        </Typography>
        <div className={styles.snsIcons}>
          <LinkedInIcon sx={{ fontSize: 40 }} color='info' />
          <GitHubIcon sx={{ fontSize: 40 }} color='tertiary' />
        </div>
        <Typography variant='h5' align='center' paragraph>
          Software developer with 1+ year of experience. Using React, Next.js,
          and Node.js daily.
        </Typography>
        <Stack
          sx={{ pt: 4 }}
          direction='row'
          spacing={2}
          justifyContent='center'
        >
          <Button variant='contained' sx={{ bgcolor: 'secondary.main' }}>
            Download resume
          </Button>
          <Button
            variant='outlined'
            color='textColor'
            style={{ border: '#149918 1px solid' }}
          >
            Contact me
          </Button>
        </Stack>
        <div
          style={{
            display: 'flex',
            margin: '1em',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <SkillTag name={'Node.js'} />
          <SkillTag name={'React'} />
          <SkillTag name={'Next.js'} />
          <SkillTag name={'TypeScipt'} />
          <SkillTag name={'HTML/CSS'} />
          <SkillTag name={'SQL'} />
        </div>
      </Container>
    </Box>
  );
}

export default Top;
