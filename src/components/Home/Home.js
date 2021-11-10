import { useEffect } from "react";
import styled from "styled-components";
import { movieApi } from "../../api";

// console.log(movieApi.nowPlaying());

const Wrap = styled.div`
  height: 400vh;
`;

export const Home = () => {
  //Usestate를 이용하여 results 저장하고, useEffect 밖으로 변수 호출할 수 있도록 만들기
  //   nowPlaying, upcomming까지

  useEffect(() => {
    const movieData = async () => {
      //   console.log(await movieApi.nowPlaying());
      const {
        data: { results },
      } = await movieApi.nowPlaying();
      //   console.log(results);
    };
    movieData();
  }, []);

  return <Wrap>home</Wrap>;
};
