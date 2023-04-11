import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;
  background-image: url("/images/home/background01.jpg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
  }
  @media (max-width: 767px) {
    > div {
      padding: 50px;
    }
  }
`;

export const Title = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 24px;
  color: #fff;
  font-family: "Cafe24";

  > h4 {
    font-size: 40px;
    margin-bottom: 10px;
    font-family: "Cafe24";

    :last-of-type {
      margin-left: 10px;
    }
  }
  @media (max-width: 767px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 15px;
    > h4 {
      font-size: 30px;
    }
  }
`;

export const Logo = styled.img`
  height: 34px;
  margin-left: 15px;
  user-select: none;
  margin-bottom: 10px;
  @media (max-width: 767px) {
    height: 30px;
  }
`;

export const ButtonBox = styled.div`
  > button {
    font-size: 20px;
    color: #fff;
    border: 2px solid #fff;
    border-radius: 30px;
    padding: 5px 25px;
    margin-top: 10px;
    background-color: transparent;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    :hover {
      border: 2px solid #6658ca;
      background-color: #6658ca;
    }
  }
`;
