import { store } from "../../state/store";

const getLoggedinUser = () => {
  const user = sessionStorage.getItem("authUser");
  if (!user) {
    return null;
  } else {
    return JSON.parse(user);
  }
};

// const AuthUser = (): string | null => {
//   const authUser = store.getState()
//   return authUser && Object.keys(authUser)?.length > 0 ? authUser : null;
// };

export { getLoggedinUser };
