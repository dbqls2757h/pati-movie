import styled, { keyframes } from "styled-components";

const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const loadingAni = keyframes`
100%{
    transform: rotate(360deg)
}
`;

const Loading = styled.div`
  width: 100px;
  height: 100px;
  border: 10px solid crimson;
  border-radius: 50%;
  border-color: crimson transparent transparent transparent;
  animation: ${loadingAni} 1s infinite;
`;

export const Loader = () => {
  return (
    <Wrap>
      <Loading></Loading>
    </Wrap>
  );
};
