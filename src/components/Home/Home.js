import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

import { movieApi } from "../../api";
import { Loader } from "../Loader";
import { MainBanner } from "./MainBanner";
import { Container } from "../Container";
import { mainWeight } from "../../style/GlobalStyled";
import "../../style/swiper.css";
import { Movies } from "./Movies";

// console.log(movieApi.nowPlaying());

const Wrap = styled.div``;

const Section = styled.section``;

const Title = styled.h3`
  font-weight: ${mainWeight.TitleWeight};
  font-size: 35px;
  margin: 80px 0 30px 0;
`;

const CoverImg = styled.div`
  height: 180px;
  background-size: cover;
  background-position: center;
`;

const MovieTitle = styled.h4`
  font-size: 18px;
  margin-top: 15px;
`;

export const Home = () => {
  //Usestate를 이용하여 results 저장하고, useEffect 밖으로 변수 호출할 수 있도록 만들기
  //   nowPlaying, upcomming까지

  const [nowPlay, setNowPlay] = useState();
  const [upComing, setUpComing] = useState();
  const [popular, setPopular] = useState();
  const [topRate, setTopRate] = useState();
  const [loading, setLoading] = useState(true);
  const movieNum = 2;

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

        const {
          data: { results: popular },
        } = await movieApi.popular();
        setPopular(popular);

        const {
          data: { results: topRate },
        } = await movieApi.topRate();
        setTopRate(topRate);

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
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {nowPlay && (
            <Wrap>
              <MainBanner now={nowPlay} num={movieNum} />

              <Section>
                <Container>
                  <Movies movieData={nowPlay} title="현재 상영 영화" />
                  <Movies movieData={upComing} title="개봉 예정 영화" />
                  <Movies movieData={popular} title="인기 영화" />
                  <Movies movieData={topRate} title="상영 순위" />
                </Container>
              </Section>
            </Wrap>
          )}
        </>
      )}
    </div>
  );
};
