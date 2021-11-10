import styled from "styled-components";
import { router } from "../router";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  background-color: ${(props) => props.bgColor};
  transition-duration: 0.5s;
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
  const [bg, setBg] = useState();
  // const[fix, setfix] = useState();

  const handleScroll = () => {
    const sct = window.pageYOffset;
    // console.log(sct);

    if (sct >= 200) {
      setBg("rgba(0,0,0,0.7)");
      // setfix("fixed");
    } else {
      setBg("");
      // setfix("absolute");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <SHeader bgColor={bg}>
      {/* SHeader fixed={fix} 전달, position props에전달해주기 */}
      <Logo>
        <Link to={router.home}>PATI</Link>
      </Logo>

      <MenuWrap>
        <Menu>
          <Link to={router.home}>홈</Link>
        </Menu>
        <Menu>
          <Link to={router.search}>영화검색</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
