import styled from "@emotion/styled";
import CounselBody from "./body/counsel.body.index";
import CounselHeader from "./header/counsel.header.index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function CounselUI(): JSX.Element {
  return (
    <>
      <Wrapper>
        <CounselHeader />
        <CounselBody />
      </Wrapper>
    </>
  );
}
