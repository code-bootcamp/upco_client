import NoticeDetailBody from "./body/notice.body.index";
import NoticeDetailHeader from "./header/notice.header";
import { Wrapper } from "./styles";

export default function QuestionDetailUI(): JSX.Element {
  return (
    <Wrapper>
      <NoticeDetailHeader />
      <NoticeDetailBody />
    </Wrapper>
  );
}
