import { UseFormRegisterReturn } from "react-hook-form";

export interface IAccountInputProps {
  type?: "text" | "password";
  placeholder: string;
  register?: UseFormRegisterReturn;
}
