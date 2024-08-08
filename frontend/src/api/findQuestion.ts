const findQuestion = async (slug: string) => {
  const response = await fetch(
    `${
      import.meta.env.VITE_API_GATEWAY || "http://localhost:3000"
    }/questions/${slug}`,
    {
      method: "GET",
      credentials: "include",
    }
  );
  return response;
};

export default findQuestion;
