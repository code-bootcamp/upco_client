import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 100vh;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
`;

const ListItem = styled.li`
  padding: 10px;
  color: #333;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #e6e6e6;
  }
`;

const menuItems = [
  { id: 1, title: "공지사항" },
  { id: 2, title: "문의내역" },
];

export default function NoticeSidebar(): JSX.Element {
  return (
    <Wrapper>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.id}>{item.title}</ListItem>
        ))}
      </List>
    </Wrapper>
  );
}
