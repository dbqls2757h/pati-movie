import styled from "styled-components";
import { mainWeight } from "../../style/GlobalStyled";

const SMainBanner = styled.section`
  height: 80vh;
  background-size: cover;
  background-position: center;
  padding: 220px 80px;
`;

const Title = styled.h3`
  /* 가로값 max-width로 잡아주는게 좋음 */
  max-width: 550px;
  width: 100%;
  font-size: 70px;
  font-weight: ${mainWeight.TitleWeight};
  line-height: 1.2em;
  margin-bottom: 25px;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
`;

const Desc = styled.p`
  max-width: 600px;
  width: 100%;
  font-size: 18px;
  opacity: 0.7;
  line-height: 1.4em;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.9);
`;

export const MainBanner = ({ now, num }) => {
  return (
    <SMainBanner
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${
          now[`${num}`].backdrop_path
        })`,
      }}
    >
      <Title>{now[`${num}`].title} </Title>
      <Desc>{now[`${num}`].overview.slice(0, 70) + "..."}</Desc>
    </SMainBanner>
  );
};
