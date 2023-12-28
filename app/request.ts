const API_KEY = "97b535bfcaa26b1c649cd658d54fe001";

export const requests = {
  trendingUrl: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  netflixOriginalsUrl: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  topRatedUrl: `/discover/tv?api_key=${API_KEY}&language=en-us`,
  actionMoviesUrl: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
  comedyMoviesUrl: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
  mysteryMoviesUrl: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
  animationMoviesUrl: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
  documentMoviesUrl: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
};

export const getMovieUrlById = (id: string) => {
  return `/movie/${id}/videos?api_key=${API_KEY}`;
};
