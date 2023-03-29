import * as S from "./email.input.styles";
import { IEmailCodeInputProps } from "./email.input.types";

export default function EmailCodeInput(props: IEmailCodeInputProps): JSX.Element {
  return (
    <>
      <S.Input
        onChange={props.onChange}
        placeholder={props.isSend ? "코드를 입력해주세요" : "이메일을 인증해주세요"}
        disabled={props.isVerify}
        value={props.code}
      />
      {!props.isVerify && (
        <S.Button onClick={props.onClick} type="button">
          {props.isSend ? "코드 확인" : "이메일 인증"}
        </S.Button>
      )}
    </>
  );
}
