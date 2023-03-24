import styled from "@emotion/styled";
import { TbMessageCircle2 } from "react-icons/tb";
import { BsMap } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

export const colors = {
  menuColor: "#979797",
  selectedColor: "#6658CA",
};

export const Wrapper = styled.div`
  background-color: #ffffff;
  position: relative;
  width: 100%;
  height: 68px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  z-index: 9;
  box-shadow: 0px 1px 0px 1px #e2e2e2;
  > div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Logo = styled.img`
  height: 24px;
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
    color: ${colors.menuColor};

    a {
      color: ${colors.menuColor};
      text-decoration: none;
      font-size: 14px;
      padding-top: 3px;
    }

    &.selected {
      a {
        color: ${colors.selectedColor};
      }

      svg {
        color: ${colors.selectedColor};
      }
    }
  }

  > div:nth-of-type(2) {
    margin: 0 45px;
  }
`;

export const MapIcon = styled(BsMap)`
  font-size: 25px;
`;

export const MessageIcon = styled(TbMessageCircle2)`
  font-size: 25px;
  transform: scale(1.2);
  stroke-width: 1.2;
`;
