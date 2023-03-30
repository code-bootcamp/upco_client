import QuestionListBody from "./body/questionList.body.index";
import QuestionListHeader from "./header/questionList.header.index";

export default function QuestionListUI(): JSX.Element {
  return (
    <>
      <QuestionListHeader />
      <QuestionListBody />
    </>
  );
}
