import styled from "@emotion/styled";
export const Wrapper = styled.form`
  font-size: 14px;
  margin-top: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 50px;
`;
export const BodyRow = styled.ul`
  display: flex;
  flex-direction: column;

  > li {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }

  > li:last-of-type {
    align-items: flex-start;
  }

  @media (max-width: 767px) {
    padding: 0 25px;
  }
`;

export const LabelBox = styled.div`
  width: 100%;
  display: flex;
`;

export const Label = styled.label`
  width: 100px;
  font-size: 14px;
  color: #191919;
  white-space: nowrap;
`;
export const CounselEmail = styled.p`
  color: #979797;
`;
export const CounselTitle = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 10px;
  border: solid 1px #e2e2e2;
  border-radius: 6px;
  outline: none;
`;
export const CounselContents = styled.textarea`
  width: 100%;
  min-height: 400px;
  padding: 10px;
  border: solid 1px #e2e2e2;
  border-radius: 6px;
  resize: none;
  height: auto;
  outline: none;

  @media (max-width: 767px) {
    min-height: 200px;
  }
`;

export const ErrorMessageBox = styled.div`
  height: 25px;
`;

export const ErrorMessage = styled.p`
  color: #de6449;
  margin-top: 5px;
  margin-left: 92px;
  font-size: 10px;
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
