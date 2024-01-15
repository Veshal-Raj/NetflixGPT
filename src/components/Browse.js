import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTvTopRated from '../hooks/useTvTopRated'
import useOnTheAir from '../hooks/useOnTheAir'


const Browse = () => {

  useNowPlayingMovies()
  usePopularMovies()
  useTopRatedMovies()
  useUpcomingMovies()
  useTvTopRated()
  useOnTheAir()
  return (
    <div className=''>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse