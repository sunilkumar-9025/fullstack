//Authentaction
import ForgetPassword from "../components/Authentication/ForgetPassword";
import Login from "../components/Authentication/Login";
import Logout from "../components/Authentication/Logout";
import OneTimePassword from "../components/Authentication/OneTimePassword";
import PasswordCreate from "../components/Authentication/PasswordCreate";
import Register from "../components/Authentication/Register";
import UserProfile from "../components/Authentication/UserProfile";

import Counter from "../components/Counter";

const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/register", component: <Register /> },
  { path: "/forget-password", component: <ForgetPassword /> },
  { path: "/otp", component: <OneTimePassword /> },
  { path: "/change-password", component: <PasswordCreate /> },
  { path: "/user-profile", component: <UserProfile /> },
  { path: "/logout", component: <Logout /> },
];

const protectedRoutes = [{ path: "/", component: <Counter /> }];

export { publicRoutes, protectedRoutes };
