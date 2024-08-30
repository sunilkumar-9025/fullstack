import { store } from "../../store/store";

const AuthUser = (): string | null => {
    const authUser = store.getState()?.Login?.authUser;
    return authUser && Object.keys(authUser)?.length > 0 ? authUser : null;
};


export { AuthUser };
