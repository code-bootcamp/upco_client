import { useState } from "react";
import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/fetchLoginUser";
import PasswordResetUI from "../../../commons/items/modal/passwordReset/find.index";
import * as S from "./profileEdit.body.styles";

export default function ProfileEditBody(): JSX.Element {
  const { data } = useQueryFetchLoginUser();

  const [isOpen, setIsOpen] = useState(false);

  console.log(data);

  const openPasswordReset = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isOpen && <PasswordResetUI setIsOpen={setIsOpen}></PasswordResetUI>}
      <S.Wrapper>
        <S.Title>프로필 정보</S.Title>
        <S.Section>
          <S.SectionTitle>닉네임</S.SectionTitle>
          <S.DefaultBox>문성진</S.DefaultBox>
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
            <div>
              <span>*********</span>
              <button onClick={openPasswordReset}>변경</button>
            </div>
          </S.DefaultBox>
        </S.Section>
        <S.Section>
          <S.SectionTitle>관심사</S.SectionTitle>
          <S.DefaultBox>
            <div>
              <S.InterestBox>
                <li>스쿠버다이빙</li>
                <li>축구</li>
                <li>스쿠버다이빙</li>
                <li>스쿠버다이빙</li>
                <li>축구</li>
                <li>스쿠버다이빙</li>
                <li>스쿠버다이빙</li>
                <li>스쿠버다이빙</li>
              </S.InterestBox>
              <S.InterestAddButton>추가</S.InterestAddButton>
            </div>
          </S.DefaultBox>
        </S.Section>
      </S.Wrapper>
    </>
  );
}
