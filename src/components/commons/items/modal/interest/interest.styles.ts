import styled from "@emotion/styled";
import { BiX } from "react-icons/bi";
interface InterestModalProps {
  selected: boolean;
}

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

export const Wrapper = styled.form`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 430px;
  min-width: 430px;
  background-color: #fff;
  padding: 60px 60px;
  border-radius: 6px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export const InterestText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  user-select: none;

  > span {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 18px;

    > p {
      color: #6658ca;
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

export const DivideLine = styled.div`
  width: 100%;
  border: 1px solid #e2e2e2;
  margin: 20px 0 40px;
`;

export const InterestWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const InterestBox = styled.div<InterestModalProps>`
  border: 1px solid #979797;
  border-radius: 30px;
  padding: 3px 18px;
  background-color: ${(props) => (props.selected ? "#6658ca" : "white")};
  color: ${(props) => (props.selected ? "#fff" : "#979797")};
  margin-right: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  :hover {
    color: #fff;
    background-color: #6658ca;
    border: 1px solid #6658ca;
  }
`;

export const InterestButton = styled.button<InterestModalProps>`
  height: 50px;
  font-size: 14px;
  background-color: #6658ca;
  color: white;
  line-height: 50px;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    color: white;
    background-color: #6740ca;
    border: 1px solid #6740ca;
  }
`;
