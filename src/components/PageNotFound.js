import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { router } from "../router";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ConWrap = styled.div`
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const EmogiAni = keyframes`
    0%{transform: rotateZ(0)}
    20%{transform: rotateZ(-20deg)}
    24%{transform: rotateZ(10deg)}
    28%{transform: rotateZ(-10deg)}
    36%{transform: rotateZ(0)}
`;

const Emogi = styled.h1`
  position: relative;
  left: 15px;
  font-size: 150px;
  animation: ${EmogiAni} 2.5s infinite linear;
`;

const Title = styled.h2`
  margin: 50px 0 20px 0;
  font-size: 50px;
  opacity: 0.9;
`;

const SubTitle = styled.h3`
  font-size: 30px;
  opacity: 0.9;
`;

const Desc = styled.p`
  margin: 25px 0 40px 0;
  font-size: 20px;
  font-weight: 300;
  line-height: 24px;
  opacity: 0.7;
  text-align: center;
  letter-spacing: 0.5px;
`;

const GoHome = styled.button`
  all: unset;
  width: 200px;
  height: 40px;
  background-color: rgba(225, 225, 225, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 300;
  border-radius: 10px;
`;

export const PageNotFound = () => {
  return (
    <div>
      <Wrap>
        <ConWrap>
          <Emogi>✋</Emogi>
          <Title>404</Title>
          <SubTitle>Page not found</SubTitle>
          <Desc>
            The Page you are looking for doesn't exist or an other error
            occurred. Go back, or head over to Main to choose a new direction.
          </Desc>
          <GoHome>
            <Link to={router.home}>Go to Main</Link>
          </GoHome>
        </ConWrap>
      </Wrap>
    </div>
  );
};
