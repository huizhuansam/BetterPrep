const login = async (username: string, password: string) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  };
  const response = await fetch(
    `${import.meta.env.VITE_API_GATEWAY}/auth/login`,
    requestOptions
  );
  return response;
};

export default login;
