const login = async (username: string, password: string) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_GATEWAY}/auth/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
      credentials: "include",
    }
  );
  return response;
};

export default login;
