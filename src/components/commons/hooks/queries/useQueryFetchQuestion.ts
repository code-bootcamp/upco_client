import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { IQuery, IQueryFetchQuestionArgs } from "../../../../commons/types/generated/types";

const FETCH_QUESTION = gql`
  query fetchQuestion($questionId: String!) {
    fetchQuestion(questionId: $questionId) {
      id
      title
      contents
      createAt
    }
  }
`;

export const useQueryFetchQuestion = (): typeof result => {
  const router = useRouter();

  const result = useQuery<Pick<IQuery, "fetchQuestion">, IQueryFetchQuestionArgs>(FETCH_QUESTION, {
    variables: {
      questionId: String(router.query.questionId),
    },
  });

  return result;
};
