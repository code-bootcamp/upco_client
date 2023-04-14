import { useBLockMode } from "../../../hooks/customs/useBlockMode";
import { useOnClickBlockUser } from "../../../hooks/customs/useOnClickBlockUser";
import { useOnClickDeleteFriend } from "../../../hooks/customs/useOnClickDeleteFriend";
import * as S from "./tooltip02.styles";

interface ITooltipUI02Props {
  id: string;
}

export default function TooltipUI02(props: ITooltipUI02Props): JSX.Element {
  const { onClickBlock } = useBLockMode();
  const { onClickDeleteFriend } = useOnClickDeleteFriend();
  const { onClickBlockUser } = useOnClickBlockUser();

  return (
    <>
      <S.Wrapper>
        <li>
          <button onClick={onClickDeleteFriend(props.id)}>삭제</button>
        </li>
        <li>
          <button onClick={onClickBlockUser(props.id)}>차단</button>
        </li>
      </S.Wrapper>
    </>
  );
}
