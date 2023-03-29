import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 68px);
  color: white;
  /* background: linear-gradient(180deg, #6658ca 0%, #9e4dab 100%);  */
  background-color: #6658ca;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40vw;
    height: 40vh;
    /* background-color: red;  */

    > form {
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

  font-weight: 100;
`;

export const Title02 = styled.h2`
  font-size: 40px;

  margin-top: 40px;
`;

export const Title03 = styled.h3`
  font-size: 30px;

  margin-top: 30px;
  margin-bottom: 30px;
`;

export const Input01 = styled.input`
  width: 500px;
  height: 50px;
  margin-right: 15px;
  outline: white;
  padding: 10px;
`;

export const Input02 = styled.input`
  width: 500px;
  height: 50px;
  margin-right: 15px;
  outline: white;
  padding: 10px;
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
  color: white;
`;

export const Button02 = styled.button`
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
  color: white;
`;
