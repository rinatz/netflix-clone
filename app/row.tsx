import instance from "./axios";
import { useEffect, useState } from "react";
import styles from "./row.module.css";
import { getMovieUrlById } from "./request";
import YouTube from "react-youtube";
import Image from "next/image";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

type Movie = {
  id: string;
  name: string;
  title: string;
  original_name: string;
  poster_path: string;
  backdrop_path: string;
};

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>("");

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts: Options = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      let url = await instance.get(getMovieUrlById(movie.id));
      setTrailerUrl(url.data.results[0]?.key);
    }
  };

  return (
    <div className={styles.row}>
      <h2>{title}</h2>
      <div className={styles["row-posters"]}>
        {movies.map((movie, i) => {
          let className, size, path;

          if (isLargeRow) {
            className = `${styles["row-poster"]} ${styles["row-poster-large"]}`;
            size = 500;
            path = movie.poster_path;
          } else {
            className = styles["row-poster"];
            size = 300;
            path = movie.backdrop_path;
          }

          return (
            <Image
              key={movie.id}
              className={className}
              src={`http://image.tmdb.org/t/p/w${size}${path}`}
              width={size}
              height={size}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};
