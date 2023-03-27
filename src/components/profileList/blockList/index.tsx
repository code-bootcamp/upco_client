import { useUnblockMode } from "../../commons/hooks/customs/useUnblockMode";
import { useQueryBlockAll } from "../../commons/hooks/queries/useQueryBlockAll";
import * as S from "./styles";

export default function ProfileBlockListUI(): JSX.Element {
  const { unblockFn } = useUnblockMode();
  const { data } = useQueryBlockAll();

  return (
    <>
      <S.Wrapper>
        <li>
          <S.ImgBox>
            <img src="/images/layout/logo.svg" />
          </S.ImgBox>
          <S.Name>최현규</S.Name>
          <S.DeleteFollow onClick={unblockFn}>차단해제</S.DeleteFollow>
        </li>

        <S.BlockListNoneBox>
          <S.BlockList>
            <h4>차단한 유저가 없습니다.</h4>
          </S.BlockList>
        </S.BlockListNoneBox>
      </S.Wrapper>
    </>
  );
}
