import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 10px;
  max-width: 1200px;
  height: 150px;
  border: 1px solid gray;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  padding: 25px;
  margin-top: 60px;
`;

export const InWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LeftWrapper = styled.div`
  width: 100px;
  height: 100px;
  background-color: gray;
  border-radius: 50%;
  margin-right: 25px;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  > div {
    color: #000000;
    margin-right: 10px;
  }
  > div:nth-of-type(2) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: #a2a0eb;
    width: 92px;
    height: 25px;
    color: #fff;
  }
`;

export const MiddleWrapper = styled.div`
  margin-bottom: 10px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InterestBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #a2a0eb;
  color: #fff;
  width: 92px;
  height: 25px;
  margin-right: 10px;
`;

export const LastWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  > div {
    cursor: pointer;
  }
`;
