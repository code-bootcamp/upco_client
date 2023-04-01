import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUserArgs } from "../../../../commons/types/generated/types";

const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      nickname
      email
      age
      reported
      interests {
        name
      }
      createAt
    }
  }
`;

export const useQueryFetchLoginUser = (): typeof result => {
  const result = useQuery<Pick<IQuery, "fetchLoginUser">, IQueryFetchUserArgs>(FETCH_LOGIN_USER);
  return result;
};
