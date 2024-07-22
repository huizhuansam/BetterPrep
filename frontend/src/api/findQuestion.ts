const findQuestion = async (urlId: string) => {
  const question = await fetch(`http://localhost:3000/questions/${urlId}`);
  if (!question.ok) {
    throw Error(question.statusText);
  }
  return question.json();
};

export default findQuestion;
