import validator from "validator";

const categoriesToArray = (categories: string) => {
  return [
    ...new Set(
      categories
        .trim()
        .split(",")
        .filter((s) => !validator.isEmpty(s))
        .map((s) => s.trim())
    ),
  ];
};

export default categoriesToArray;
