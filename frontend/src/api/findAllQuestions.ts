const findAllQuestions = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_GATEWAY || "http://localhost:3000"}/questions`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  if (!response.ok) {
    throw new Error(String(response.status));
  }
  return response.json();
};

export default findAllQuestions;
