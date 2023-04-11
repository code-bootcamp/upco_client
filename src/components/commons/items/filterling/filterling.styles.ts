import styled from "@emotion/styled";
import { BiSearch } from "react-icons/bi";
import { FixedSizeList } from "react-window";

export const Wrapper = styled.div`
  position: absolute;
  width: 320px;
  top: 30px;
  left: 50px;
  border: 1px solid #e2e2e2;
  padding: 10px;
  background-color: #fff;
  z-index: 1;
`;

export const Contents = styled.div`
  position: relative;

  > p {
    color: #191919;
    font-size: 14px;
    margin-bottom: 10px;
    user-select: none;
  }

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 30px;
  background-color: #fff;
  color: #191919;
  border: 1px solid #6658ca;
  padding: 10px;
  border-right: none;
  outline: none;
  font-size: 12px;

  ::placeholder {
    font-size: 12px;
    color: #979797;
  }
`;

export const SearchIconBox = styled.button`
  min-width: 30px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #6658ca;
  cursor: pointer;
`;

export const SearchIcon = styled(BiSearch)`
  color: #fff;
`;

export const InterestToolTip = styled.div`
  width: calc(100% - 50px);
  height: 150px;
  position: absolute;
  background-color: #fff;
  color: #191919;
`;

export const List = styled(FixedSizeList)`
  width: calc(100% - 50px);
  position: absolute;
  background-color: #fff;
  border: 1px solid #e2e2e2;
  margin-top: 2px;
`;

export const NoneList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #979797;
  user-select: none;
`;
