import styled from "@emotion/styled";
import { useQueryFetchNotices } from "../../commons/hooks/queries/useQueryFetchNotices";
import NoticeBody from "./body/notice.body.index";
import NoticeHeader from "./header/notice.header.index";

export default function NoticeUI(): JSX.Element {
  return (
    <>
      <NoticeHeader />
      <NoticeBody></NoticeBody>
    </>
  );
}
