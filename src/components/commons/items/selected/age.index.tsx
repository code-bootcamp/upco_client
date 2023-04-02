interface ISelectedAgeInputProps {
  selectedAge: number;
  setSelectedAge: (age: number) => void;
}

export default function SelectedAgeInput(props: ISelectedAgeInputProps): JSX.Element {
  const handleAgeChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    props.setSelectedAge(parseInt(event.target.value));
  };

  const yearRange = Array.from({ length: 123 }, (_, i) => 2022 - i);
  const options = yearRange.map((year) => (
    <option key={year} value={year}>
      {year}
    </option>
  ));

  return (
    <select value={props.selectedAge} onChange={handleAgeChange}>
      {options}
    </select>
  );
}
