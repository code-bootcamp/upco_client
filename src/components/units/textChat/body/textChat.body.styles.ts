import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const SendContents = styled.textarea`
  width: 100%;
  height: 110px;
  font-size: 14px;
  padding: 0.5rem;
  border: 1px solid #d9d9d9;
  resize: none;
  ::-webkit-scrollbar {
    display: none;
  }
  :focus {
    outline: none;
    border-color: #a777b1;
  }
`;

export const SendMenu = styled.div`
  width: 100%;
  border: 1px solid #d9d9d9;
  border-top: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const IconSection = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  margin-left: 6px;
`;
export const SendBtn = styled.button`
  width: 64px;
  height: 41px;
  background-color: #a777b1;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const Icon = styled.div`
  color: #d5d5d5;
  margin-left: 15px;
  font-size: 22px;
`;
