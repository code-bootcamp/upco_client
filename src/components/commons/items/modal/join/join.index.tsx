import { link } from "fs/promises";
import { useEmailCode } from "../../../hooks/customs/useEmailCode";
import { useJoinMode } from "../../../hooks/customs/useJoinMode";
import { useFormJoin } from "../../../hooks/useForm/useForm.join";
import AccountInput from "../../inputs/account/account.input.index";
import EmailCodeInput from "../../inputs/email/email.input.index";
import * as S from "./join.styles";
import { IJoinUIProps } from "./join.types";

export default function JoinUI(props: IJoinUIProps): JSX.Element {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useFormJoin();

  const {
    onEmailButtonClick,
    onEmailInputChange,
    setErrors,
    errors: emailError,
    isSend,
    isVerify,
    code,
  } = useEmailCode(getValues);

  const { onClickJoin } = useJoinMode(isVerify, setErrors);

  const onClickClose = (move: string) => (): void => {
    if (move === "") {
      props.setIsJoin((prev) => !prev);
    } else if (move === "join") {
      props.setIsJoin((prev) => !prev);
      props.setIsOpen((prev) => !prev);
    }
  };

  return (
    <>
      <S.Background onClick={onClickClose("")} />
      <S.Wrapper onSubmit={handleSubmit(onClickJoin)}>
        <S.Close onClick={onClickClose("")} />
        <img src="/images/layout/logo.svg" />
        <S.InputBox>
          <AccountInput placeholder="닉네임을 입력해주세요." register={register("name")} />
          <div>
            <p>{errors.name?.message}</p>
          </div>
        </S.InputBox>
        <S.InputBox>
          <AccountInput placeholder="이메일을 입력해주세요." register={register("email")} />
          <div>
            <p>{errors.email?.message}</p>
          </div>
        </S.InputBox>
        <S.InputBox>
          <EmailCodeInput
            onChange={onEmailInputChange}
            onClick={onEmailButtonClick}
            isSend={isSend}
            isVerify={isVerify}
            code={code}
          ></EmailCodeInput>
          <div>
            <p>{emailError}</p>
          </div>
        </S.InputBox>
        <S.InputBox>
          <AccountInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            register={register("password")}
          />
          <div>
            <p>{errors.password?.message}</p>
          </div>
        </S.InputBox>
        <S.InputBox>
          <AccountInput
            type="password"
            placeholder="비밀번호를 다시 입력해주세요."
            register={register("passwordCheck")}
          />
          <div>
            <p>{errors.passwordCheck?.message}</p>
          </div>
        </S.InputBox>
        <button>회원가입</button>
        <S.JoinText>
          <p onClick={onClickClose("join")}>이미 계정이 있으신가요?</p>
        </S.JoinText>
        <S.DivideLineBox>
          <div></div>
          <span>간편 회원가입</span>
          <div></div>
        </S.DivideLineBox>
        <S.IconBox>
          <li>
            <a href="https://api.upco.space/login/google">
              <img src="/images/social/google.svg" />
            </a>
          </li>
          <li>
            <a href="https://api.upco.space/login/kakao">
              <img src="/images/social/kakao.svg" />
            </a>
          </li>
        </S.IconBox>
      </S.Wrapper>
    </>
  );
}
