import { useOnClickUnblockUser } from "../../commons/hooks/customs/useOnClickUnblockUser";
import { useQueryFetchBlockUsers } from "../../commons/hooks/queries/useQueryFetchBlockUsers";
import * as S from "./styles";

export default function ProfileBlockListUI(): JSX.Element {
  const { data } = useQueryFetchBlockUsers();
  const { onClickUnblockUser } = useOnClickUnblockUser();

  return (
    <>
      <S.Wrapper>
        {data?.fetchBlockUsers.length !== 0 ? (
          <>
            {data?.fetchBlockUsers.map((el) => (
              <li key={el.id} id={el.id}>
                <S.ImgBox>
                  {el.blocked_user.image ? <img src={el.blocked_user.image} /> : <S.UserIcon />}
                </S.ImgBox>
                <S.Name>최현규</S.Name>
                <S.DeleteFollow onClick={onClickUnblockUser(el.id)}>차단해제</S.DeleteFollow>
              </li>
            ))}
          </>
        ) : (
          <S.BlockListNoneBox>
            <S.BlockList>
              <h4>차단한 유저가 없습니다.</h4>
            </S.BlockList>
          </S.BlockListNoneBox>
        )}
      </S.Wrapper>
    </>
  );
}
