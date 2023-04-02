import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchUserArgs } from "../../../../commons/types/generated/types";

const FETCH_USER = gql`
  query fetchUser($id: String!) {
    fetchUser(id: $id) {
      nickname
      age
      interests {
        name
      }
    }
  }
`;

export const useQueryFetchUser = (): typeof result => {
  const anotherIds = JSON.parse(localStorage.getItem("anotherIds"));
  const ids = anotherIds.map((item) => item.anotherId);

  const result = useQuery<Pick<IQuery, "fetchUser">, IQueryFetchUserArgs>(FETCH_USER, {
    variables: { id: ids.join(",") },
  });
  return result;
};
