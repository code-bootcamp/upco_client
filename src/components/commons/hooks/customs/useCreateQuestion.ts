import { useRouter } from "next/router";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useMutationCreateQuestion } from "../mutation/useMutationCreateQuestion";

interface IUseCreateQuestion {
  onClickCreateQuestion: SubmitHandler<FieldValues>;
}

export const useCreateQuestion = (): IUseCreateQuestion => {
  const router = useRouter();

  const [createQuestion] = useMutationCreateQuestion();

  const onClickCreateQuestion: SubmitHandler<FieldValues> = async (data): Promise<void> => {
    try {
      await createQuestion({
        variables: {
          createQuestionInput: {
            title: data.title,
            contents: data.contents,
          },
        },
      });
      void router.push("/questionList");
    } catch (error) {
      alert(error);
    }
  };

  return { onClickCreateQuestion };
};
