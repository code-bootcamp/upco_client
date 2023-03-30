import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: calc(70vh);
  /* background: linear-gradient(180deg, #9e4dab 0%, #6658ca 100%);  */
  /* background-color: #6658ca;  */
`;

export const ImgWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: blue;
  border: 5px solid #6658ca;
  border-radius: 100px;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  /* background-color: red; */
  background-color: #6658ca;
  background: rgba(102, 88, 202, 0.7);

  /* background-color: #fff; */
  /* background: linear-gradient(0deg, #6658ca 0%, rgba(102, 88, 202, 0.67) 100%);   */

  > div {
    color: #fff;
    font-size: 40px;
  }
  > div:nth-child(2) {
    margin-top: 30px;
    font-size: 30px;
  }
`;
