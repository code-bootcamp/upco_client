import styled from "@emotion/styled";

const SubmitBtn = styled.button`
  margin-bottom: 50px;
  padding: 10px 100px;
  border: 1px solid #979797;
  border-radius: 6px;
  font-size: 16px;
  background-color: #fff;
  color: #979797;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  :hover {
    color: #fff;
    background-color: #6658ca;
    border: 1px solid #6658ca;
  }
`;

interface IProfileButtonBasicProps {
  title: string;
}

export default function ProfileButtonBasic(props: IProfileButtonBasicProps): JSX.Element {
  return <SubmitBtn>{props.title}</SubmitBtn>;
}
