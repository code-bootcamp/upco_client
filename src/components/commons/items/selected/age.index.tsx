interface ISelectedAgeInputProps {
  selectedAge: number;
  setSelectedAge: (age: number) => void;
}

export default function SelectedAgeInput(props: ISelectedAgeInputProps): JSX.Element {
  const handleAgeChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    props.setSelectedAge(parseInt(event.target.value));
  };

  const yearRange = Array.from({ length: 80 }, (_, i) => 2023 - i);
  const options = yearRange.map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
  ));

  return (
    <select
      value={props.selectedAge}
      onChange={handleAgeChange}
      style={{ backgroundColor: "#fff", border: "1px solid #999", marginLeft: "15px" }}
    >
      {options}
    </select>
  );
}
