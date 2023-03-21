import styled from "@emotion/styled";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Map } from "react-kakao-maps-sdk";

export const CustomMarker = styled(FaMapMarkerAlt)`
  color: #29a2c6;
  font-size: 40px;
`;

export const MabBox = styled.div`
  width: calc(100% - 300px);
  height: calc(100vh - 81px);
  background-color: #ddd;
  color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const MabWeb = styled(Map)`
  width: calc(100% - 300px);
  height: calc(100vh - 81px);
`;
