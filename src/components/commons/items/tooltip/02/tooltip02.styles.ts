import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 30px;
  right: 10px;
  background-color: #fff;
  z-index: 1;

  > li {
    border: 1px solid #e2e2e2;
    padding: 2px 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    :hover {
      background-color: #6658ca;
      border: 1px solid #6658ca;

      button {
        color: #fff;
      }
    }

    :last-of-type {
      width: 100%;
      border-top: none;
    }
    > button {
      background-color: transparent;
      font-size: 14px;
      color: #979797;
      cursor: pointer;
    }
  }
`;
