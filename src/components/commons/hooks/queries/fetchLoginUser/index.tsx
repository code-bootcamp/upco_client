import { gql, useQuery } from "@apollo/client";

export const FETCH_LOGIN_USER = gql`
  query {
    fetchLoginUser {
      Id
      nickname
      email
      age
      interest
      reported
      createAt
      updateAt
      deleteAt
    }
  }
`;

export const useQueryFetchLoginUser = () => {
  const result = useQuery(FETCH_LOGIN_USER);
  return result;
};
