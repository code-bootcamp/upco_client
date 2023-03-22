import { useFormJoin } from "../../../hooks/useForm/useForm.join";
import AccountInput from "../../inputs/account/account.input.index";
import * as S from "./join.styles";
import { IJoinUIProps } from "./join.types";

export default function JoinUI(props: IJoinUIProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormJoin();

  return (
    <>
      <S.Background onClick={props.onClickClose} />
      <S.Wrapper>
        <S.Close onClick={props.onClickClose} />
        <img src="/images/layout/logo01.svg" />
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
          <p onClick={props.onClickMoved}>이미 계정이 있으신가요?</p>
        </S.JoinText>
        <S.DivideLineBox>
          <div></div>
          <span>간편 회원가입</span>
          <div></div>
        </S.DivideLineBox>
        <S.IconBox>
          <li>
            <img src="/images/social/google.svg" />
          </li>
          <li>
            <img src="/images/social/kakao.svg" />
          </li>
        </S.IconBox>
      </S.Wrapper>
    </>
  );
}
