const findQuestion = async ({ slug }: { slug: string }) => {
  const response = await fetch(
    `${
      import.meta.env.VITE_API_GATEWAY || "http://localhost:3000"
    }/questions/${slug}`
  );
  if (!response.ok) {
    throw new Error(String(response.status));
  }
  return response.json();
};

export default findQuestion;
