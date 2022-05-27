import axios from "axios";
import Hero from "../components/Hero";
import PopularMovie from "../components/PopularMovie";
import { server } from "../config";


export default function Home({movies}) {
  // console.log(movies)


  try {
    return (
      <div className="bg-gray-700">
        <Hero/>
        <PopularMovie movies={movies.results}/>
      </div>
    )
  } catch (error) {
    return <ErrorHandler error={error} />
  }

}


function ErrorHandler({error}) {
  return (
    <div role="alert">
      <p>An error occurred:</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export async function getStaticProps(){
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movies = res.data;
  // const movies = [{name:'hello'}]
  return {  
    props:{movies}
  }
}

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
