import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, UseFormReturn } from "react-hook-form";
import { LoginSchema } from "../../../../commons/libraries/vaildation/login";

export const useFormLogin = (): UseFormReturn => {
  const result = useForm({
    resolver: yupResolver(LoginSchema),
    mode: "onChange",
  });

  return result;
};
