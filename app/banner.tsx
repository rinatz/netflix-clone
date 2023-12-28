import { useEffect, useState } from "react";
import instance from "./axios";
import { requests } from "./request";
import styles from "./banner.module.css";

type MovieProps = {
  title?: string;
  name?: string;
  original_name?: string;
  backdrop_path?: string;
  overview?: string;
};

export const Banner = () => {
  const [movie, setMovie] = useState<MovieProps>({});

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(requests.netflixOriginalsUrl);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );

      return request;
    }
    fetchData();
  }, []);

  // 長いdescriptionを切り捨てる
  function truncate(str: any, n: number) {
    if (str !== undefined) {
      return str.length > n ? str.substr(0, n - 1) + "..." : str;
    }
  }

  return (
    <header
      className={styles.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={styles["banner-contents"]}>
        <h1 className={styles["banner-title"]}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={styles["banner-buttons"]}>
          <button className={styles["banner-button"]}>Play</button>
          <button className={styles["banner-button"]}>My List</button>
        </div>

        <h1 className={styles["banner-description"]}>
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className={styles["banner-fade-bottom"]} />
    </header>
  );
};
