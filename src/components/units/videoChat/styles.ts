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
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #191919;
  border-right: 1px solid #e2e2e2;
`;

export const OpponetVideoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  border-bottom: 1px solid #e2e2e2;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;

    > video {
      width: 100%;
    }
  }
`;

export const MyvideoBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;

    > video {
      width: 100%;
    }
  }
`;

export const IconBox = styled.ul`
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  align-items: center;

  > li {
    cursor: pointer;
    background-color: #6658ca;
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
