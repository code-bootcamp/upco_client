import { useRouter } from "next/router";
import { useMutationDeleteQuestion } from "../mutation/useMutationDeleteQuestion";

interface IUseOnClickDeleteQuestion {
  onClickDeleteQuestion: () => Promise<void>;
}

export const useOnClickDeleteQuestion = (): IUseOnClickDeleteQuestion => {
  const router = useRouter();

  const [deleteQuestion] = useMutationDeleteQuestion();

  const onClickDeleteQuestion = async (): Promise<void> => {
    await deleteQuestion({
      variables: {
        questionId: String(router.query.questionId),
      },
    });
    void router.push("/questionList");
  };

  return { onClickDeleteQuestion };
};
