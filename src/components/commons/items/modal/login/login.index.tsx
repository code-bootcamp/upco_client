import { useState } from "react";
import { useFormLogin } from "../../../hooks/useForm/useForm.login";
import AccountInput from "../../inputs/account/account.input.index";
import JoinUI from "../join/join.index";
import * as S from "./login.styles";
import { FormValues, ILoginUIProps } from "./login.types";
import { useMutation } from "@apollo/client";
import { accessTokenState } from "../../../stores";
import { useRecoilState } from "recoil";
import gql from "graphql-tag";

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export default function LoginUI(props: ILoginUIProps): JSX.Element {
  const [isJoin, setIsJoin] = useState(false);

  const [login, { data, error }] = useMutation(LOGIN);

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormLogin();

  const onClickClose = (): void => {
    props.setIsOpen((prev) => !prev);
  };

  const onClickMovedJoin = (): void => {
    setIsJoin((prev) => !prev);
  };

  const onSubmit = async (data: FormValues): Promise<void> => {
    const { email, password } = data;
    const result = await login({ variables: { email, password } });
    const accessToken = result.data.login;

    if (accessToken === undefined) {
      alert("로그인에 실패하였습니다. 다시 시도해주세요!");
      return;
    }
    setAccessToken(accessToken);
    alert("로그인 되었습니다.");
  };

  return (
    <>
      {isJoin ? (
        <JoinUI onClickClose={onClickClose} onClickMovedJoin={onClickMovedJoin} />
      ) : (
        <>
          <S.Background onClick={onClickClose} />
          <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
            <S.Close onClick={onClickClose} />
            <img src="/images/layout/logo01.svg" />
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
            <button>로그인</button>
            <S.FindBox>
              <p>아이디 찾기</p>
              <p>비밀번호 찾기</p>
            </S.FindBox>
            <S.JoinText>
              <p onClick={onClickMovedJoin}>회원이 아니신가요?</p>
            </S.JoinText>
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
                <img src="/images/social/naver.svg" />
              </li>
              <li>
                <img src="/images/social/kakao.svg" />
              </li>
            </S.IconBox>
          </S.Wrapper>
        </>
      )}
    </>
  );
}
