import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  validateConfirmPassword,
  validateEmail,
  validateFullname,
  validatePassword,
} from "../../components/common/Utils";
import { toast } from "react-toastify";

interface RegisterProps {
  screenWidth: number;
  togglePage: (val: string) => void;
}

interface RegisterForm {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC<RegisterProps> = ({ screenWidth, togglePage }) => {
  const [form, setForm] = useState<RegisterForm>({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<{ [key in keyof RegisterForm]?: boolean }>(
    {}
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
    setError((prevError: any) => {
      const { [name]: _, ...rest } = prevError;
      return rest;
    });
  };

  const validateInput = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let isValid = true;

    switch (name) {
      case "fullname":
        isValid = !validateFullname(value);
        break;
      case "email":
        isValid = !validateEmail(value);
        break;
      case "password":
        isValid = !validatePassword(value);
        break;
      case "confirmPassword":
        isValid = !validateConfirmPassword(form.password, value);
        break;
      default:
        return;
    }

    setError((prevError) => ({
      ...prevError,
      [name]: !isValid,
    }));
  };

  const validateForm = () => {
    const newErrors: { [key in keyof RegisterForm]?: boolean } = {};
    if (validateFullname(form.fullname)) newErrors.fullname = true;
    if (validateEmail(form.email)) newErrors.email = true;
    if (validatePassword(form.password)) newErrors.password = true;
    if (validateConfirmPassword(form.password, form.confirmPassword))
      newErrors.confirmPassword = true;

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return false;
    } else {
      return true;
    }
  };

  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const valid = validateForm();
    if (valid) {
      toast.success("Successfully signed up!");
    }
  };

  return (
    <div className="form-container sign-up-container">
      <form>
        {screenWidth < 800 && (
          <div className="login-arrow-btn">
            <i
              className="ri-arrow-left-circle-fill ri-auto"
              onClick={() => togglePage("signIn")}
            ></i>
          </div>
        )}
        <h1>Create Account</h1>
        <div className="social-container">
          <Link to="#" className="social">
            <i className="ri-facebook-fill ri-xl"></i>
          </Link>
          <Link to="#" className="social">
            <i className="ri-google-fill ri-xl"></i>
          </Link>
          <Link to="#" className="social">
            <i className="ri-linkedin-fill ri-xl"></i>
          </Link>
        </div>
        <span>or use your email for registration</span>
        <input
          type="text"
          placeholder="Full Name"
          name="fullname"
          value={form.fullname}
          onChange={handleChange}
          onBlur={validateInput}
        />
        {error.fullname && (
          <p className="text-danger fs-14 text-start">Full Name is required.</p>
        )}

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          onBlur={validateInput}
        />
        {error.email && (
          <p className="text-danger fs-14 text-start">Invalid email address.</p>
        )}

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
          onBlur={validateInput}
        />
        {error.password && (
          <p className="text-danger fs-14 text-start">
            Password must be between 8 and 15 characters.
          </p>
        )}

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          onBlur={validateInput}
        />
        {error.confirmPassword && (
          <p className="text-danger fs-14 text-start">
            Passwords do not match.
          </p>
        )}

        <button className="mt-4" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
