import { UseFormRegisterReturn } from "react-hook-form";

export interface IEmailCodeInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => Promise<void>;
  isSend: boolean;
  isVerify: boolean;
  code: string;
}
