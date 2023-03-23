import styled from "@emotion/styled";

interface MessageProps {
  isSent: boolean;
}

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #efefef;
  border-right: 1px solid #d9d9d9;
`;

export const Message = styled.div<MessageProps>`
  max-width: 60%;
  margin-bottom: 5px;
  padding: 8px 16px;

  word-wrap: break-word;
`;
