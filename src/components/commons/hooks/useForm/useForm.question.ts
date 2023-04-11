import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormReturn } from "react-hook-form";
import { QuestionSchema } from "../../../../commons/libraries/vaildation/question";

export const useFormQuestion = (): UseFormReturn => {
  const result = useForm({
    resolver: yupResolver(QuestionSchema),
    mode: "onChange",
  });

  return result;
};
