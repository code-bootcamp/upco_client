import styled from "@emotion/styled";

const SubmitBtn = styled.button`
  height: 50px;
  width: 290px;
  font-size: 20px;
  background-color: #a777b1;
  color: white;
  font-weight: bold;
`;

interface IProfileButtonBasicProps {
  title: string;
}

export default function ProfileButtonBasic(props: IProfileButtonBasicProps): JSX.Element {
  return <SubmitBtn>{props.title}</SubmitBtn>;
}
