import { FieldValues, SubmitHandler } from "react-hook-form";
import { useMutationCreateQuestion } from "../mutation/useMutationCreateQuestion";

interface IUseCreateQuestion {
  onClickCreateQuestion: SubmitHandler<FieldValues>;
}

export const useCreateQuestion = (): IUseCreateQuestion => {
  const [createQuestion] = useMutationCreateQuestion();

  const onClickCreateQuestion: SubmitHandler<FieldValues> = async (data) => {
    try {
      const result = await createQuestion({
        variables: {
          createQuestionInput: {
            title: data.title,
            contents: data.contents,
          },
        },
      });
      console.log(result);
    } catch (error) {
      alert(error);
    }
  };

  return { onClickCreateQuestion };
};
