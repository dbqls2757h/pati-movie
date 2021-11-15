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
  // https://api.themoviedb.org/3/api_key/language/nowPlaying => 으로 불러옴
};

/* <form action="" method="GET" ></form>; */

//현재 상영영화, 개봉예정
