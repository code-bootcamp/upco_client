import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #d9d9d9;
  padding: 20px;
  overflow-y: auto;

  > div.noMessage {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #999;
  }
  > div.sentMessage {
    align-self: flex-end;
    background-color: #f8e71c;
    color: #333;
    max-width: 60%;
    word-wrap: break-word;
    overflow-wrap: break-word;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }
  > div.firstMessage {
    align-self: center;
    color: #999;
    margin: 20px 0px;
  }
  > div.receivedMessage {
    align-self: flex-start;
    max-width: 60%;
    word-wrap: break-word;
    overflow-wrap: break-word;
    padding: 10px;
    margin: 5px;
    border-radius: 5px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  }

  @media (max-width: 767px) {
  }
`;
