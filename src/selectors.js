import { selector } from "recoil";
import { animalFilterState, animalsState } from "./atoms";
import { ALL } from "./constants";

export const filteredAnimalsState = selector({
  key: "animalListState",
  get: ({ get }) => {
    const filter = get(animalFilterState);
    const animals = get(animalsState);
    if (filter === ALL) return animals;
    return animals.filter((animal) => animal.type === filter);
  }
});
