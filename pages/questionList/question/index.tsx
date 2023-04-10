import { useAuth } from "../../../src/components/commons/hooks/customs/useAuth";
import QuestionUI from "../../../src/components/units/question";

export default function QuestionPage(): JSX.Element {
  useAuth();

  return <QuestionUI />;
}
