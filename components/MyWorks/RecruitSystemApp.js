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

export function RecruiteSystemApp() {
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
          <CardMedia component='img' image='/testapp.svg' alt='random' />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant='h5' component='h2' color='black'>
              Recruit Exam App
            </Typography>
            <Typography color='black'>
              I expect this app being used to have candidates take a simple test
              during the hiring process, where they can create questions, take
              the test, and also view the results.
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
            <div
              style={{
                display: 'flex',
                flexFlow: 'column',
                marginRight: '2em',
              }}
            >
              <Link
                href='https://github.com/Sho-ki/recruit-system-frontend'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                <Button size='small' color='secondary'>
                  Github Frontend
                </Button>{' '}
              </Link>{' '}
              <Link
                href='https://github.com/Sho-ki/recruit-system-backend'
                target='_blank'
                rel='noopener noreferrer'
              >
                {' '}
                <Button size='small' color='secondary'>
                  Github Backend
                </Button>{' '}
              </Link>
            </div>
            <Link
              href='https://recruit-system-frontend.vercel.app/admin/home'
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
          To get a deeper understanding of tools such as React Hook Form, React
          Custom Hooks, React Context, etc., I researched how to use them and
          developed this app. I wrote this article{' '}
          <Link
            color='secondary'
            href='https://dev.to/shoki/using-react-context-to-prevent-prop-drilling-4acd'
            target='_blank'
            rel='noopener noreferrer'
          >
            Using React Context to Prevent Prop Drilling
          </Link>
          . And to actually learn database normalization, I learned through
          creating a more complex application.
        </Typography>
        <Typography gutterBottom variant='h5' mt={1}>
          Features :
        </Typography>

        <div>
          <Typography mb='4px' mt='10px' variant='h6'>
            Relational Database
          </Typography>
          <Typography>
            Created it with a focus on database operations. For example, when
            you create a question, you can put choices in it as much as you can.
            Also, you can also show which questions each candidate got wrong.
          </Typography>
        </div>
      </Grid>
    </>
  );
}
