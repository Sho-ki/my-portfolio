import {
  Button,
  Card,
  CardActions,
  Container,
  Grid,
  Typography,
  CardContent,
  CardMedia,
  Link,
} from '@mui/material';
import ReactShowMoreText from 'react-show-more-text';
import styles from '../../styles/Home.module.css';
import { SkillTag } from '../Tags/SkillTag';

export function TodoApp() {
  return (
    <>
      {' '}
      <Grid item xs={12} sm={6} md={5}>
        <Card
          md={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <CardMedia component='img' image='/todoapp.svg' alt='random' />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant='h5' component='h2' color='black'>
              Todo App
            </Typography>
            <Typography color='black'>
              This is a media card. You can use this section to describe the
              content.
            </Typography>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
              }}
            >
              <SkillTag name={'Node.js'} color={'black'} size={'0.8em'} />
              <SkillTag name={'React'} color={'black'} size={'0.8em'} />
              <SkillTag name={'Next.js'} color={'black'} size={'0.8em'} />
              <SkillTag name={'SQL'} color={'black'} size={'0.8em'} />
            </div>
          </CardContent>
          <CardActions>
            <Button size='small' color='secondary'>
              Github
            </Button>

            <Link
              href='https://serverless-todo-app-nine.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              <Button size='small' color='secondary'>
                Demo
              </Button>{' '}
            </Link>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={7}>
        <Typography gutterBottom variant='h5' component='h2'>
          Tools :
        </Typography>
        <Typography>
          Frontend : React (Next.js) <br />
          Backend : Node.js <br />
          Database : Supabase
        </Typography>{' '}
        <Typography gutterBottom variant='h5' component='h2' mt={1}>
          Features :
        </Typography>
        <ReactShowMoreText
          lines={13}
          more='Show more'
          less='Show less'
          truncatedEndingComponent={'... '}
          className={styles.showMoreText}
        >
          <Typography>
            1. Drag & Drop with Database Operations
            <br />
            The database is also designed to be manipulated during drag-and-drop
            operations, so the order can be preserved even after reloading.The
            database is also designed to be manipulated during drag-and-drop
            operations, so the order can be preserved even after reloading.The
            database is also designed to be manipulated during drag-and-drop
            operations, so the order can be preserved even after reloading.The
            database is also designed to be manipulated during drag-and-drop
            operations, so the order can be preserved even after reloading.The
            database is also designed to be manipulated during drag-and-drop
            operations, so the order can be preserved even after reloading.The
            database is also designed to be manipulated during drag-and-drop
            operations, so the order can be preserved even after reloading.The
            database is also designed to be manipulated during drag-and-drop
            operations, so the order can be preserved even after reloading.The
            database is also designed to be manipulated during drag-and-drop
            operations, so the order can be preserved even after reloading.The
            database is also designed to be manipulated during drag-and-drop
            operations, so the order can be preserved even after reloading.The
            database is also designed to be manipulated during drag-and-drop
            operations, so the order can be preserved even after reloading.
          </Typography>
        </ReactShowMoreText>
      </Grid>
    </>
  );
}
