import { gql, useQuery } from "@apollo/client";
import { IBlock, IQuery } from "../../../../commons/types/generated/types";

const FETCH_BLOCK_USERS = gql`
  query fetchBlockUsers {
    fetchBlockUsers {
      id
      blocked_user {
        id
        nickname
        image
      }
    }
  }
`;

export const useQueryFetchBlockUsers = (): typeof result => {
  const result = useQuery<Pick<IQuery, "fetchBlockUsers">, IBlock>(FETCH_BLOCK_USERS);

  return result;
};
