import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`;

export const Title = styled.h4`
  font-size: 18px;
  padding-bottom: 15px;
  border-bottom: 2px solid #191919;
  margin-bottom: 30px;
`;

export const Section = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.span`
  color: #979797;
  font-size: 14px;
`;

export const DefaultBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #e2e2e2;
  padding: 20px 0 5px;
  margin-bottom: 35px;

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    > button {
      padding: 0 20px;
      font-size: 14px;
      background-color: #fff;
      border: 1px solid #979797;
      border-radius: 6px;
      color: #979797;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      white-space: nowrap;

      :hover {
        color: #fff;
        background-color: #000;
        border: 1px solid #000;
      }
    }
  }
`;

export const InterestBox = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  li {
    font-size: 14px;
    color: #fff;
    background-color: #6658ca;
    padding: 5px 20px;
    border-radius: 20px;
    margin-right: 5px;
    margin-bottom: 8px;
  }
`;
export const InterestAddButton = styled.button`
  margin-bottom: 8px;
  padding: 0 20px;
  font-size: 14px;
  background-color: #fff;
  border: 1px solid #979797;
  border-radius: 6px;
  color: #979797;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
`;

export const BtnSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const CancelBtn = styled.button`
  width: 120px;
  height: 40px;
  font-size: 14px;
  background-color: #979797;
  color: #fff;
  margin-top: 40px;
  margin-right: 20px;
`;

export const UpdateBtn = styled.button`
  width: 120px;
  height: 40px;
  font-size: 14px;
  background-color: #6658ca;
  color: #fff;
  margin-top: 40px;
`;
