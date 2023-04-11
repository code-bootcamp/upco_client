import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background-color: transparent;
  height: 68px;

  a {
    margin: 0;
    padding: 0;
    border: 0;
    height: 24px;
  }

  img {
    height: 24px;
  }

  > button {
    background-color: #6658ca;
    color: #fff;
    padding: 10px 20px;
    border-radius: 30px;
    cursor: pointer;
  }
`;
