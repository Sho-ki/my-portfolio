import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export function MyArticle({ article }) {
  return (
    <div>
      <Card
        sx={{
          m: '0 1em',
          paddingBottom: '10px',
          border: '1px solid #ededed',
          bgcolor: 'cardColor.main',
          borderRadius: 2,
        }}
      >
        <Link href={article.url}>
          <CardMedia
            component='img'
            image={article.cover_image}
            alt='random'
            height='180'
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant='h5' component='h2' color='white'>
              {article.title}
            </Typography>
            <Typography color='white'>{article.description}</Typography>
          </CardContent>
          <div
            style={{
              justifyContent: 'end',
              display: 'flex',
              marginRight: '1em',
            }}
          >
            <FavoriteIcon sx={{ color: '#ef5350', margin: '0 3px' }} />
            <Typography color='white'>
              {article.public_reactions_count}
            </Typography>
          </div>
        </Link>
      </Card>
    </div>
  );
}
