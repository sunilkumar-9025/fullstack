import React, { useState } from "react";
import { Link } from "react-router-dom";

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

const Register = (props: RegisterProps) => {
  const { screenWidth, togglePage } = props;

  const [form, setForm] = useState<RegisterForm>({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="form-container sign-up-container">
      <form>
        {screenWidth < 600 && (
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
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        <button className="mt-4" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
