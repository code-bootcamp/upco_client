import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  border-radius: 6px;
  margin-top: 50px;
  padding: 25px 30px;
  border: 1px solid #d3d3d3;
`;

export const ProfileLeft = styled.div`
  display: flex;
  flex-direction: row;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 15px 0;
  }
`;

export const UserIcon = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #d1d1d1;
  margin-right: 30px;
`;

export const Name = styled.h4`
  font-family: "Bold";
  font-size: 20px;
`;

export const Email = styled.p`
  color: #5e5e5e;
  font-size: 14px;
`;

export const EditImage = styled.button`
  color: #a6afa6;
  font-size: 14px;
  padding: 3px 16px;
  border: 1px solid #a6a6a6;
  border-radius: 6px;
  background-color: #fff;
  cursor: pointer;
`;

export const ProfileRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Quit = styled.button`
  text-decoration: underline;
  cursor: pointer;
  background-color: #fff;
  color: #a6a6a6;
`;

export const CreateId = styled.p`
  font-size: 14px;
  color: #a6a6a6;
`;
