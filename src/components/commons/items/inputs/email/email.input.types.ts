export interface IEmailCodeInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: () => Promise<void>;
  isSend: boolean;
  isVerify: boolean;
  code: string;
}
