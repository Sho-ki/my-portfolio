import { Box } from '@mui/system';
import { Container, IconButton } from '@mui/material';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';
import { Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styles from '../../styles/Home.module.css';
import { SkillTag } from '../Tags/SkillTag';

function Top() {
  const onDownload = () => {
    const link = document.createElement('a');
    link.download = `/resume.pdf`;
    link.href = '/resume.pdf';
    link.click();
  };

  return (
    <Box
      sx={{
        pt: 15,
        pb: 6,
        bgcolor: 'primary.main',
      }}
      id='top'
    >
      <Container maxWidth='sm'>
        <Typography component='h1' variant='h2' align='center' gutterBottom>
          Shoki Ishii
        </Typography>
        <div className={styles.snsIcons}>
          <IconButton
            aria-label='linkedin.com/in/shoki-ishii/'
            onClick={() => window.open('https://www.linkedin.com/in/shoki-ishii/')}
          >
            <LinkedInIcon sx={{ fontSize: 40 }} color='info' />
          </IconButton>
          <IconButton aria-label='github.com/Sho-ki' onClick={() => window.open('https://github.com/Sho-ki')}>
            <GitHubIcon sx={{ fontSize: 40 }} color='tertiary' />
          </IconButton>
        </div>
        <Typography variant='h5' align='center' paragraph>
          Software developer with 1+ year of experience. Always have a purpose and passion
        </Typography>
        <Stack sx={{ pt: 4 }} direction='row' spacing={2} justifyContent='center'>
          <Button
            variant='contained'
            sx={{ bgcolor: 'secondary.main', fontSize: 'smaller' }}
            onClick={onDownload}
          >
            Download resume
          </Button>
          <Button
            variant='outlined'
            color='textColor'
            style={{ border: '#149918 1px solid' }}
            href='mailto:shoki0116.highjump@gmail.com'
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
