import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-right: 1px solid #d9d9d9;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;

  > div {
    max-width: 60%;
    word-wrap: break-word;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }

  > div.sent-message {
    align-self: flex-end;
    background-color: #f8e71c;
    color: #000;
  }
`;
