import { store } from "../../store/store";

const emailRegex = /^[\w-\.!$]+@([\w-]+\.)+[\w-]{2,4}$/;
const validateFullname = (fullname: string) => fullname.trim() === "";
const validateEmail = (email: string) =>
  email.trim() === "" || !emailRegex.test(email.trim());
const validatePassword = (password: string) =>
  password.trim() === "" || password.length < 8 || password.length > 15;
const validateConfirmPassword = (password: string, confirmPassword: string) =>
  password.trim() !== confirmPassword.trim();

const AuthUser = (): string | null => {
  const authUser = store.getState()?.Login?.authUser;
  return authUser && Object.keys(authUser)?.length > 0 ? authUser : null;
};

export {
  emailRegex,
  validateFullname,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  AuthUser,
};
