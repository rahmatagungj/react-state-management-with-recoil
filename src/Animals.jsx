import { useRecoilValue } from "recoil";
import { icon } from "./constants";
import { filteredAnimalsState } from "./selectors";

export default function Animals() {
  const animals = useRecoilValue(filteredAnimalsState);

  return (
    <div>
      <h1>Animals:</h1>
      {animals.map((animal) => (
        <div key={animal.id}>
          {animal.name}, {animal.type} {icon(animal.type)}
        </div>
      ))}
    </div>
  );
}
