import { gql, useQuery } from "@apollo/client";
import { IQuery, IUser } from "../../../../commons/types/generated/types";

export const FETCH_FRIEND_REQUESTS = gql`
  query fetchFriendRequests {
    fetchFriendRequests {
      id
      sender {
        id
        nickname
        image
      }
    }
  }
`;

export const useQueryFetchFriendRequests = (): typeof result => {
  const result = useQuery<Pick<IQuery, "fetchFriendRequests">, IUser>(FETCH_FRIEND_REQUESTS);

  return result;
};
