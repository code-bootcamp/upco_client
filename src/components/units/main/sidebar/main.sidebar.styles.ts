import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 1024px;
  border-left: 1px solid gray;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid gray;
`;

export const Title = styled.div`
  color: gray;
  margin-right: 10px;
`;

export const FollowerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid gray;
`;

export const FollowerText = styled.div`
  color: gray;
  margin-right: 10px;
`;

export const FollowerStatus = styled.div`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: greenyellow;
`;

export const FollowerWrapper02 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FollowerBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
  border-bottom: 1px solid gray;
`;

export const FollowerImg = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
`;

export const FollowerNameBox = styled.div`
  display: flex;
  flex-direction: column;
  > div:nth-of-type(2) {
    color: gray;
  }
`;

export const ProfileWrapper = styled.div`
  height: 280px;
  padding: 25px 20px;
  border-bottom: 1px solid gray;
`;

export const ProfileImg = styled.div`
  height: 150px;
  background-color: gray;
`;

export const ProfileNameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  div:nth-of-type(2) {
    color: gray;
    margin-left: 10px;
  }
`;

export const ProfileInterest = styled.div`
  display: flex;
  flex-direction: row;
  div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 25px;
    border-radius: 15px;
    background-color: #a2a0eb;
    color: white;
    margin-right: 10px;
  }
`;
