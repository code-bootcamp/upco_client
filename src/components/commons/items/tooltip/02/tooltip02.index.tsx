import { gql, useMutation } from "@apollo/client";
import { useBLockMode } from "../../../hooks/customs/useBlockMode";
import { useReportMode } from "../../../hooks/customs/useReportMode";
import * as S from "./tooltip02.styles";

const UNBLOCK_OPPONENT = gql`
  mutation unblockOpponent($blockUserId: String!) {
    unblockOpponent(blockUserId: $blockUserId)
  }
`;

export default function TooltipUI02(): JSX.Element {
  const { onClickBlock } = useBLockMode();
  const { onClickReport } = useReportMode();

  return (
    <>
      <S.Wrapper>
        <S.RoomWrapper>
          <div onClick={onClickBlock}>차단하기</div>
        </S.RoomWrapper>
        <S.divideLine></S.divideLine>
        <S.RoomWrapper>
          <div onClick={onClickReport}>신고하기</div>
        </S.RoomWrapper>
      </S.Wrapper>
    </>
  );
}
