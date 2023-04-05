import Link from "next/link";
import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/fetchLoginUser";
import * as S from "./profile.body.styles";

export default function ProfileBody(): JSX.Element {
  const data = useQueryFetchLoginUser();
  return (
    <>
      <S.Wrapper>
        <S.ProfileLeft>
          <S.UserIconBox>
            <img
              src={`https://storage.cloud.google.com/upco-bucket/${data?.data?.fetchLoginUser?.image}`}
            ></img>
          </S.UserIconBox>
          <ul>
            <li>
              <S.Name>{data?.data?.fetchLoginUser?.nickname}</S.Name>
              <S.Age>{data?.data?.fetchLoginUser?.age}세</S.Age>
            </li>
            <li>
              <S.Email>{data?.data?.fetchLoginUser?.email}</S.Email>
            </li>
            {data?.data?.fetchLoginUser?.interests?.map((interests) => (
              <li key={interests.id}>{interests.name}</li>
            ))}
          </ul>
        </S.ProfileLeft>
        <S.ProfileRight>
          <div>
            <Link href="/profile/profileEdit">
              <a>
                <p>프로필 수정</p>
              </a>
            </Link>
          </div>
        </S.ProfileRight>
      </S.Wrapper>
    </>
  );
}
