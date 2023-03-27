import styled from "@emotion/styled";

export const LocationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  position: relative;
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
    button {
      display: block;
    }
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
`;

export const ImageColumn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const NickNameSection = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-right: 5px;
`;

export const AgeSection = styled.div`
  color: #979797;
  z-index: -1;
  font-size: 14px;
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
`;

export const LocationListColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivideLine = styled.div`
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
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
`;

export const HoverTitle = styled.div`
  font-size: 12px;
  margin-top: 10px;
`;
