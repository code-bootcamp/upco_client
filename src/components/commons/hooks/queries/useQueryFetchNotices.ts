import { gql, useQuery } from "@apollo/client";
import { INotice, IQuery } from "../../../../commons/types/generated/types";

const FETCH_NOTICES = gql`
  query {
    fetchNotices {
      number
      title
      contents
    }
  }
`;

export const useQueryFetchNotices = (): typeof result => {
  const result = useQuery<Pick<IQuery, "fetchNotices">, INotice>(FETCH_NOTICES, {
    fetchPolicy: "no-cache",
  });

  return result;
};
