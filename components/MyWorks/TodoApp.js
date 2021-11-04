import {
  Button,
  Card,
  CardActions,
  Grid,
  Typography,
  CardContent,
  CardMedia,
  Link,
} from '@mui/material';

import { SkillTag } from '../Tags/SkillTag';

export function TodoApp() {
  return (
    <>
      {' '}
      <Grid item xs={12} sm={6} md={5} display='flex'>
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
              Todo list app with a function of drag and drop with database
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
            <Link
              href='https://github.com/Sho-ki/todoapp-serverless'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button size='small' color='secondary'>
                Github
              </Button>
            </Link>

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
        <Typography gutterBottom variant='h5'>
          Purpose :
        </Typography>
        <Typography>
          To satisfy my curiosity about the database operation after a drag and
          drop, I created this todo-app. Besides, I wrote an article{' '}
          <Link
            color='secondary'
            href='https://dev.to/shoki/how-to-update-the-database-after-a-drag-and-drop-operation-27dc'
            target='_blank'
            rel='noopener noreferrer'
          >
            How to Update the Database After a Drag-and-Drop Operation
          </Link>
        </Typography>
        <Typography gutterBottom variant='h5' mt={1}>
          Features :
        </Typography>

        <div>
          <Typography mb='4px' variant='h6'>
            1. Drag & Drop with Database Operations
          </Typography>
          <Typography>
            After dragging and dropping, the updated order will be automatically
            saved in the database.
          </Typography>
        </div>
        <div>
          <Typography mb='4px' mt='10px' variant='h6'>
            2. Index Number Visualize Mode
          </Typography>
          <Typography>
            This mode helps others understand what is going on in the database
          </Typography>
        </div>
      </Grid>
    </>
  );
}
