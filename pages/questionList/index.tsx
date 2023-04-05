import { useAuth } from "../../src/components/commons/hooks/customs/useAuth";
import QuestionListUI from "../../src/components/units/questionList";

export default function QuestionListPage(): JSX.Element {
  useAuth();

  return <QuestionListUI />;
}
