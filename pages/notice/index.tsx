import { useAuth } from "../../src/components/commons/hooks/customs/useAuth";
import NoticeUI from "../../src/components/units/notice";

export default function NoticePage(): JSX.Element {
  useAuth();

  return <NoticeUI />;
}
