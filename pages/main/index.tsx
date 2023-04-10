import { useAuth } from "../../src/components/commons/hooks/customs/useAuth";
import MainUI from "../../src/components/units/main/index";

export default function MainPage(): JSX.Element {
  useAuth();

  return <MainUI />;
}
