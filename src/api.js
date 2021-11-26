import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "aefbb555316db9bc7c281aac3b51a2bc",
    language: "ko-KR",
  },
});

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComing: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  topRate: () => api.get("movie/top_rated"),
  detail: (id) => api.get(`movie/${id}`),
  video: (movie_id) => api.get(`movie/${movie_id}/videos`),
  search: (term) =>
    api.get("search/movie", {
      params: {
        // query: term,
        // => uri주소로 전환
        query: encodeURIComponent(term),
      },
    }),

  // https://api.themoviedb.org/3/api_key/language/nowPlaying => 으로 불러옴
};

/* <form action="" method="GET" ></form>; */

//현재 상영영화, 개봉예정
