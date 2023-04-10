import { useRouter } from "next/router";
import { Fragment, MouseEvent } from "react";
import * as S from "./notice.header.styles";

const menuTitles = [
  { title: "공지사항", page: "/notice" },
  { title: "문의내역", page: "/questionList" },
  { title: "문의하기", page: `/questionList/question` },
];

export default function NoticeHeader(): JSX.Element {
  const router = useRouter();
  const onClickMenu = (event: MouseEvent<HTMLDivElement>): void => {
    void router.push(event.currentTarget.id);
  };

  const currentPath = router.pathname;

  return (
    <S.Wrapper>
      {menuTitles.map((el) => (
        <Fragment key={el.page}>
          <S.MenuTitle
            id={el.page}
            onClick={onClickMenu}
            style={{
              fontWeight: currentPath === el.page ? "bold" : "",
              color: currentPath === el.page ? "#6658CA" : "#979797",
            }}
          >
            {el.title}
          </S.MenuTitle>
        </Fragment>
      ))}
    </S.Wrapper>
  );
}
