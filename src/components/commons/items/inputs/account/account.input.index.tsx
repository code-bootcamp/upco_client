import * as S from "./account.input.styles";
import { IAccountInputProps } from "./account.input.types";

export default function AccountInput(props: IAccountInputProps): JSX.Element {
  return <S.Input type={props.type} placeholder={props.placeholder} {...props.register} />;
}
