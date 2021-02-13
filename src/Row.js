import React,{useState,useEffect} from 'react'
import "./Row.css"
import axios from "./axios";
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl ,isLaregeRow},) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("")

useEffect(() =>{
    async function  fetchData(){
        const request = await axios.get(fetchUrl)
        // console.log(request)
        setMovies(request.data.results);
        // console.log(request.data.results)
        return request;
    }
    fetchData();
},[fetchUrl]);
  const opts = {
      height:"390",
      width: "100%",
      playerVars:{
          autoplay: 1,
      },
  };

// console.log(movies)
 const handleclick = (movie) =>{
     if (trailerUrl){
         setTrailerUrl("");
     }else{
         movieTrailer(movie?.title || movie?.name || movie.original_name)
         .then((url) =>{
             const urlParms = new URLSearchParams(new URL(url).search);
             setTrailerUrl(urlParms.get("v"));
             
         })
         .catch((error) =>console.log(error))
     }
 };
    return (
        <div className = "row">
            <h1>{title}</h1>
            <div className ="row_posters">
                {movies.map((movie) =>(
                <img onClick = {() => handleclick (movie)}
                className = {`row_poster ${isLaregeRow && "row_posterLarge"}`} 
                  src = {`${base_url}${ isLaregeRow ? movie.poster_path : movie.backdrop_path}`}
                    alt = {movie.name}/>
                ))}

            </div>
            <div style = {{ padding: "40px"}}>
                {trailerUrl && <Youtube videoId = {trailerUrl} opts ={opts}/>}
                {/* { //opts => options */} 
               
            </div>
            
        </div>
    )
}

export default Row;