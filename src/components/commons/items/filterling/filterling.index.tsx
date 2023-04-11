import { interestMeeting } from "../modal/interest/interest.index";
import * as S from "./filterling.styles";
import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { interestFilter } from "../../stores";
import { debounce } from "lodash";

export default function FilterlingUI(): JSX.Element {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [selectedValue, setSelectedValue] = useRecoilState(interestFilter);
  const [filteredList, setFilteredList] = useState([...interestMeeting]);
  const focusRef = useRef<HTMLInputElement>(null);

  const interestArr = useMemo(() => [...interestMeeting], [interestMeeting]);

  const handleMouseOver = useCallback((index: number): void => {
    setHoverIndex(index);
  }, []);

  const handleMouseOut = useCallback((): void => {
    setHoverIndex(-1);
  }, []);

  const handleRowClick = useCallback(
    (index: number): void => {
      const selectedValue = interestArr[index];
      setSelectedValue(selectedValue);
      if (focusRef.current) {
        focusRef.current.value = selectedValue;
      }
    },
    [interestArr, setSelectedValue]
  );

  const debouncedValue = debounce((value) => {
    setSelectedValue(value);
  }, 300);

  const onChangeValue = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const query = event.target.value.trim(); // 입력값에서 불필요한 공백 제거
      const filtered = interestMeeting.filter(
        (interest) => interest.toLowerCase().includes(query.toLowerCase()) // 소문자로 일치 여부 비교
      );
      setFilteredList(filtered); // 필터링된 배열 업데이트
      setSelectedValue(query); // 검색어 업데이트
    },
    [setSelectedValue]
  );

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
      onClick={() => handleRowClick(index)}
    >
      {filteredList[index]}
    </div>
  );

  return (
    <>
      <S.Wrapper>
        <S.Contents>
          <p>관심사 필터</p>
          <div>
            <S.SearchInput
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
            {filteredList.length === 0 ? (
              <S.NoneList>검색어와 일치하는 정보가 없습니다.</S.NoneList>
            ) : (
              <S.List height={150} itemCount={interestArr.length} itemSize={40} width={"100%"}>
                {Row}
              </S.List>
            )}
          </S.InterestToolTip>
        )}
      </S.Wrapper>
    </>
  );
}
