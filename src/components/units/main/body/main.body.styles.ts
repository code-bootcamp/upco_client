import styled from "@emotion/styled";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Map } from "react-kakao-maps-sdk";

export const CustomMarker = styled(FaMapMarkerAlt)`
  color: #b1b2ff;
  font-size: 40px;
`;

export const MabWeb = styled(Map)`
  width: calc(100% - 300px);
  height: calc(100vh - 81px);
`;
