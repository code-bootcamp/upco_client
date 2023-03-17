import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 54px;
  line-height: 54px;
  padding: 0 40px;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > img {
    cursor: pointer;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    background-color: #ebebeb;
    border-radius: 15px;
    cursor: pointer;
  }
`;

export const DvideLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #d2d2d2;
`;
