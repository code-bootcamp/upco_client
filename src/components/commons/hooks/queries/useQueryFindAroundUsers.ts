import { gql, QueryResult, useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IQuery,
  IQueryFindAroundUsersArgs,
} from "../../../../commons/types/generated/types";
import { interestFilter, locationState } from "../../stores";

export const FIND_AROUND_USERS = gql`
  query findAroundUsers($bothLocation: FindAroundUserInput!, $interest: String) {
    findAroundUsers(bothLocation: $bothLocation, interest: $interest) {
      id
      lat
      lng
      age
      nickname
      image
      interests {
        id
        name
      }
    }
  }
`;

export const useQueryFindAroundUsers = (): QueryResult<
  Pick<IQuery, "findAroundUsers">,
  IQueryFindAroundUsersArgs
> => {
  const [location] = useRecoilState(locationState);
  const [interest] = useRecoilState(interestFilter);

  let result;

  if (interest) {
    result = useQuery<Pick<IQuery, "findAroundUsers">, IQueryFindAroundUsersArgs>(
      FIND_AROUND_USERS,
      {
        variables: {
          bothLocation: {
            lat1: Number(location.sw.replace(/\(|\)/g, "").split(", ")[0]),
            lng1: Number(location.sw.replace(/\(|\)/g, "").split(", ")[1]),
            lat2: Number(location.ne.replace(/\(|\)/g, "").split(", ")[0]),
            lng2: Number(location.ne.replace(/\(|\)/g, "").split(", ")[1]),
          },
          interest,
        },
      }
    );
  } else {
    result = useQuery(FIND_AROUND_USERS, {
      variables: {
        bothLocation: {
          lat1: Number(location.sw.replace(/\(|\)/g, "").split(", ")[0]),
          lng1: Number(location.sw.replace(/\(|\)/g, "").split(", ")[1]),
          lat2: Number(location.ne.replace(/\(|\)/g, "").split(", ")[0]),
          lng2: Number(location.ne.replace(/\(|\)/g, "").split(", ")[1]),
        },
      },
    });
  }
  return result;
};
