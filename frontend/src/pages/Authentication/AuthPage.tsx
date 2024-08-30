import { useEffect, useState } from "react";
import Login from "./Login";
import Register from "./Register";

const AuthPage = () => {
  const [page, setPage] = useState<string>("signIn");
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  const togglePage: (val: string) => void = (val: string) => {
    setPage(val);
  };

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  useEffect(() => {
    const container = document.getElementById("container");
    if (page === "signUp") {
      container?.classList.add("right-panel-active");
    } else {
      container?.classList.remove("right-panel-active");
    }
  }, [page]);

  return (
    <div className="login">
      <div className="container" id="container">
        <Login screenWidth={screenWidth} togglePage={togglePage} />
        <Register screenWidth={screenWidth} togglePage={togglePage} />

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className="ghost" onClick={() => togglePage("signIn")}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={() => togglePage("signUp")}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
