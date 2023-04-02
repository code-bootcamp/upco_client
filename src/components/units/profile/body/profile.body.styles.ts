import styled from "@emotion/styled";
import { FiEdit } from "react-icons/fi";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  border-radius: 6px;
  margin-top: 50px;
  padding: 20px;
  border: 1px solid #d3d3d3;
  @media (max-width: 767px) {
    height: 320px;
    display: flex;
    flex-direction: column;
  }
`;

export const ProfileLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > ul {
    display: flex;
    flex-direction: column;

    > li {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
    }
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const UserIconBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #d1d1d1;
  margin-right: 30px;

  > img {
    border-radius: 50px;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 767px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-right: 0px;
    width: 70px;
    height: 70px;
  }
`;

export const Name = styled.h4`
  font-size: 18px;
  margin-right: 5px;
  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const Age = styled.p`
  font-size: 14px;
  color: #979797;
  @media (max-width: 767px) {
    font-size: 10px;
  }
`;

export const Email = styled.p`
  font-size: 14px;
  color: #979797;
  margin-bottom: 15px;
  @media (max-width: 767px) {
    font-size: 10px;
  }
`;

export const Interest = styled.p`
  font-size: 14px;
  padding: 3px 18px;
  background-color: #6658ca;
  color: #fff;
  border-radius: 100px;
  margin-right: 5px;
  margin-top: 5px;
  @media (max-width: 767px) {
    font-size: 10px;
    padding: 2px 15px;
  }
`;

export const ProfileRight = styled.div`
  div {
    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      color: #979797;
      font-size: 14px;
      text-decoration: underline;
      transition: all 0.3s ease-in-out;
      @media (max-width: 767px) {
        justify-content: flex-end;
      }

      :hover {
        color: #191919;
      }
    }
  }

  @media (max-width: 767px) {
    p {
      font-size: 10px;
      @media (max-width: 767px) {
        margin-top: 10px;
      }
    }
  }
`;
