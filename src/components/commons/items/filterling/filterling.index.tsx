import { interestMeeting } from "../modal/interest/interest.index";
import * as S from "./filterling.styles";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { interestFilter } from "../../stores";
import { debounce } from "lodash";

export default function FilterlingUI(): JSX.Element {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [selectedValue, setSelectedValue] = useRecoilState(interestFilter);
  const focusRef = useRef<HTMLInputElement>(null);

  const interestArr = [...interestMeeting];

  const handleMouseOver = (index: number): void => {
    setHoverIndex(index);
  };

  const handleMouseOut = (): void => {
    setHoverIndex(-1);
  };

  const handleRowClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ): void => {
    const selectedValue = interestArr[index];
    setSelectedValue(selectedValue);
  };

  const onChangeValue = (event: ChangeEvent<HTMLInputElement>): void => {
    const inputValue = event.target.value;
    setSelectedValue(event.target.value);
  };

  const debouncedOnChangeValue = debounce((event) => {
    onChangeValue(event);
  }, 300);

  useEffect(() => {
    if (focusRef.current) {
      focusRef.current.focus();
    }
  }, []);

  const Row = ({ index, style }: { index: number; style: React.CSSProperties }): JSX.Element => (
    <div
      style={{
        ...style,
        padding: "10px",
        backgroundColor: hoverIndex === index ? "#6658ca" : "white",
        color: hoverIndex === index ? "#fff" : "#979797",
        cursor: "pointer",
      }}
      onMouseOver={() => handleMouseOver(index)}
      onMouseOut={() => handleMouseOut()}
      onClick={(event) => handleRowClick(event, index)}
    >
      {interestArr[index]}
    </div>
  );

  return (
    <>
      <S.Wrapper>
        <S.Contents>
          <p>관심사 필터</p>
          <div>
            <S.SearchInput
              value={selectedValue}
              onChange={onChangeValue}
              ref={focusRef}
              placeholder="관심사를 추가해주세요."
            />
            <S.SearchIconBox>
              <S.SearchIcon />
            </S.SearchIconBox>
          </div>
        </S.Contents>
        {selectedValue !== "" && (
          <S.InterestToolTip style={{ transition: "all 0.3s ease-in-out" }}>
            <S.List height={150} itemCount={interestArr.length} itemSize={40} width={"100%"}>
              {Row}
            </S.List>
          </S.InterestToolTip>
        )}
      </S.Wrapper>
    </>
  );
}
