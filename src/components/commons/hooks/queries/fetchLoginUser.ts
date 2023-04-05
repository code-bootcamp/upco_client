import { gql, useQuery } from "@apollo/client";

const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      nickname
      email
      age
      reported
      image
      interests {
        name
      }
      createAt
    }
  }
`;

export const useQueryFetchLoginUser = (): typeof result => {
  const result = useQuery(FETCH_LOGIN_USER, {
    fetchPolicy: "no-cache",
  });
  return result;
};
