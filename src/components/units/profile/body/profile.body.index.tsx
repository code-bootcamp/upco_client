import Link from "next/link";
import * as S from "./profile.body.styles";

export default function ProfileBody(): JSX.Element {
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
              <S.Name>문성진</S.Name>
              <S.Age>20대중반</S.Age>
            </li>
            <li>
              <S.Email>eggmun98@naver.com</S.Email>
            </li>
            <li>
              <S.Interest>축구</S.Interest>
              <S.Interest>축구</S.Interest>
              <S.Interest>축구</S.Interest>
              <S.Interest>축구</S.Interest>
              <S.Interest>축구</S.Interest>
              <S.Interest>축구</S.Interest>
              <S.Interest>축구</S.Interest>
              <S.Interest>축구</S.Interest>
              <S.Interest>축구</S.Interest>
            </li>
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
