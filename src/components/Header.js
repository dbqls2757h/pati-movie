import styled from "styled-components";
import { router } from "../router";
import { Link } from "react-router-dom";

const SHeader = styled.header`
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h3`
  font-size: 25px;
  font-weight: 600;
  a {
    color: crimson;
  }
`;

const MenuWrap = styled.ul`
  display: flex;
`;

const Menu = styled.li`
  &:nth-child(1) {
    margin-right: 50px;
  }
  font-weight: 600;
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={router.home}>PATI</Link>
      </Logo>

      <MenuWrap>
        <Menu>
          <Link to="#">홈</Link>
        </Menu>
        <Menu>
          <Link to="#">영화검색</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
