import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex-direction: row;
  }
`;

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  position: relative;
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    button {
      display: block;
    }
  }
  @media (max-width: 767px) {
    width: 320px;
    height: 158px;
    display: flex;
    flex-direction: row;
    border-right: 1px solid #e2e2e2;
    margin: 0px;
  }
`;

export const ImageSection = styled.img`
  width: 100%;
  height: 150px;
  margin: 20px 20px 0;
  object-fit: cover;
  object-position: center;
  z-index: -1;
  border-radius: 6px;
  @media (max-width: 767px) {
    height: 130px;
    width: 130px;
    margin: 14px 0 0 0px;
    /* margin-top: 7px;  */
    /* margin-bottom: 7px; */
    object-fit: cover;
  }
`;

export const ImageColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  @media (max-width: 767px) {
    height: 158px;
    width: 158px;
    /* background-color: blue; */
  }
`;

export const NickNameSection = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const AgeSection = styled.div`
  color: #979797;
  z-index: -1;
  font-size: 14px;
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

export const InterestSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  background-color: #6658ca;
  padding: 3px 18px;
  height: 25px;
  color: #fff;
  margin: 7px 5px 0px 0px;
  z-index: -1;
  font-size: 14px;

  @media (max-width: 767px) {
    margin: 1px;
    padding: 1px 10px;
    height: 20px;
    font-size: 8px;
  }
`;

export const LocationListRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  flex-wrap: wrap;
  margin: 10px 20px 0;
`;

export const InterestBox = styled.div`
  margin: 0 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
  @media (max-width: 767px) {
    margin: 0 10px;
  }
`;

export const LocationListColumn = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const DivideLine = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const HoverButton = styled.button`
  width: 50px;
  height: 50px;
  background-color: #6658ca;
  border: none;
  border-radius: 50px;
  color: #fff;
  margin-right: 10px;
  font-size: 30px;
  display: none;
  margin: 0 15px;
  padding-top: 4px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 767px) {
    width: 25px;
    height: 25px;
    font-size: 15px;
    margin: 0 10px;
  }
`;

export const HoverTitle = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;
