const signup = async (
  emailAddress: string,
  username: string,
  password: string
) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_GATEWAY}/auth/signup`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        emailAddress,
        username,
        password,
      }),
    }
  );
  return response;
};

export default signup;
