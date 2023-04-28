import React  from "react";
import { movies } from "../data";

function Movies() {
  const oneMovie = movies.map((movie,index)=> {
    return <div key={index}>
      <h3>Name:{movie.title}</h3>
      <p>Time:{movie.time}</p>
      <p>Genres:</p>
      <ul>
      {movie.genres.map((genre,index)=>{
        return <li key={index}>{genre}</li>
      })}
      </ul>
     
      <ul></ul>
    </div>
  })
  return (
    <div>
      <h1>Movies Page</h1>
      {oneMovie}
    </div>
  )
}

export default Movies;
