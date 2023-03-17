import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 50px;
`;

export const Title = styled.h4`
  font-size: 18px;
`;

export const DivideLine = styled.div`
  width: 100%;
  background-color: #000;
  height: 2px;
  margin: 15px 0 30px;
`;

export const Section = styled.div`
  max-width: 480px;
  display: flex;
  flex-direction: column;
`;

export const SectionTitle = styled.span`
  color: #a1a1a1;
  font-size: 14px;
`;

export const DefaultBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #ebebeb;
  padding: 10px 0;
  margin-bottom: 35px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > button {
    font-size: 12px;
    /* padding: 5px 10px; */
    width: 60px;
    height: 20px;
    border-radius: 6px;
    background-color: #fff;
    border: 1px solid #191919;
    color: #191919;
    cursor: pointer;
  }
`;

export const InterestBox = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;

  > li {
    font-size: 12px;
    color: #fff;
    background-color: #a777b1;
    padding: 5px 10px;
    border-radius: 20px;
    margin-right: 5px;
    margin-bottom: 8px;
  }
`;
