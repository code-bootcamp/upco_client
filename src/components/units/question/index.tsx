import styled from "@emotion/styled";
import QuestionBody from "./body/question.body.index";
import QuestionHeader from "./header/question.header.index";

const Wrapper = styled.div`
  /* max-width: 1200px;  */
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0 px;
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
