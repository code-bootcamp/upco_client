import styled from "@emotion/styled";

const activeColor = "#6658ca";
const inactiveColor = "#979797";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  /* height: 100vh; */

  @media (max-width: 767px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    width: 100%;
  }
`;

export const ChatFooterTitle = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-size: 18px;
  @media (max-width: 767px) {
    font-size: 15px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

const Title = styled.div<{ selected: boolean }>`
  cursor: pointer;
  user-select: none;
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  color: ${({ selected }) => (selected ? activeColor : inactiveColor)};
`;

export const ChatTitle = styled(Title)`
  margin-right: 30px;
  @media (max-width: 767px) {
  }
`;

export const FollowerTitle = styled(Title)`
  color: #6658ca;
  @media (max-width: 767px) {
    /* margin-left: 15px; */
  }
`;

export const FollowList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #979797;
  cursor: pointer;
  padding: 10px 0;
  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

export const DivideLine = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
`;
