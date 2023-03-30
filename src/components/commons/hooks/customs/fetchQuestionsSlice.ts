import { IQuestion } from "../../../../commons/types/generated/types";
import { useQueryFetchQuestions } from "../queries/useQueryFetchQuestions";

export const FetchQuestionsSlice = (): IQuestion[][] | undefined => {
  const { data } = useQueryFetchQuestions();

  const fetchQuestions = [];

  if (data === undefined) {
    return;
  }
  for (let i = 0; i < data.fetchQuestions.length; i = i + 10) {
    fetchQuestions.push(data.fetchQuestions.slice(i, i + 10));
  }
  return fetchQuestions;
};
