import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  font-size: 20px;

  @media (max-width: 767px) {
    padding: 0 25px;
    font-size: 16px;
  }
`;

export const MenuTitle = styled.div`
  margin-right: 15px;
  color: gray;
  user-select: none;
  cursor: pointer;
`;
