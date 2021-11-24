import { PageTitle } from "../PageTitle";
import { movieApi } from "../../api";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { PageNotFound } from "../PageNotFound";
// import { useLocatin } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Container } from "../Container";
import { Loader } from "../Loader";
import { mainColor, mainWeight, moSize } from "../../style/GlobalStyled";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    margin-top: 60px;
  }
`;

const Img = styled.div`
  width: 60%;
  height: 80vh;
  margin-right: 30px;
  background-size: cover;
  background-position: top;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 70vh;
    margin-bottom: 20px;
  }
`;

const ConWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  letter-spacing: 0;
  margin-left: 50px;
  @media screen and (max-width: 500px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: ${mainWeight.TitleWeight};
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    font-size: 34px;
  }
`;

const Sub = styled.li`
  margin-bottom: 10px;
  @media screen and (max-width: 500px) {
    font-size: ${moSize.descSize};
  }
`;

const Desc = styled.div`
  margin-top: 10px;
  opacity: 0.9;
  font-weight: 300;
  line-height: 22px;
  @media screen and (max-width: 500px) {
    font-size: ${moSize.descSize};
  }
`;

const Button = styled.button`
  all: unset;
  width: 160px;
  height: 40px;
  border: 1px solid #fff;
  margin-top: 30px;
  font-weight: ${mainWeight.TitleWeight};
  cursor: pointer;
  text-align: center;
  transition-duration: 0.3s;
  span {
    transition-duration: 0.2s;
  }
  &:hover {
    background-color: ${mainColor.fontColor};
    color: ${mainColor.bgColor};
    span {
      padding-left: 20px;
    }
  }
  @media screen and (max-width: 500px) {
    width: 140px;
    height: 40px;
  }
`;

const VideoWrap = styled.div`
  height: 100vh;
  padding: 60px 0;
`;

const Video = styled.iframe`
  width: 100%;
  height: 80vh;
`;

export const Detail = () => {
  const { id } = useParams();
  // console.log(id);

  const [movieData, setMovieData] = useState();
  const [videoData, setVideoData] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieDetail = async () => {
      try {
        // console.log(await movieApi.detail(19404));
        const { data } = await movieApi.detail(id);
        // console.log(data);
        setMovieData(data);

        // console.log(await movieApi.video(id));
        const {
          data: { results },
        } = await movieApi.video(id);
        // console.log(results[0].key);
        setVideoData(results[0]);

        setLoading(false);
      } catch (error) {
        // console.log(error);
        <PageNotFound />;
      }
    };
    movieDetail();
  }, [id]);
  // useEffect에서 바뀌는 값 []을 넣어주기 => 오류 사라지도록

  // console.log(movieData);
  // console.log(videoData);

  const onClickVideo = () => {
    const videoWrapTop = document.querySelector(".video_wrap").offsetTop;
    console.log(videoWrapTop);

    // window.scrollTo(0, 800);
    window.scrollTo({
      top: videoWrapTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {movieData && (
            <>
              <Container>
                <PageTitle title="영화리뷰" />
                <Wrap>
                  <Img
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/original${movieData.poster_path})`,
                    }}
                  ></Img>
                  <ConWrap>
                    <Title>{movieData.title}</Title>
                    <Sub>{movieData.release_date}</Sub>
                    <Sub>{movieData.runtime + "분"}</Sub>
                    <Sub>
                      {movieData.genres.map((genre) => genre.name + ",")}
                    </Sub>
                    <Desc>{movieData.overview}</Desc>
                    <Button onClick={onClickVideo}>
                      예고편 보기 <span>&rarr;</span>
                    </Button>
                  </ConWrap>
                </Wrap>
              </Container>
            </>
          )}

          {/* videoData 있으면? 뜨게 없으면: 없다고 표시 */}
          {videoData && (
            <Container>
              <VideoWrap className="video_wrap">
                <Video src={`https://www.youtube.com/embed/${videoData.key}`} />
              </VideoWrap>
            </Container>
          )}
        </div>
      )}

      {/* -movie detail design => 디자인 새로 해보기
        -이미지 ""값일 떄 없다고 표현? useImage? => no Iamge 넣어주기 
        setImage(이미지주소) */}

      {/* {errorPage ? <PageNotFound/> : <>안에넣기</>} */}
    </div>
  );
};
