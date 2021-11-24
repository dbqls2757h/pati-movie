import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { mainColor, mainWeight, moSize } from "../../style/GlobalStyled";

const SMainBanner = styled.section`
  height: 80vh;
  background-size: cover;
  background-position: center;
  padding: 220px 80px;
  @media screen and (max-width: 500px) {
    padding: 220px 20px;
  }
`;

const Title = styled.h3`
  /* 가로값 max-width로 잡아주는게 좋음 */
  max-width: 550px;
  width: 100%;
  font-size: 80px;
  font-weight: ${mainWeight.TitleWeight};
  line-height: 1.2em;
  margin-bottom: 25px;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.7);
  @media screen and (max-width: 500px) {
    font-size: 45px;
    margin-bottom: 15px;
  }
`;

const Desc = styled.p`
  max-width: 600px;
  width: 100%;
  font-size: 20px;
  opacity: 0.9;
  line-height: 1.4em;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.9);
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

const MoreBanner = styled.section`
  /* height: 80vh; */
  height: ${(props) => props.height};
  background-color: #111;
  margin-top: 100px;
  padding-left: 80px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  transition: 0.3s;
`;

const ConWrap = styled.div`
  width: 30%;
`;

const MoreTitle = styled.div`
  font-size: 80px;
  font-weight: ${mainWeight.TitleWeight};
  line-height: 1.2em;
  margin: 50px 0 30px 0;
`;

const MoreDesc = styled.div`
  max-width: 600px;
  width: 100%;
  font-size: 20px;
  opacity: 0.9;
  line-height: 2em;
  text-shadow: 0 0 15px rgba(0, 0, 0, 0.9);
`;

const CoverBg = styled.div`
  width: 65%;
  background-size: cover;
  background-position: top;
`;

const CloseBtn = styled.div`
  padding: 50px;
  float: right;
  font-size: 30px;
  cursor: pointer;
`;

export const MainBanner = ({ now, num }) => {
  const [moreHeight, setMoreHeight] = useState(0);
  const [moreNum, setMoreNum] = useState(0);

  const onClickMore = () => {
    if (moreNum == 0) {
      setMoreHeight("80vh");
      window.scrollTo({
        top: 500,
        left: 0,
        behavior: "smooth",
      });
      setMoreNum(moreNum + 1);
    } else if (moreNum == 1) {
      setMoreHeight("0");
      setMoreNum(moreNum - 1);
    }
    // else {
    //   setMoreNum(moreNum === 0);
    // }
  };

  const onClickClose = () => {
    setMoreHeight("0");
    setMoreNum(moreNum - 1);
  };

  return (
    <>
      <SMainBanner
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${
            now[`${num}`].backdrop_path
          })`,
        }}
      >
        <Title>{now[`${num}`].title} </Title>
        <Desc>{now[`${num}`].overview.slice(0, 70) + "..."}</Desc>
        <Button onClick={onClickMore}>
          더보기 <span>+</span>
        </Button>
      </SMainBanner>

      <MoreBanner height={moreHeight}>
        <ConWrap>
          <MoreTitle>{now[`${num}`].title}</MoreTitle>
          <MoreDesc>{now[`${num}`].overview.slice(0, 250) + "..."}</MoreDesc>
        </ConWrap>
        <CoverBg
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${
              now[`${num}`].backdrop_path
            })`,
          }}
        >
          <CloseBtn onClick={onClickClose}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseBtn>
        </CoverBg>
      </MoreBanner>
    </>
  );
};
