const passwordRequirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

const getPasswordStrength = (password: string) => {
  let multiplier = 5 < password.length && password.length < 73 ? 0 : 1;
  passwordRequirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });
  return Math.max(
    100 - (100 / (passwordRequirements.length + 1)) * multiplier,
    10
  );
};

export { passwordRequirements, getPasswordStrength };
