import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";
import QuestionDetailUI from "../../../src/components/units/questionDetail";

export default function QuestionDetailPage(): JSX.Element {
  useAuth();

  return <QuestionDetailUI />;
}
