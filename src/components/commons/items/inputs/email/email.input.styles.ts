import styled from "@emotion/styled";

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid #ccc;
  border-radius: 50px;
  font-size: 14px;
  height: 50px;
  line-height: 50px;
  padding: 0 20px;

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
  position: absolute;
  background-color: #6658ca;
  border-radius: 4px;
  color: #ffffff;
  top: 8.5px;
  right: 16px;
  font-size: 12px;
  padding: 8px;
  cursor: pointer;

  :hover {
    background-color: #5346ad;
  }
  :active {
    background-color: #8073db;
  }
`;
