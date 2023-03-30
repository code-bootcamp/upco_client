import ProfileButtonBasic from "../../../commons/buttons/profileButtonBasic";
import { useCreateQuestion } from "../../../commons/hooks/customs/useCreateQuestion";
import { useFormCounsel } from "../../../commons/hooks/useForm/useForm.counsel";
import * as S from "./question.body.styles";

export default function QuestionBody(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormCounsel();

  const { onClickCreateQuestion } = useCreateQuestion();

  return (
    <S.Wrapper onSubmit={handleSubmit(onClickCreateQuestion)}>
      <S.BodyRow>
        <S.Label>이메일</S.Label>
        <S.CounselEmail>eggmun98@gmail.com</S.CounselEmail>
      </S.BodyRow>
      <S.BodyRow>
        <S.Label>문의 제목</S.Label>
        <S.CounselTitle type="text" {...register("title")} />
      </S.BodyRow>
      <S.BodyRow>
        <S.Label>문의 내용</S.Label>
        <S.CounselContents {...register("contents")} />
      </S.BodyRow>
      <ProfileButtonBasic title="문의하기" />
    </S.Wrapper>
  );
}
