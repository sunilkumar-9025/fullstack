import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(form);
    toast.success("created");
  };

  return (
    <div className="form-container sign-in-container">
      <form action="#">
        {screenWidth < 600 && (
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
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        <Link to="#">Forgot your password?</Link>
        <button className="mt-4" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;
