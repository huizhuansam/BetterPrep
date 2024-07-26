const findQuestion = async (slug: string) => {
  const question = await fetch(
    `${
      import.meta.env.VITE_API_GATEWAY || "http://localhost:3000"
    }/questions/${slug}`
  );
  if (!question.ok) {
    throw Error(question.statusText);
  }
  return question.json();
};

export default findQuestion;
