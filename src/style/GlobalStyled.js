import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

const mainColor = {
  fontColor: "#fff",
  bgColor: "#1d1d1d",
};

export const mainWeight = {
  TitleWeight: 600,
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing:border-box;
    }

    a{
        color: #fff;
        text-decoration: none;
    }

    body{
        font-family:  'Noto Sans KR', sans-serif;
        background-color: ${mainColor.bgColor};
        color: ${mainColor.fontColor};
        letter-spacing: -1px;
    }
`;
