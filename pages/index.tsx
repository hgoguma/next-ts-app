import { useCallback, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Movie } from '@/types/api/movie'
import { Container, Grid } from '@mui/material';
import MovieCard from '@/components/UIComponents/movieCard'

const fetchMovieList = async () => {
  const apiKey = `a057695fbd8c572ea242410ec4f2a78f`
  const lang = `ko-KR`
  const pageNum = 1
  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=${lang}&page=${pageNum}`
  const { data } = await axios.get(url)
  return data.results || []
}

const getMovieList = () => {
  return useQuery('movie', async () => {
    const data: Movie[] = await fetchMovieList();
    console.log(data)
    return data
  })
}

const Home = () => {
  const { status, data, error, isFetching } = getMovieList()
  
  return (
    <Container maxWidth="1720">
      <Grid container>
        {status === 'success' && data?.map(item => {
          return (
            <MovieCard key={item.id}
              title={item.title}
              original_title={item.original_title}
              backdrop_path={item.backdrop_path}
              overview={item.overview}
              id={item.id}
            />
          )
        })
        }
      </Grid>
    </Container>
  )
}

export default Home
