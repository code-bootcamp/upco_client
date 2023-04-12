import styled, { CSSObject } from "@emotion/styled";
import { BiUser } from "react-icons/bi";

const activeColor = "#6658ca";
const inactiveColor = "#979797";

interface IWrapperProps {
  isOpen?: boolean;
}

interface IProps {
  mPage: boolean;
}
export const Wrapper = styled.div<IWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border-left: 1px solid #e2e2e2;
  /* background: red;  */
  overflow-y: auto;

  @media (max-width: 767px) {
    width: 100%;
    padding: 0 1px;
    display: block;
    z-index: 20;
    height: calc(20vh);
  }
`;

export const SubWrapper = styled.div`
  @media (max-width: 767px) {
    height: 5vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-bottom: 1px solid #e2e2e2;
  }
`;

export const ChatFooterTitle = styled.div`
  width: 300px;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 18px;
  @media (max-width: 767px) {
    padding: 10px 20px;
    font-size: 15px;
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
  border-top: 1px solid #e2e2e2;
  @media (max-width: 767px) {
    display: ${(props: IProps) => (props.mPage ? "none" : "flex")};
    flex-direction: row;
    justify-content: flex-start;
    font-size: 15px;
    border: none;
  }
`;

export const DivideLine = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  background-color: #fff;
  padding: 2px;
  border-radius: 50px;
  cursor: pointer;
  border-bottom: 1px solid #979797;
`;

export const UserIcon = styled(BiUser)`
  width: 100%;
  height: 100%;
  color: #d2d2d2;
`;

export const FriendRequestListBox = styled.div`
  width: 100%;
  max-height: 250px;
  border-bottom: 1px solid #e2e2e2;
  background-color: #fff;
  @media (max-width: 767px) {
    height: 15vh;
    background: blue;
  }
`;

export const FriendRequestList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  :hover {
    background-color: #f8f8f8;
  }

  > li {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 20px;

    > p {
      width: 100px;
      font-size: 16px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      user-select: none;
    }

    > button {
      padding: 3px;
      margin-left: 10px;
      background-color: transparent;
      color: #979797;
      font-size: 14px;
      cursor: pointer;
      white-space: nowrap;
      user-select: none;
      transition: all 0.3s ease-in-out;

      :first-of-type {
        color: #6658ca;
      }
    }
  }
`;

export const Imgbox = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid #d2d2d2;
  border-radius: 40px;
  background-color: transparent;
  margin-right: 10px;
  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
