import { interestMeeting } from "../modal/interest/interest.index";
import { FixedSizeList as List } from "react-window";
import * as S from "./filterling.styles";

export default function FilterlingUI(): JSX.Element {
  const interestArr = [...interestMeeting];

  const Row = ({ index }) => <div style={{ padding: "10px" }}>{interestArr[index]}</div>;

  return (
    <>
      <S.Wrapper>
        <S.Contents>
          <p>관심사 필터</p>
          <div>
            <S.SearchInput placeholder="관심사를 추가해주세요." />
            <S.SearchIconBox>
              <S.SearchIcon />
            </S.SearchIconBox>
          </div>
        </S.Contents>
        <S.InterestToolTip>
          <S.List height={150} itemCount={interestArr.length} itemSize={20} width={"100%"}>
            {Row}
          </S.List>
        </S.InterestToolTip>
      </S.Wrapper>
    </>
  );
}
