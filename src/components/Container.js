import styled from "styled-components";

const SContainer = styled.section`
  padding: 0 80px;
  height: 100%;
`;

export const Container = ({ children }) => {
  return <SContainer>{children}</SContainer>;
};
