import styled from "@emotion/styled";
import CounselBody from "./body/counsel.body.index";
import CounselFooter from "./footer/counsel.footer.index";
import CounselHeader from "./header/counsel.header.index";

const Wrapper = styled.div`
  /* max-width: 1200px; */
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
        <CounselFooter />
      </Wrapper>
    </>
  );
}
