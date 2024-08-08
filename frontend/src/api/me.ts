const me = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_GATEWAY}/auth/me`, {
    method: "GET",
    credentials: "include",
  });
  return response.json();
};

export default me;
