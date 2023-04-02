import { IUser } from "../../../../../commons/types/generated/types";
import { useBLockMode } from "../../../hooks/customs/useBlockMode";
import { useOnClickDeleteFriend } from "../../../hooks/customs/useOnClickDeleteFriend";
import { useReportMode } from "../../../hooks/customs/useReportMode";
import * as S from "./tooltip02.styles";

interface ITooltipUI02Props {
  id: string;
}

export default function TooltipUI02(props: ITooltipUI02Props): JSX.Element {
  const { onClickBlock } = useBLockMode();
  const { onClickReport } = useReportMode();
  const { onClickDeleteFriend } = useOnClickDeleteFriend();

  return (
    <>
      <S.Wrapper>
        <li>
          <button onClick={onClickDeleteFriend(props.id)}>삭제</button>
        </li>
        <li>
          <button onClick={onClickBlock}>차단</button>
        </li>
        <li>
          <button onClick={onClickBlock}>신고</button>
        </li>
        {/* <S.divideLine></S.divideLine>
        <S.RoomWrapper>
          <div onClick={onClickReport}>신고</div>
        </S.RoomWrapper> */}
      </S.Wrapper>
    </>
  );
}
