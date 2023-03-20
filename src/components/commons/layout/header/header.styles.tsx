import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 81px;
  line-height: 81px;
  padding: 0 40px;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;

  > img {
    height: 30px;
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
