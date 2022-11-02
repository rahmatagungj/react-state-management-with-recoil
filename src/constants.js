export const ANIMALS = {
  CAT: "cat",
  DOG: "dog"
};

export const ALL = "all";

export const icon = (type) => {
  if (type === ANIMALS.DOG) return "🐶";
  if (type === ANIMALS.CAT) return "🐱";
};
