import styled from "@emotion/styled";
import { BiUser } from "react-icons/bi";

export const FollowerWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  width: 300px;

  @media (max-width: 767px) {
    width: 200px;
    padding: 15px;
  }
`;
export const NickNameSection = styled.h4`
  font-family: "Bold";
  font-size: 16px;
`;

export const ImageBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: transparent;
  margin-right: 10px;

  @media (max-width: 767px) {
    width: 25px;
    height: 25px;
    margin-right: 12px;
  }
`;

export const ImageSection = styled.img`
  width: 100%;
  height: 100%;
`;

export const UserIcon = styled(BiUser)`
  width: 100%;
  height: 100%;
  color: #d2d2d2;
  border-radius: 50px;
`;

export const ChatSection = styled.div`
  padding-right: 7px;
  margin-top: 2px;
  color: #b1b1b1;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 767px) {
    font-size: 12px;
  }
`;
export const FollowerListRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const FollowerListColumn = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;

export const DivideLine = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
`;

export const DottedIcon = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  justify-self: flex-end;
  align-self: flex-start;

  > li {
    width: 3px;
    height: 3px;
    background-color: #979797;
    border-radius: 3px;

    :not(:first-of-type) {
      margin-left: 2px;
    }
  }
`;

export const NoneText = styled.p`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #979797;
`;
