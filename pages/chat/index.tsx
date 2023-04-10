import { useAuth } from "../../src/components/commons/hooks/customs/useAuth";
import TextChat from "../../src/components/units/textChat";

export default function TextChatPage(): JSX.Element {
  useAuth();

  return <TextChat />;
}
