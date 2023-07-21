import { createContext, useContext } from "react";

const initialUserData = {
  name: '',
  email: '',
};

const CurrentUserContext = createContext(initialUserData);

export function useCurrentUserContext() {
    const context = useContext(CurrentUserContext);
    return context;
};

export function CurrentUserContextProvider({ children, ...props }) {
  return <CurrentUserContext.Provider value={props.context}>{children}</CurrentUserContext.Provider>;
};