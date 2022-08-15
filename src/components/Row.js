import { useState, useEffect } from "react";
import axios from "../resources/axios";
import "./Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

let Row = ({ title, fetchURL, bigRow }) => {
  let imgurl = "https://image.tmdb.org/t/p/original/";
  let [movies, setMovies] = useState([]);
  let [trailerUrl, setTrailerUrl] = useState();

  useEffect(() => {
    async function getData() {
      let request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    getData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || movie?.original_title || movie?.title || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      <div className="row">
        <div className="ttl">{title}</div>
        <div className="posters">
          {movies.map((data) => (
            <img
              className={`poster ${bigRow && "bigImg"}`}
              key={data.id}
              onClick={() => handleClick(data)}
              src={`${imgurl}${bigRow ? data.poster_path : data.backdrop_path}`}
              alt={data.name}
            />
          ))}
        </div>
        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}></Youtube>}
      </div>
    </>
  );
};

export default Row;
