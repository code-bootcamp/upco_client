import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 80px;
  height: 50px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border: 1px solid #e2e2e2;
  margin-bottom: 10px;
`;

export const RoomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;

  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 5px;
    font-size: 14px;
  }

  :hover {
    color: #6658ca;
  }
`;

export const divideLine = styled.div`
  border-bottom: 1px solid #e2e2e2;
`;
