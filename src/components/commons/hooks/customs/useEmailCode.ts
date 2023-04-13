import { Dispatch, SetStateAction, useState } from "react";
import { FieldValues, UseFormGetValues } from "react-hook-form";
import { object, string } from "yup";
import { useMutationSendMailForVerification } from "../mutation/useMutationSendMailForVerification";
import { useMutationVerifyEmail } from "../mutation/useMutationVerifyEmail";

export const useEmailCode = (
  getValues: UseFormGetValues<FieldValues>
): {
  onEmailInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onEmailButtonClick: () => Promise<void>;
  isSend: boolean;
  isVerify: boolean;
  errors: string;
  setErrors: Dispatch<SetStateAction<string>>;
  code: string;
} => {
  const [code, setCode] = useState<string>("");
  const [errors, setErrors] = useState<string>("");
  const [isSend, setIsSend] = useState<boolean>(false);
  const [isVerify, setIsVerify] = useState<boolean>(false);
  const [sendMail] = useMutationSendMailForVerification();
  const [verifyEmail] = useMutationVerifyEmail();
  const onEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCode(e.target.value);
    setErrors("");
  };
  const onEmailButtonClick = async (): Promise<void> => {
    if (isSend) {
      const result = await verifyEmail({
        variables: {
          email: getValues("email"),
          code,
        },
      });
      if (result?.data?.verifyEmail) {
        setIsVerify(true);
        setCode("인증이 완료되었습니다.");
      } else {
        setErrors("인증코드가 맞지 않습니다");
      }
    } else {
      try {
        await object({ email: string().required().email() }).validate({
          email: getValues("email"),
        });
      } catch (error: any) {
        if (error.message === "email must be a valid email") {
          setErrors("이메일 형식이 아닙니다.");
        } else {
          setErrors("이메일을 입력해 주세요.");
        }
        return;
      }
      setIsSend((prev) => !prev);
      try {
        await sendMail({
          variables: {
            email: getValues("email"),
          },
        });
      } catch (error) {
        setErrors("잠시 후 다시 시도해 주세요");
        setIsSend((prev) => !prev);
        return;
      }
      setErrors("");
    }
  };
  return {
    onEmailInputChange,
    onEmailButtonClick,
    isSend,
    errors,
    setErrors,
    isVerify,
    code,
  };
};
