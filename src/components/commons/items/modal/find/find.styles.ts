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

export const DivideLineBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 22px 0;

  > span {
    font-size: 8px;
    margin: 0 10px;
    color: #979797;
    white-space: nowrap;
  }
  > div {
    background-color: #e2e2e2;
    width: 100%;
    height: 1px;
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

export const FindBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
  user-select: none;

  > p {
    font-size: 12px;
    color: #979797;
    cursor: pointer;
    :hover {
      color: #000000;
    }
  }
`;

export const FindText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  user-select: none;

  > p {
    text-decoration: underline;
    font-size: 12px;
    color: #979797;
    cursor: pointer;
    :hover {
      color: #000000;
    }
  }
`;

export const IconBox = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > li {
    cursor: pointer;
  }

  > li:nth-of-type(2) {
    margin: 0px 15px;
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
