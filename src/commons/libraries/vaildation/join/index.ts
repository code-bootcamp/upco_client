import * as yup from "yup";

export const JoinSchema = yup.object({
  name: yup.string().required("닉네임을 입력해주세요."),
  email: yup.string().email("이메일 형식이 아닙니다.").required("이메일을 입력해 주세요."),
  password: yup
    .string()
    .required("영문+숫자 조합 8~16자리를 입력해주세요.")
    .matches(
      /^[a-zA-Z](?=.*[a-zA-Z])(?=.*[0-9]).{7,15}$/,
      "영문+숫자 포함 8~16자리를 입력해주세요."
    ),
  passwordCheck: yup
    .string()
    .required("영문+숫자 포함 8~16자리를 입력해주세요.")
    .matches(
      /^[a-zA-Z](?=.*[a-zA-Z])(?=.*[0-9]).{7,15}$/,
      "영문+숫자 조합 8~16자리를 입력해주세요."
    )
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
});
