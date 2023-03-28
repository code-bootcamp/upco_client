import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 68px);
  background-color: #6658ca;
  color: white;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40vw;
    height: 40vh;
    /* background-color: red;  */
    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
`;

export const Title01Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  /* background-color: blue;  */
`;

export const Title01 = styled.h1`
  font-size: 50px;
  font-family: "MainTitle02";
`;

export const Title02 = styled.h2`
  font-size: 40px;
  font-family: "MainTitle01";
`;

export const Title03 = styled.h3`
  font-size: 30px;
  font-family: "MainTitle01";
`;

export const Input01 = styled.input`
  width: 500px;
  height: 50px;
  margin-right: 15px;
  outline: white;
  padding: 5px;
`;

export const Button01 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 89px;
  height: 68px;
  border-radius: 50%;
  background-color: #ff6464;
  cursor: pointer;
  user-select: none;
`;
