import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from "react-router-dom";
import { mainWeight } from "../../style/GlobalStyled";
import "../../style/swiper.css";

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

export const Movies = ({ movieData, title }) => {
  return (
    <div>
      <Title>{title}</Title>
      <Swiper
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={20}
        navigation
      >
        {movieData.map((play) => (
          <SwiperSlide>
            <Link to="#">
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
