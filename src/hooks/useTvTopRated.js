import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { addTvTopRated } from "../utils/movieSlice"
import { useEffect } from "react"


const useTvTopRated = () => {
    const dispatch = useDispatch()
    const getTvTopRated = async () => {
      const data  = await fetch('https://api.themoviedb.org/3/tv/top_rated?page=1', API_OPTIONS)
  
      const json = await data.json()
      
      dispatch(addTvTopRated(json.results))
  
    }
  
    useEffect(() => {
      getTvTopRated()
    },[])
}

export default useTvTopRated;