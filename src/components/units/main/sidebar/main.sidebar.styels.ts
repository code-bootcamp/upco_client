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
  width: 100%;
  height: 150px;
`;

export const ImgBox = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #e2e2e2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  > p {
    font-size: 14px;
  }

  > p:last-child {
    color: #979797;
    font-size: 12px;
  }
`;

export const ModeWrapper = styled.div`
  width: 100%;
  /* padding: 0 20px; */
  border-top: 1px solid #e2e2e2;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  padding: 20px 0;
  /* background-color: red;  */
`;

export const ModeBox = styled.div`
  height: 40px;
  color: #979797;
  :hover {
    color: #6658ca;
  }
`;
