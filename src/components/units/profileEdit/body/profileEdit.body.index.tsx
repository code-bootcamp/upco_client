import { useState } from "react";
import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/fetchLoginUser";
import { useUpdateUserMode } from "../../../commons/hooks/customs/useUpdateUserMode";
import InterestUI from "../../../commons/items/modal/interest/interest.index";
import PasswordReset from "../../passwordReset/passwordReset.index";
import * as S from "./profileEdit.body.styles";
import SelectedAgeInput from "../../../commons/items/selected/age.index";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { fileUrl } from "../../../commons/stores";

interface Interest {
  id: string;
  name: string;
}

export default function ProfileEditBody(): JSX.Element {
  const router = useRouter();
  const { data, refetch } = useQueryFetchLoginUser();
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [interestList, setInterestList] = useState<string[]>([]);
  const [prevInterests, setPrevInterests] = useState<string[]>([]);
  const [selectedAge, setSelectedAge] = useState<number>(data?.fetchLoginUser?.age ?? 2023);
  const [imageUrl, setImageUrl] = useRecoilState(fileUrl);

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
      image: imageUrl,
      age: 2024 - selectedAge,
      interests: [...interestList],
    });
    await refetch();
  };

  const onClickCancel = async (): Promise<void> => {
    await router.push("/profile");
  };
  return (
    <>
      {isModalOpen && (
        <InterestUI
          setInterestList={setInterestList}
          setIsModalOpen={setIsModalOpen}
          setPrevInterests={setPrevInterests}
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
                {prevInterests.length > 0
                  ? prevInterests.map((interest: string) => <li key={interest}>{interest}</li>)
                  : data?.fetchLoginUser?.interests?.map((interest: Interest) => (
                      <li key={interest.id}>{interest.name}</li>
                    ))}
              </S.InterestBox>
              <S.InterestAddButton onClick={openInterestModal}>추가</S.InterestAddButton>
            </div>
          </S.DefaultBox>
        </S.Section>
        <S.BtnSection>
          <S.CancelBtn onClick={onClickCancel}>취소</S.CancelBtn>

          <S.UpdateBtn onClick={handleUpdateProfile}>수정 완료</S.UpdateBtn>
        </S.BtnSection>
      </S.Wrapper>
    </>
  );
}
