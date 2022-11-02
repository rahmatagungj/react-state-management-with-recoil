import { useSetRecoilState } from "recoil";
import { animalFilterState } from "./atoms";
import { ALL, ANIMALS } from "./constants";

export default function PickAnimal() {
  const setAnimalFilter = useSetRecoilState(animalFilterState);
  return (
    <div className="buttons">
      <button onClick={() => setAnimalFilter(ALL)}>All</button>
      <button onClick={() => setAnimalFilter(ANIMALS.DOG)}>Dogs</button>
      <button onClick={() => setAnimalFilter(ANIMALS.CAT)}>Cats</button>
    </div>
  );
}
