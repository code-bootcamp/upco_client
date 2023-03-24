import * as S from "./profile.input.styles";
import { IProfileInputProps } from "./profile.input.types";

export default function ProfileInput(props: IProfileInputProps): JSX.Element {
  return (
    <S.Input
      type={props.type}
      defaultValue={props.defaultValue ?? ""}
      disabled={props.disabled ?? false}
      {...props.register}
    />
  );
}
