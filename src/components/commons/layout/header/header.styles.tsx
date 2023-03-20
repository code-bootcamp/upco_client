import styled from "@emotion/styled";
import { TbMessageCircle2 } from "react-icons/tb";
import { BsMap } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

export const Wrapper = styled.div`
  height: 70px;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > div {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    > img {
      height: 25px;
      cursor: pointer;
    }
  }
`;

export const UserBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-grow: 1;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border: 2px solid #979797;
    border-radius: 15px;
    background-color: #fff;
  }
`;

export const UserIcon = styled(BiUser)`
  width: 100%;
  height: 100%;
  background-color: #fff;
  border-radius: 15px;
  cursor: pointer;
  color: #979797;
`;

export const DivideLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e2e2e2;
`;

export const MenuBox = styled.ul`
  display: flex;
  flex-direction: row;

  > li {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    cursor: pointer;

    a {
      color: #979797;
      text-decoration: none;
      font-size: 14px;
      padding-top: 3px;
    }
  }

  > li:nth-of-type(2) {
    margin: 0 30px;
  }
`;

export const MapIcon = styled(BsMap)`
  color: #979797;
  font-size: 20px;
`;

export const MessageIcon = styled(TbMessageCircle2)`
  color: #979797;
  font-size: 20px;
  transform: scale(1.2);
  stroke-width: 1.2;
`;

export const FriendListIcon = styled(FiUsers)`
  color: #979797;
  font-size: 20px;
  stroke-width: 1.5;
`;
