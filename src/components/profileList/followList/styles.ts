import styled from "@emotion/styled";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  gap: calc(4% / 3);

  > li {
    position: relative;
    width: 24%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #e2e2e2;
    border-radius: 6px;
    padding: 10px 15px;
    margin-bottom: calc(4% / 3);
    @media (max-width: 1023px) {
      width: 49%;
    }
    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

export const ImgBox = styled.div`
  background-color: #fff;
  width: 30px;
  height: 30px;
  border: 1px solid #e2e2e2;
  border-radius: 50px;
  margin-right: 15px;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    object-fit: cover;
    object-position: center;
  }
`;

export const Name = styled.p`
  font-size: 16px;
  color: #191919;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`;

export const DeleteFollow = styled.button`
  position: absolute;
  /* top: 10px; */
  right: 20px;
  font-size: 12px;
  color: #979797;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    color: #6658ca;
  }
  @media (max-width: 767px) {
    font-size: 10px;
  }
`;

export const FollowListNoneBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 425px);
  font-size: 14px;
  color: #979797;
`;

export const followList = styled.div`
  color: #191919;
  > h4 {
    font-size: 12px;
  }
`;
