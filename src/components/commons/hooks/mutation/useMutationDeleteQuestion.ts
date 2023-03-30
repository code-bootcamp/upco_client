import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationDeleteQuestionArgs } from "../../../../commons/types/generated/types";

const DELETE_QUESTION = gql`
  mutation deleteQuestion($questionId: String!) {
    deleteQuestion(questionId: $questionId)
  }
`;

export const useMutationDeleteQuestion = (): [typeof deleteQuestion] => {
  const [deleteQuestion] = useMutation<
    Pick<IMutation, "deleteQuestion">,
    IMutationDeleteQuestionArgs
  >(DELETE_QUESTION);

  return [deleteQuestion];
};
