import styled from "@emotion/styled";
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
  BsFillMicFill,
  BsFillMicMuteFill,
} from "react-icons/bs";
import { HiVolumeOff, HiVolumeUp } from "react-icons/hi";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 50%;
  background-color: #000;
`;

export const OpponentVideo = styled.div`
  width: calc(100% - 250px);
  color: #fff;
  background-color: #ddd;
  object-fit: cover;
`;

export const Myvideo = styled.div`
  position: absolute;
  background-color: #d2d2d2;
  top: 20px;
  right: 20px;
  width: 130px;
  height: 160px;
  border-radius: 6px;
`;

export const IconBox = styled.ul`
  position: absolute;
  bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;

  > li {
    cursor: pointer;
    background-color: #b1b2ff;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  > li:nth-of-type(2) {
    margin: 0 10px;
  }
`;

export const VolumeOn = styled(HiVolumeOff)`
  font-size: 20px;
  color: #fff;
`;
export const VolumeOff = styled(HiVolumeUp)`
  font-size: 20px;
  color: #fff;
`;
export const MicOff = styled(BsFillMicFill)`
  font-size: 20px;
  color: #fff;
`;
export const MicOn = styled(BsFillMicMuteFill)`
  font-size: 20px;
  color: #fff;
`;
export const VideoOn = styled(BsFillCameraVideoOffFill)`
  font-size: 20px;
  color: #fff;
`;
export const VideoOff = styled(BsFillCameraVideoFill)`
  font-size: 20px;
  color: #fff;
`;
