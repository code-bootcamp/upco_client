import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormReturn } from "react-hook-form";
import { JoinSchema } from "../../../../commons/libraries/vaildation/join";

export const useFormJoin = (): UseFormReturn => {
  const result = useForm({
    resolver: yupResolver(JoinSchema),
    mode: "onChange",
  });

  return result;
};
