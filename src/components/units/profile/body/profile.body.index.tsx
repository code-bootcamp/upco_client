import Link from "next/link";
import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/fetchLoginUser";
import * as S from "./profile.body.styles";

export default function ProfileBody(): JSX.Element {
  const { data } = useQueryFetchLoginUser();

  return (
    <>
      <S.Wrapper>
        {/* 프로필 */}
        <S.ProfileLeft>
          <S.UserIconBox>
            <img />
          </S.UserIconBox>
          <ul>
            <li>
              <S.Name>{data?.fetchLoginUser?.nickname}</S.Name>
              <S.Age>{data?.fetchLoginUser?.age}세</S.Age>
            </li>
            <li>
              <S.Email>{data?.fetchLoginUser?.email}</S.Email>
            </li>
            {data?.fetchLoginUser?.interests?.map((interests) => (
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
