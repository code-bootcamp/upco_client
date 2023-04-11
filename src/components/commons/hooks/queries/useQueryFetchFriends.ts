import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUserArgs } from "../../../../commons/types/generated/types";

export const FETCH_FRIENDS = gql`
  query fetchFriends {
    fetchFriends {
      id
      nickname
      image
    }
  }
`;

export const useQueryFetchFriends = (): typeof result => {
  const result = useQuery<Pick<IQuery, "fetchFriends">, IQueryFetchUserArgs>(FETCH_FRIENDS);

  return result;
};
