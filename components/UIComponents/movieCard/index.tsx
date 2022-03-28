import { Card, CardHeader, CardMedia, CardContent, Typography, CardActions, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Movie } from '@/types/api/movie'
import { FC } from 'react'

const MovieCard: FC<Movie> = ({ title, original_title, backdrop_path, overview, id }) => {
  return (
    <Card sx={{ maxWidth: 330 }}> 
      <CardHeader title={title} subheader={original_title} />
      <CardMedia
        component="img"
        height="194"
        image={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
        alt={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" noWrap={true}>{overview}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default MovieCard;