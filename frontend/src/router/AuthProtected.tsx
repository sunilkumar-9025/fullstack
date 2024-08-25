import { getLoggedinUser } from "../components/Common/Utils";
import { Navigate } from "react-router-dom";

const AuthProtected = (props: any) => {
  const userProfileSession = getLoggedinUser();

  if (!userProfileSession) {
    return <Navigate to={{ pathname: "/login" }} />;
  }

  return <>{props?.children}</>;
};

export default AuthProtected;
