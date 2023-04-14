import { useForm } from "react-hook-form";
import * as S from "./passwordReset.styles";
import { IPasswordReset } from "./passwordReset.types";

export default function PasswordReset(props: IPasswordReset): JSX.Element {
  const {
    formState: { errors },
  } = useForm<{
    email: string;
  }>();

  const onClickClose = (): void => {
    props.setIsOpen(false);
  };

  return (
    <>
      <S.Background onClick={onClickClose}></S.Background>
      <S.Wrapper>
        <S.Close onClick={onClickClose} />
        <div>na</div>
        <S.Container>
          <S.Title>비밀번호 변경</S.Title>
          <S.Input type="password" placeholder="현재 비밀번호 입력" />
          <S.Input type="password" placeholder="새 비밀번호" />
          <S.Input type="password" placeholder="새 비밀번호 확인" />
          <S.Button onClick={onClickClose}>변경하기</S.Button>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
