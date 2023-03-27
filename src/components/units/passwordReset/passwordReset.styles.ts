import styled from "@emotion/styled";
import { BiX } from "react-icons/bi";

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
`;

export const Container = styled.div`
  width: 800px;
  height: 600px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: #333333;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 70%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #cccccc;
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: #204969;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;

export const Close = styled(BiX)`
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
