import styled from "@emotion/styled";
import { FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import { Map } from "react-kakao-maps-sdk";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CustomMarker = styled(FaMapMarkerAlt)`
  color: #29a2c6;
  font-size: 40px;
`;

export const CustomMyMarker = styled(FaUserAlt)`
  color: #29a2c6;
  font-size: 40px;
`;

export const MyMarkerBox = styled.div`
  width: 100px;
  height: 100px;
`;

export const MyMarker = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

export const MabBox = styled.div`
  position: relative;
  width: calc(100% - 300px);
  height: calc(100vh - 68px);
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
    height: calc(100vh - 263px - 56px);
  }
`;

export const MabWeb = styled(Map)`
  width: 100%;
  height: 100%;

  @media (max-width: 767px) {
    width: 100%;
    height: calc(100vh - 263px - 56px);
  }
`;
