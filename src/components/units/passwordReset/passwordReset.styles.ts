import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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
