import { createContext, useContext } from 'react';

const CurrentMoviesContext = createContext([]);

export function useMoviesContext() {
    const context = useContext(CurrentMoviesContext);
    return context;
};

export function CurrentMoviesContextProvider({ children, ...props }) {
    return <CurrentMoviesContext.Provider value={props.context}>{children}</CurrentMoviesContext.Provider>;
};