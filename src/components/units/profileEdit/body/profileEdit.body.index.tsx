import * as S from "./profileEdit.body.styles";

export default function ProfileEditBody(): JSX.Element {
  const openPasswordReset = (): void => {
    window.open("/passwordReset", "_blank", "width=800px ,height=600px");
  };

  return (
    <S.Wrapper>
      <S.Title>프로필 정보</S.Title>
      <S.DivideLine />
      <S.Section>
        <S.SectionTitle>닉네임</S.SectionTitle>
        <S.DefaultBox>
          <span>문성진</span>
        </S.DefaultBox>
      </S.Section>
      <S.Section>
        <S.SectionTitle>이메일</S.SectionTitle>
        <S.DefaultBox>
          <span>anstjdwls@naver.com</span>
        </S.DefaultBox>
      </S.Section>
      <S.Section>
        <S.SectionTitle>비밀번호</S.SectionTitle>
        <S.DefaultBox>
          <span>*********</span>
          <button onClick={openPasswordReset}>변경</button>
        </S.DefaultBox>
      </S.Section>
      <S.Section>
        <S.SectionTitle>관심사</S.SectionTitle>
        <S.DefaultBox>
          <S.InterestBox>
            <li>스쿠버다이빙</li>
            <li>축구</li>
            <li>스쿠버다이빙</li>
            <li>스쿠버다이빙</li>
            <li>스쿠버다이빙</li>
          </S.InterestBox>
          <button>변경</button>
        </S.DefaultBox>
      </S.Section>
    </S.Wrapper>
  );
}
