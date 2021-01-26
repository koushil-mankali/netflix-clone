const APIKEY = "cccc5e4f92739a118d566bbccbfc39ff";

let requests = {
  trendingTMBD: `/trending/all/week?api_key=${APIKEY}&language=en-US`,
  noriginalsTMBD: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
  topratedTMBD: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
  actionmoviesTMBD: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  comedymoviesTMBD: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  horrormoviesTMBD: `/discover/movie?api_key=${APIKEY}&with_genres=27`,
  romanceTMBD: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  documentariesTMBD: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
