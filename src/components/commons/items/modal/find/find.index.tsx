import { useForm } from "react-hook-form";
import { usePasswordMailerMode } from "../../../hooks/customs/usePasswordMailerMode";
import { useFormLogin } from "../../../hooks/useForm/useForm.login";
import AccountInput from "../../inputs/account/account.input.index";
import * as S from "./find.styles";
import { ILoginUIProps } from "./find.types";

interface IData {
  email: string;
}

export default function FindUI(props: ILoginUIProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>();

  const { usePasswordMaier } = usePasswordMailerMode();

  return (
    <>
      <>
        <S.Background onClick={props.onClickClose} />
        <S.Wrapper onSubmit={handleSubmit(usePasswordMaier)}>
          <S.Close onClick={props.onClickClose} />
          <img src="/images/layout/logo01.svg" />
          <S.InputBox>
            <AccountInput placeholder="이메일을 입력해주세요." register={register("email")} />
            <div>
              <p>{errors.email?.message}</p>
            </div>
          </S.InputBox>

          <button>비밀번호 찾기</button>

          <S.FindText>
            <p onClick={props.onClickMoved}>로그인 하러가기</p>
          </S.FindText>

          <S.DivideLineBox>
            <div></div>
            <span>간편 로그인</span>
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
    </>
  );
}
