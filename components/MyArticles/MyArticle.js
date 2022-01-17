import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ArticleDescription } from './ArticleDescription';

export function MyArticle({ article, num, articleDescription }) {
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
          <CardMedia component='img' image={article.cover_image} alt='random' height='180' />
          <Typography position=' absolute' fontSize='5rem' top='7rem' color='#e74343' marginLeft='3px'>
            {num + 1}
          </Typography>
          <CardContent sx={{ flexGrow: 1 }}>
            <div
              style={{
                justifyContent: 'flex-end',
                display: 'flex',
              }}
            >
              <FavoriteIcon sx={{ color: '#e74343', margin: '0 3px' }} />
              <Typography color='white'>{article.public_reactions_count}</Typography>
            </div>
            <Typography gutterBottom variant='h5' component='h2' color='white'>
              {article.title}
            </Typography>

            {articleDescription && (
              <ArticleDescription about={articleDescription.about} background={articleDescription.background} />
            )}
          </CardContent>
        </Link>
      </Card>
    </div>
  );
}
