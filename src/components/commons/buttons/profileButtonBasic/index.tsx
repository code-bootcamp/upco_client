import styled from "@emotion/styled";

const SubmitBtn = styled.button`
  padding: 10px 20px;
  border-radius: 30px;
  font-size: 20px;
  background-color: #6658ca;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

interface IProfileButtonBasicProps {
  title: string;
}

export default function ProfileButtonBasic(props: IProfileButtonBasicProps): JSX.Element {
  return <SubmitBtn>{props.title}</SubmitBtn>;
}
