const createQuestion = async (question: any) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(question),
  };
  const response = await fetch(
    `${
      import.meta.env.VITE_QUESTION_SERVICE_PROXY || "http://localhost:3000"
    }/questions`,
    requestOptions
  );
  const responseBody = response.json();
  if (!response.ok) {
    throw Error((await responseBody).message);
  }
  return responseBody;
};

export default createQuestion;
