import styled from "@emotion/styled";
import { TbMessageCircle2 } from "react-icons/tb";
import { BsMap } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

export const Wrapper = styled.div`
  background-color: #01b6ad;
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 50px;

  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  height: 35px;
  cursor: pointer;
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
`;

export const UserIcon = styled(BiUser)`
  width: 100%;
  height: 100%;
  color: #d2d2d2;
`;

export const DivideLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: #e2e2e2;
`;

export const MenuBox = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    cursor: pointer;

    a {
      color: #fff;
      text-decoration: none;
      font-size: 14px;
      padding-top: 3px;
    }
  }

  > div:nth-of-type(2) {
    margin: 0 45px;
  }
`;

export const MapIcon = styled(BsMap)`
  color: #fff;
  font-size: 25px;
`;

export const MessageIcon = styled(TbMessageCircle2)`
  color: #fff;
  font-size: 25px;
  transform: scale(1.2);
  stroke-width: 1.2;
`;

export const FriendListIcon = styled(FiUsers)`
  color: #fff;
  font-size: 25px;
  stroke-width: 1.5;
`;
