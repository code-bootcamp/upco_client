import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
  }
`;

export const SendContents = styled.textarea`
  width: 100%;
  height: 100px;
  font-size: 14px;
  padding: 0.5rem;
  border: 1px solid #d9d9d9;
  resize: none;
  ::-webkit-scrollbar {
    display: none;
  }
  :focus {
    outline: none;
  }
`;

export const SendMenu = styled.div`
  width: 100%;
  border-top: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid #6658ca;
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
  background-color: #6658ca;
  color: white;
  font-size: 18px;
  font-weight: bold;
`;

export const Icon = styled.div`
  color: #d5d5d5;
  margin-left: 15px;
  font-size: 22px;
`;
