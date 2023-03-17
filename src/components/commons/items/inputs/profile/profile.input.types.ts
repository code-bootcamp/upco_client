import { UseFormRegisterReturn } from "react-hook-form";

export interface IProfileInputProps {
  type?: "text" | "password";
  register?: UseFormRegisterReturn;
  defaultValue?: string;
  disabled?: boolean;
}
