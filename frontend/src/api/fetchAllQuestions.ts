const fetchAllQuestions = async () => {
  const questions = await fetch(`http://localhost:3000/questions`);
  if (!questions.ok) {
    // TODO: handle errors
    return undefined;
  }
  return questions.json();
};

export default fetchAllQuestions;
