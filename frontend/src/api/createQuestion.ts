const createQuestion = async (question: any): Promise<Response> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_GATEWAY || "http://localhost:3000"}/questions`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(question),
    }
  );
  return response;
};

export default createQuestion;
