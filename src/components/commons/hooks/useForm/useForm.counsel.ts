import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormReturn } from "react-hook-form";
import { CounselSchema } from "../../../../commons/libraries/vaildation/counsel";

export const useFormCounsel = (): UseFormReturn => {
  const result = useForm({
    resolver: yupResolver(CounselSchema),
    mode: "onChange",
  });

  return result;
};
