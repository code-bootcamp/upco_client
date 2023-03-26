import styled from "@emotion/styled";
import NoticeSidebar from "../../commons/sidebar";
import NoticeBody from "./body/notice.body.index";
import NoticeFooter from "./footer/notice.footer.index";
import NoticeHeader from "./header/notice.header.index";

const NoticeRow = styled.div`
  display: flex;
  flex: row;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function NoticeUI(): JSX.Element {
  return (
    <>
      <NoticeHeader />
      <NoticeRow>
        <NoticeSidebar />
        <Wrapper>
          <NoticeBody />
          <NoticeFooter />
        </Wrapper>
      </NoticeRow>
    </>
  );
}
