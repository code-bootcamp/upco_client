import { gql, useMutation } from "@apollo/client";
import { IMutation, IMutationCreateQuestionArgs } from "../../../../commons/types/generated/types";

const CREATE_QUESTION = gql`
  mutation createQuestion($createQuestionInput: CreateQuestionInput!) {
    createQuestion(createQuestionInput: $createQuestionInput) {
      id
      title
      contents
    }
  }
`;

export const useMutationCreateQuestion = (): [typeof createQuestion] => {
  const [createQuestion] = useMutation<
    Pick<IMutation, "createQuestion">,
    IMutationCreateQuestionArgs
  >(CREATE_QUESTION);

  return [createQuestion];
};
