import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-top: 50px;
`;

export const Title = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 15px;
  border-bottom: 2px solid #191919;
  margin-bottom: 30px;

  > li {
    > h4 {
      font-size: 18px;
    }

    > p {
      margin-top: 5px;
      color: #979797;
      font-size: 14px;
    }

    > button {
      background-color: #fff;
      color: #979797;
      text-decoration: underline;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      :hover {
        color: #191919;
      }
    }
  }
`;

export const ContentsWrapper = styled.div`
  padding: 8px;

  > p {
    color: #191919;
  }
`;
