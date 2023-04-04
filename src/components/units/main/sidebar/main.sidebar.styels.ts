import styled from "@emotion/styled";
import { FiX } from "react-icons/fi";

export const Wrapper = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 50%;
    height: 100%;
    background-color: white;
    border-left: 1px solid #e2e2e2e2;
    z-index: 1000;
    padding: 0 10px;
  }
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 55px;

  padding: 10px;
`;

export const FixStyled = styled(FiX)`
  font-size: 30px;
  color: #e2e2e2;
`;

export const BottomWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  width: 150px;
  height: 150px;
  border: 1px solid #e2e2e2;
  background-color: #ddd;
  border-radius: 150px;
  overflow: hidden;
`;

export const ImgBox = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextWrapper = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  > li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    :first-of-type {
      width: 100%;
    }

    :last-of-type {
      width: 100%;
      margin-top: 5px;
      padding-bottom: 15px;
      border-bottom: 1px solid #e2e2e2;
    }

    > h4 {
      font-size: 20px;
      margin-right: 5px;
    }

    > p {
      font-size: 14px;
    }

    > p:last-child {
      color: #979797;
      font-size: 15px;
    }
  }
`;

export const ModeWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  > li {
    width: 100%;
    height: 100%;
    padding: 20px;
    color: #979797;
    cursor: pointer;

    :last-of-type {
      display: flex;
      flex-direction: row;
      justify-content: center;

      > button {
        font-size: 14px;
      }
    }

    > button {
      width: 100%;
      height: 100%;
      color: #979797;
      background-color: transparent;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      font-size: 16px;

      :hover {
        color: #6658ca;
      }
    }
  }
`;
