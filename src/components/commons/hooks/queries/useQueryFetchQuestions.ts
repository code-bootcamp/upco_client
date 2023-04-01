import { gql, useQuery } from "@apollo/client";
import { IQuery, IQueryFetchQuestionArgs } from "../../../../commons/types/generated/types";

const FETCH_QUESTIONS = gql`
  query {
    fetchQuestions {
      id
      title
      contents
      createAt
    }
  }
`;

export const useQueryFetchQuestions = (): typeof result => {
  const result = useQuery<Pick<IQuery, "fetchQuestions">, IQueryFetchQuestionArgs>(
    FETCH_QUESTIONS,
    {
      fetchPolicy: "no-cache",
    }
  );

  return result;
};
