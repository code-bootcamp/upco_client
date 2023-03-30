import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import { FetchDataSlice } from "../../../commons/hooks/customs/fetchDataSlice";
import { useQueryFetchNotices } from "../../../commons/hooks/queries/useQueryFetchNotices";
import Pagination from "../../../commons/paginations/pagination.index";
import * as S from "./notice.body.styles";
import { v4 as uuidv4 } from "uuid";

export default function NoticeBody(): JSX.Element {
  const { data } = useQueryFetchNotices();
  console.log("notice data", data);

  const result = FetchDataSlice(data?.fetchNotices ?? "")();

  const [page, setPage] = useState(0);

  return (
    <>
      <S.Wrapper>
        <S.Title>공지사항</S.Title>
        {result && result?.length > 0 ? (
          <>
            <S.ContentsBox>
              {result?.[page]?.map((el: { number: number; title: string; contents: string }) => (
                <S.ContentsList key={el.number}>
                  <S.TextBox>
                    <S.ContentsTitle>{el.title}</S.ContentsTitle>
                    <S.Contents>{el.contents}</S.Contents>
                  </S.TextBox>
                  <S.CreateAt>{el.number}</S.CreateAt>
                </S.ContentsList>
              ))}
            </S.ContentsBox>
            <Pagination data={result} setPage={setPage} />
          </>
        ) : (
          <S.NoneBox>공지사항이 없습니다.</S.NoneBox>
        )}
      </S.Wrapper>
    </>
  );
}
