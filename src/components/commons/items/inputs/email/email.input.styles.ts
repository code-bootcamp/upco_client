import styled from "@emotion/styled";

export const Wrapper = styled.span`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-items: space-between;
  height: 50px;
`;

export const Input = styled.input`
  flex: 1;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 50px;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
  margin-right: 10px;
  ::placeholder {
    color: #ccc;
    font-size: 12px;
  }
  :focus {
    border-color: #b1b2ff;
  }
  :disabled {
    color: #b1b2ff;
  }
`;

export const Button = styled.button`
  position: relative;
  background-color: #6658ca;
  border-radius: 99px;
  color: #ffffff;
  font-size: 10px;
  width: 50px;
  padding: 8px;
  cursor: pointer;
  white-space: pre-line;

  :hover {
    background-color: #5346ad;
  }
  :active {
    background-color: #8073db;
  }
`;
