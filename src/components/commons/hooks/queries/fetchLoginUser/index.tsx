import { gql, useQuery } from "@apollo/client";

export const FETCH_LOGIN_USER = gql`
  query {
    fetchLoginUser {
      id
      nickname
      email
      age
      interest
      reported
      createAt
      updateAt
      deletedAt
    }
  }
`;

export const useQueryFetchLoginUser = () => {
  const result = useQuery(FETCH_LOGIN_USER);
  return result;
};
