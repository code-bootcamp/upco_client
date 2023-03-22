import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 106px;
  height: 106px;
  top: 30px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-radius: 20px;
  border: 3px solid #e2e2e2;
`;

export const WrapperPoint = styled.div`
  width: 0;
  height: 0;
  background-color: white;
  border-bottom: 30px solid black;
  border-top: 20px solid transparent;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
`;

export const RoomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 33%;

  div {
    margin-left: 5px;
  }

  :hover {
    color: #6658ca;
  }
`;

export const divideLine = styled.div`
  border-bottom: 1px solid #e2e2e2;
`;
