import styled from "@emotion/styled";

const activeColor = "#a777b1";
const inactiveColor = "#717171";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
`;

export const ChatFooterTitle = styled.div`
  height: 4em;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-size: 18px;
  color: #b8b8b8;
`;

const Title = styled.div<{ selected: boolean }>`
  cursor: pointer;
  user-select: none;
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  color: ${({ selected }) => (selected ? activeColor : inactiveColor)};
`;

export const ChatTitle = styled(Title)`
  margin-right: 30px;
`;

export const FollowerTitle = styled(Title)``;

export const DivideLine = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  margin: 15px 0px;
`;
