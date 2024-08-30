import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { validateEmail, validatePassword } from "../../components/common/Utils";
interface LoginProps {
  screenWidth: number;
  togglePage: (val: string) => void;
}

interface LoginForm {
  email: string;
  password: string;
}

const Login = (props: LoginProps) => {
  const { screenWidth, togglePage } = props;

  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [error, setError] = useState<{ [key in keyof LoginForm]?: boolean }>(
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
      case "email":
        isValid = !validateEmail(value);
        break;
      case "password":
        isValid = !validatePassword(value);
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
    const newErrors: { [key in keyof LoginForm]?: boolean } = {};
    if (validateEmail(form.email)) newErrors.email = true;
    if (validatePassword(form.password)) newErrors.password = true;
    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return false;
    } else {
      return true;
    }
  };

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const valid = validateForm();
    if (valid) {
      toast.success("Successfully signed in!");
    }
  };

  return (
    <div className="form-container sign-in-container">
      <form action="#">
        {screenWidth < 800 && (
          <div className="login-arrow-btn">
            <i
              className="ri-arrow-left-circle-fill ri-auto"
              onClick={() => togglePage("signUp")}
            ></i>
          </div>
        )}
        <h1>Sign In</h1>
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
        <span>or use your account</span>
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
        <Link to="#">Forgot your password?</Link>
        <button className="mt-4" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
