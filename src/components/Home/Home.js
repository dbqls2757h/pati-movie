import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { movieApi } from "../../api";
import { mainWeight } from "../../style/GlobalStyled";
import { Loader } from "../Loader";
import { MainBanner } from "./MainBanner";

// console.log(movieApi.nowPlaying());

const Wrap = styled.div``;

export const Home = () => {
  //Usestate를 이용하여 results 저장하고, useEffect 밖으로 변수 호출할 수 있도록 만들기
  //   nowPlaying, upcomming까지

  const [nowPlay, setNowPlay] = useState();
  const [upComing, setUpComing] = useState();
  const [loading, setLoading] = useState(true);
  const movieNum = 0;

  useEffect(() => {
    const movieData = async () => {
      try {
        //   console.log(await movieApi.nowPlaying());
        const {
          data: { results: nowPlaying },
        } = await movieApi.nowPlaying();
        setNowPlay(nowPlaying);

        const {
          data: { results: upComing },
        } = await movieApi.upComing();
        setUpComing(upComing);

        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    movieData();
  }, []);

  console.log("현재 상영 영화", nowPlay);
  // console.log("개봉 예정 영화", upComing);

  console.log(nowPlay && nowPlay[0]);
  // => 처음엔 필수로 &&(있다면) 넣어달라고 적기 아니면 오류뜸

  return (
    <>
      {/* => nowPlay로 묶어서 코드 줄여줌 */}
      {/* nowPlay[0] 를 movieNum으로 변수처리 */}
      {loading ? (
        <Loader />
      ) : (
        <Wrap>{nowPlay && <MainBanner now={nowPlay} num={movieNum} />}</Wrap>
      )}

      {/* <Wrap>
        <MainBanner
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${
              nowPlay && nowPlay[0].backdrop_path
            })`,
          }}
        >
          <Title>{nowPlay && nowPlay[0].title} </Title>
          <Desc>{nowPlay && nowPlay[0].overview.slice(0, 70) + "..."}</Desc>
        </MainBanner>
      </Wrap> */}
    </>
  );
};
