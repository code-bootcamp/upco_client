import styled from "@emotion/styled";
import QuestionBody from "./body/question.body.index";
import QuestionHeader from "./header/question.header.index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function QuestionUI(): JSX.Element {
  return (
    <>
      <Wrapper>
        <QuestionHeader />
        <QuestionBody />
      </Wrapper>
    </>
  );
}
