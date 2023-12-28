"use client";

import { Banner } from "./banner";
import { Nav } from "./nav";
import { requests } from "./request";
import { Row } from "./row";

export default function Home() {
  return (
    <main className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.netflixOriginalsUrl}
        isLargeRow
      />
      <Row title="Top Rated" fetchUrl={requests.topRatedUrl} />
      <Row title="Action Movies" fetchUrl={requests.actionMoviesUrl} />
      <Row title="Comedy Movies" fetchUrl={requests.comedyMoviesUrl} />
      <Row title="Mystery Movies" fetchUrl={requests.mysteryMoviesUrl} />
      <Row title="Animation Movies" fetchUrl={requests.animationMoviesUrl} />
      <Row title="Documentaries" fetchUrl={requests.documentMoviesUrl} />
    </main>
  );
}
