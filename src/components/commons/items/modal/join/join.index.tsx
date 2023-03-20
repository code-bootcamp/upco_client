import AccountInput from "../../inputs/account/account.input.index";
import * as S from "./join.styles";
import { IJoinUIProps } from "./join.types";

export default function JoinUI(props: IJoinUIProps): JSX.Element {
  return (
    <>
      <S.Background onClick={props.onClickClose} />
      <S.Wrapper>
        <S.Close onClick={props.onClickClose} />
        <img src="/images/layout/logo.svg" />
        <S.InputBox>
          <AccountInput placeholder="이메일을 입력해주세요." />
          <div>
            <p>에러메세지</p>
          </div>
        </S.InputBox>
        <S.InputBox>
          <AccountInput type="password" placeholder="비밀번호를 입력해주세요." />
          <div>
            <p>에러메세지</p>
          </div>
        </S.InputBox>
        <S.InputBox>
          <AccountInput type="password" placeholder="비밀번호를 다시 입력해주세요." />
          <div>
            <p>에러메세지</p>
          </div>
        </S.InputBox>
        <button>회원가입</button>
        <S.JoinText>
          <p onClick={props.onClickMovedJoin}>이미 계정이 있으신가요?</p>
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
            <img src="/images/social/naver.svg" />
          </li>
          <li>
            <img src="/images/social/kakao.svg" />
          </li>
        </S.IconBox>
      </S.Wrapper>
    </>
  );
}
