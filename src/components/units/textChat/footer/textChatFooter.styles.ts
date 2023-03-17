import styled from "@emotion/styled";

// export const SendWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-end;
//   max-width: 100px;
// `;

export const SendContents = styled.textarea`
  width: 500px;
  height: 100%;
  max-width: 1200px;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  resize: none;
  ::-webkit-scrollbar {
    display: none;
  }

  :focus {
    outline: none;
    border-color: blue;
  }
`;

// export const SendBtnWrapper = styled.div`
//   width: 7%;

//   height: 180px;
//   border-right: 1px solid #bdbdbd;
//   border-top: 1px solid #bdbdbd;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
// `;

// export const SendBtn = styled.button`
//   :hover {
//     cursor: pointer;
//   }
//   :active {
//     background-color: gray;
//   }
//   width: 100%;
//   height: 55px;
//   background-color: black;
//   color: white;
//   font-size: 16px;
//   font-weight: 500;
// `;
