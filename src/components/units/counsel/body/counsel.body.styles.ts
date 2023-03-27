import styled from "@emotion/styled";
export const Wrapper = styled.form`
  font-size: 14px;
  margin: 50px 0px 150px 0px;
  width: 1200px;
  display: flex;
  flex-direction: column;
`;
export const BodyRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2em;
`;
export const Label = styled.div`
  width: 5em;
`;
export const CounselEmail = styled.div`
  color: #9c9c9c;
`;
export const CounselTitle = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 10px;
  border: solid 1px #a5a5a5;
  border-radius: 5px;
  outline: none;
`;
export const CounselContents = styled.textarea`
  width: 100%;
  min-height: 319px;
  padding: 10px;
  border: solid 1px #a5a5a5;
  border-radius: 5px;
  resize: none;
  height: auto;
  outline: none;
`;
