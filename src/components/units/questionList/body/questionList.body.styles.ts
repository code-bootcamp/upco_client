import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* max-width: 1200px;  */
  margin: 0 auto;
  margin-top: 50px;
  padding: 0 50px;
`;

export const Title = styled.h4`
  font-size: 18px;
  padding-bottom: 15px;
  border-bottom: 2px solid #191919;
  margin-bottom: 30px;

  @media (max-width: 767px) {
    /* font-size: 16px;  */
    /* margin: 0 25px; */
  }
`;

export const ContentsBox = styled.div`
  height: 600px;
  @media (max-width: 767px) {
    margin: 0 25px;
    margin-top: 20px;
  }
`;

export const ContentsList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 20px;
  padding-bottom: 15px;
  cursor: pointer;

  > p {
    font-size: 14px;
    user-select: none;
  }
`;

export const NoneBox = styled.p`
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #979797;
  font-size: 14px;
  user-select: none;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContentsTitle = styled.p`
  color: #191919;
  font-family: "Bold";
  margin-right: 30px;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 767px) {
    width: 90px;
    font-size: 14px;
  }
`;

export const Contents = styled.p`
  max-width: 900px;
  color: #191919;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 767px) {
    width: 140px;
    font-size: 14px;
  }
`;

export const CreateAt = styled.p`
  color: #979797;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;
