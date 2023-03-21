import * as S from "./passwordReset.styles";

export default function PasswordReset(): JSX.Element {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>비밀번호 변경</S.Title>
        <S.Input type="password" placeholder="현재 비밀번호 입력" />
        <S.Input type="password" placeholder="새 비밀번호" />
        <S.Input type="password" placeholder="새 비밀번호 확인" />
        <S.Button>변경하기</S.Button>
      </S.Container>
    </S.Wrapper>
  );
}
