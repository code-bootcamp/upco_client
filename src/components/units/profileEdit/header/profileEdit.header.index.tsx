import { ChangeEvent, useRef, useState } from "react";
import { useMutationUploadFile } from "../../../commons/hooks/mutation/useMutationUploadFile";
import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/fetchLoginUser";
import * as S from "./profileEdit.header.styles";

export default function ProfileEditHeader(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  const fileRef = useRef();
  const [uploadFile] = useMutationUploadFile();

  const data = useQueryFetchLoginUser();

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0];
    // if (!file) return;
    const result = await uploadFile({ variables: { file } });
    setImageUrl(result.data?.uploadFile.url ?? "");
  };
  const onClickImage = (): void => {
    // document.getElementById("파일태그ID")?.click();
    fileRef?.current?.click();
  };
  return (
    <>
      <S.Wrapper>
        <S.ProfileLeft>
          <S.UserIconBox>
            <S.UserIcon></S.UserIcon>
          </S.UserIconBox>
          {/* <img src={` https://storage.cloud.google.com/upco-bucket/${imageUrl}`}></img>  */}
          <div>
            <S.Name>{data?.data?.fetchLoginUser.nickname}</S.Name>
            <S.EditImage onClick={onClickImage}>이미지 수정</S.EditImage>
            <input style={{ display: "none" }} type="file" onChange={onChangeFile} ref={fileRef} />
          </div>
        </S.ProfileLeft>
        <S.ProfileRight>
          <S.Quit>회원탈퇴</S.Quit>
          <S.CreateId>계정 생성일: {data?.data?.fetchLoginUser.createAt.slice(0, 10)}</S.CreateId>
        </S.ProfileRight>
      </S.Wrapper>
    </>
  );
}
