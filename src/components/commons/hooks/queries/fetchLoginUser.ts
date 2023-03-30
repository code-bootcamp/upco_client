import { gql, useQuery } from "@apollo/client";

const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      nickname
      email
      age
      reported
      createAt
    }
  }
`;

export const useQueryFetchLoginUser = () => {
  const result = useQuery(FETCH_LOGIN_USER);
  return result;
};
