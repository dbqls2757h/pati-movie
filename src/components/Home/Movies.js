import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { mainWeight, moSize } from "../../style/GlobalStyled";
import "../../style/swiper.css";
import { router } from "../../router";

const Title = styled.h3`
  font-weight: ${mainWeight.TitleWeight};
  font-size: 35px;
  margin: 80px 0 30px 0;
  @media screen and (max-width: 500px) {
    font-size: 25px;
    margin: 50px 0 20px 0;
  }
`;

const CoverImg = styled.div`
  height: 180px;
  background-size: cover;
  background-position: center;
`;

const MovieTitle = styled.h4`
  font-size: 18px;
  margin-top: 15px;
  @media screen and (max-width: 500px) {
    font-size: ${moSize.movieTitle};
  }
`;

SwiperCore.use([Navigation]);

export const Movies = ({ movieData, title }) => {
  const params = {
    breakpoints: {
      // 노트북이상
      1024: {
        slidesPerView: 5.2,
        spaceBetween: 20,
      },

      // 아이폰 제일 작은 사이즈
      320: {
        slidesPerView: 2.1,
        spaceBetween: 10,
      },
    },
  };

  return (
    <div>
      <Title>{title}</Title>
      <Swiper
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={20}
        {...params}
        navigation
      >
        {movieData.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={`/detail/${play.id}`}>
              {/* <Link to={router.detail /`${play.id}`}> */}
              <CoverImg
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${play.backdrop_path})`,
                }}
              />
              <MovieTitle>{play.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
