import ProfileButtonBasic from "../../../commons/buttons/profileButtonBasic";
import { useCreateQuestion } from "../../../commons/hooks/customs/useCreateQuestion";
import { useQueryFetchLoginUser } from "../../../commons/hooks/queries/fetchLoginUser";
import { useFormQuestion } from "../../../commons/hooks/useForm/useForm.question";
import * as S from "./question.body.styles";

export default function QuestionBody(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormQuestion();

  const { data } = useQueryFetchLoginUser();

  const { onClickCreateQuestion } = useCreateQuestion();

  return (
    <>
      <S.Wrapper onSubmit={handleSubmit(onClickCreateQuestion)}>
        <S.BodyRow>
          <li>
            <S.LabelBox>
              <S.Label>이메일</S.Label>
              <S.CounselEmail>{data?.fetchLoginUser.email}</S.CounselEmail>
            </S.LabelBox>
          </li>
          <li>
            <S.LabelBox>
              <S.Label>문의 제목</S.Label>
              <S.CounselTitle type="text" {...register("title")} />
            </S.LabelBox>
            <S.ErrorMessageBox>
              <S.ErrorMessage>{errors.title?.message}</S.ErrorMessage>
            </S.ErrorMessageBox>
          </li>
          <li>
            <S.LabelBox>
              <S.Label>문의 내용</S.Label>
              <S.CounselContents {...register("contents")} />
            </S.LabelBox>
            <S.ErrorMessage>{errors.contents?.message}</S.ErrorMessage>
          </li>
        </S.BodyRow>
        <S.ButtonBox>
          <ProfileButtonBasic title="문의하기" />
        </S.ButtonBox>
      </S.Wrapper>
    </>
  );
}
