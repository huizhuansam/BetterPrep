const createQuestion = async (question: any) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(question),
  };
  const response = await fetch(
    "http://localhost:3000/questions",
    requestOptions
  );
  if (!response.ok) {
    // todo: handle server error
    return undefined;
  }
  return response.json();
};

export default createQuestion;
