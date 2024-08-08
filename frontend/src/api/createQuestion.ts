const createQuestion = async (question: any) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_GATEWAY || "http://localhost:3000"}/questions`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(question),
    }
  );
  const responseBody = response.json();
  return [
    responseBody,
    response.ok ? null : Error((await responseBody).message),
  ];
};

export default createQuestion;
