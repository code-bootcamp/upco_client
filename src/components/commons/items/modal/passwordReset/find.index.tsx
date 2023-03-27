import { gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AccountInput from "../../inputs/account/account.input.index";
import * as S from "./find.styles";

const PASSWORD_RESET_MAILER = gql`
  mutation passwordResetMailer($email: String!) {
    passwordResetMailer(email: $email)
  }
`;

export default function PasswordResetUI(props): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{
    email: string;
  }>();

  const [passwordResetMailer] = useMutation(PASSWORD_RESET_MAILER);

  const onClickClose = (): void => {
    props.setIsOpen((prev) => !prev);
  };

  const onClickPasswordReset = async (data: { email: string }): Promise<void> => {
    const result = await passwordResetMailer({
      variables: { email: data.email },
    });
  };
  return (
    <>
      <>
        <S.Background onClick={onClickClose} />
        <S.Wrapper onSubmit={handleSubmit(onClickPasswordReset)}>
          <S.Close onClick={onClickClose} />
          <img src="/images/layout/logo01.svg" />
          <S.InputBox>
            <AccountInput placeholder="이메일을 입력해주세요." register={register("email")} />
            <div>
              <p>{errors.email?.message}</p>
            </div>
          </S.InputBox>
          <button>비밀번호 찾기</button>
        </S.Wrapper>
      </>
    </>
  );
}
