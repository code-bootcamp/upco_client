import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 150px;
  border-radius: 6px;
  margin-top: 50px;
  padding: 20px;
  border: 1px solid #d3d3d3;
`;

export const ProfileLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
  font-size: 18px;
  margin-bottom: 15px;
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
  margin-top: 15px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    background-color: #6658ca;
    color: #fff;
    border: 1px solid #6658ca;
  }
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
  transition: all 0.3s ease-in-out;

  :hover {
    color: #191919;
  }
`;

export const CreateId = styled.p`
  font-size: 14px;
  color: #a6a6a6;
`;
