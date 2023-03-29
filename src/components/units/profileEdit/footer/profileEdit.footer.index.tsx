import { useUpdateUserMode } from "../../../commons/hooks/customs/useUpdateUserMode";
import * as S from "./profileEdit.footer.styles";

export default function ProfileEditFooter(): JSX.Element {
  const onClickUpdate = useUpdateUserMode();
  return <S.UpdateBtn onClick={onClickUpdate}>수정 완료</S.UpdateBtn>;
}
