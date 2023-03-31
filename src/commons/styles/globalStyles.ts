import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    list-style: none;
    font-family: "Regular";
  }

  @font-face {
    font-family: "Regular";
    src: url(/fonts/NotoSansKR-Regular.otf);
  }

  @font-face {
    font-family: "Bold";
    src: url(/fonts/NotoSansKR-Bold.otf);
  }

  @font-face {
    font-family: "Roboto";
    src: url(/fonts/Roboto-Regular.ttf);
  }

  @font-face {
    font-family: "MainTitle01";
    src: url(/fonts/Title_Bold.woff);
  }

  @font-face {
    font-family: "MainTitle02";
    src: url(/fonts/Batang_Bold.woff);
  }

  @font-face {
    font-family: "Jalnan";
    src: url(/fonts/JalnanOTF.otf);
  }

  @font-face {
    font-family: "Cafe24";
    src: url(/fonts/Cafe24SsurroundAir.ttf);
  }
`;
