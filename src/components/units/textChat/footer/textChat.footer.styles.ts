import styled from "@emotion/styled";

const activeColor = "#6658ca";
const inactiveColor = "#979797";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 100%;
`;

export const ChatFooterTitle = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-size: 18px;
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

export const FollowList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #979797;
  cursor: pointer;
  padding: 10px 0;
`;

export const DivideLine = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
`;
