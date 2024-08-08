const logout = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_GATEWAY}/auth/logout`,
    {
      method: "POST",
      credentials: "include",
    }
  );
  return response;
};

export default logout;
