import styled from "@emotion/styled";
import { BiX } from "react-icons/bi";

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Wrapper = styled.form`
  position: fixed;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  min-width: 400px;
  background-color: #fff;
  padding: 60px 60px;
  border-radius: 6px;
  top: 50%;
  left: 50%;
  margin-top: -278.5px;
  margin-left: -200px;
  z-index: 999;

  > img {
    height: 24px;
    margin-bottom: 40px;
  }

  > button {
    font-size: 14px;
    background-color: #6658ca;
    color: #fff;
    height: 50px;
    line-height: 50px;
    border-radius: 50px;
    cursor: pointer;
    margin-bottom: 20px;
    :hover {
      background-color: #5346ad;
    }
    :active {
      background-color: #5346ad;
    }
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    margin-bottom: 7px;
    margin-left: 20px;
    height: 15px;

    > p {
      font-size: 8px;
      color: #de6449;
    }
  }
`;

export const Close = styled(BiX)`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 24px;
  color: #979797;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    color: #000;
  }
`;
