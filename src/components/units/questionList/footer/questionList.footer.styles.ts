import styled from "@emotion/styled";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  > button {
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  > span {
    margin-bottom: 2px;
    color: #979797;
    cursor: pointer;
    user-select: none;

    :hover {
      color: #191919;
    }
  }
`;

export const ArrowLeft = styled(IoIosArrowBack)`
  font-size: 20px;
  color: #979797;
  cursor: pointer;

  :hover {
    color: #191919;
  }
`;

export const ArrowRight = styled(IoIosArrowForward)`
  font-size: 20px;
  color: #979797;
  cursor: pointer;

  :hover {
    color: #191919;
  }
`;
