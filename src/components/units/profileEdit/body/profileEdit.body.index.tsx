import { useState } from "react";
import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/fetchLoginUser";
import { useUpdateUserMode } from "../../../commons/hooks/customs/useUpdateUserMode";
import InterestUI from "../../../commons/items/modal/interest/interest.index";
import PasswordReset from "../../passwordReset/passwordReset.index";
import * as S from "./profileEdit.body.styles";
import SelectedAgeInput from "../../../commons/items/selected/age.index";

export default function ProfileEditBody(): JSX.Element {
  const { data } = useQueryFetchLoginUser();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [interestList, setInterestList] = useState<string[]>([]);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [selectedAge, setSelectedAge] = useState<number>(data?.fetchLoginUser?.age ?? 2023);

  const { onClickUpdate } = useUpdateUserMode();
  const openPasswordReset = (): void => {
    setIsOpen((prev) => !prev);
  };
  const openInterestModal = (): void => {
    setIsModalOpen((prev) => !prev);
  };

  const handleUpdateProfile = async (): Promise<void> => {
    await onClickUpdate({
      nickname: data?.fetchLoginUser?.nickname,
      age: 2023 - selectedAge + 1,
      interests: [...interestList],
    });
  };
  console.log(data?.fetchLoginUser.interests);

  return (
    <>
      {isModalOpen && (
        <InterestUI
          setInterestList={setInterestList}
          setIsModalOpen={setIsModalOpen}
          selectedInterests={selectedInterests}
        />
      )}
      {isOpen && <PasswordReset setIsOpen={setIsOpen}></PasswordReset>}
      <S.Wrapper>
        <S.Title>프로필 정보</S.Title>
        <S.Section>
          <S.SectionTitle>닉네임</S.SectionTitle>
          <S.DefaultBox>{data?.fetchLoginUser?.nickname}</S.DefaultBox>
        </S.Section>
        <S.Section>
          <S.SectionTitle>이메일</S.SectionTitle>
          <S.DefaultBox>
            <span>{data?.fetchLoginUser?.email}</span>
          </S.DefaultBox>
        </S.Section>
        <S.Section>
          <S.DefaultBox>
            <S.SectionTitle>출생년도</S.SectionTitle>
            <SelectedAgeInput selectedAge={selectedAge} setSelectedAge={setSelectedAge} />
          </S.DefaultBox>
        </S.Section>
        <S.Section>
          <S.SectionTitle>비밀번호</S.SectionTitle>
          <S.DefaultBox>
            <div>
              <button onClick={openPasswordReset}>변경</button>
            </div>
          </S.DefaultBox>
        </S.Section>
        <S.Section>
          <S.SectionTitle>관심사</S.SectionTitle>
          <S.DefaultBox>
            <div>
              <S.InterestBox>
                {data?.fetchLoginUser?.interests?.map((interests) => (
                  <li key={interests.id}>{interests.name}</li>
                ))}
              </S.InterestBox>
              <S.InterestAddButton onClick={openInterestModal}>추가</S.InterestAddButton>
            </div>
          </S.DefaultBox>
        </S.Section>
        <S.UpdateBtn onClick={handleUpdateProfile}>수정 완료</S.UpdateBtn>
      </S.Wrapper>
    </>
  );
}
