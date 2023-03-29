import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d9d9d9;

  > div.noMessage {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #999;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  white-space: pre-wrap;

  > div {
    max-width: 60%;
    word-wrap: break-word;
    overflow-wrap: break-word;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }

  > div.systemMessage {
    margin: 0 auto;
    color: #333;
    padding: 5px 10px;
  }

  > div.sentMessage {
    align-self: flex-end;
    background-color: #f8e71c;
    color: #333;
  }
`;
