const findAllQuestions = async () => {
  const questions = await fetch(
    `${import.meta.env.VITE_API_GATEWAY || "http://localhost:3000"}/questions`
  );
  if (!questions.ok) {
    // TODO: handle errors
    return undefined;
  }
  return questions.json();
};

export default findAllQuestions;
