import styled from "@emotion/styled";
import QuestionDetailBody from "./body/questionDetail.body.index";
import QuestionDetailHeader from "./header/questionDetail.header";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default function QuestionDetailUI(): JSX.Element {
  return (
    <Wrapper>
      <QuestionDetailHeader />
      <QuestionDetailBody />
    </Wrapper>
  );
}
