import { gql, OperationVariables, QueryResult, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUserArgs } from "../../../../commons/types/generated/types";

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

export const useQueryFetchLoginUser = (): QueryResult<
  Pick<IQuery, "fetchLoginUser">,
  OperationVariables
> => {
  const result = useQuery<Pick<IQuery, "fetchLoginUser">>(FETCH_LOGIN_USER, {
    fetchPolicy: "no-cache",
  });
  return result;
};
