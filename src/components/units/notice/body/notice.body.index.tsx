import * as S from "./notice.body.styles";

export default function NoticeBody(): JSX.Element {
  const notices = [
    {
      id: 1,
      title: "공지 테스트1",
    },
    {
      id: 2,
      title: "공지 테스트2",
    },
    {
      id: 3,
      title: "공지 테스트3",
    },
  ];

  return (
    <S.Container>
      <S.List>
        {notices.map((notice) => (
          <S.Notice key={notice.id}>
            <S.NoticeTitle>{notice.title}</S.NoticeTitle>
          </S.Notice>
        ))}
      </S.List>
    </S.Container>
  );
}
