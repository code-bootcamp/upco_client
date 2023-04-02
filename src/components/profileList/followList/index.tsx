import { useOnClickDeleteFriend } from "../../commons/hooks/customs/useOnClickDeleteFriend";
import { useQueryFetchFriends } from "../../commons/hooks/queries/useQueryFetchFriends";
import * as S from "./styles";

export default function ProfileFollowListUI(): JSX.Element {
  const { data } = useQueryFetchFriends();
  const { onClickDeleteFriend } = useOnClickDeleteFriend();

  return (
    <>
      <S.Wrapper>
        {data?.fetchFriends.length !== 0 ? (
          <>
            {data?.fetchFriends.map((el) => (
              <li key={el.id} id={el.id}>
                <S.ImgBox>{el.image ? <img src={el.image} /> : <S.UserIcon />}</S.ImgBox>
                <S.Name>{el.nickname}</S.Name>
                <S.DeleteFollow onClick={onClickDeleteFriend(el.id)}>친구삭제</S.DeleteFollow>
              </li>
            ))}
          </>
        ) : (
          <S.FollowListNoneBox>
            <S.followList>
              <h4>친구목록이 비어있습니다.</h4>
            </S.followList>
          </S.FollowListNoneBox>
        )}
      </S.Wrapper>
    </>
  );
}
