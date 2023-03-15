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
`;
