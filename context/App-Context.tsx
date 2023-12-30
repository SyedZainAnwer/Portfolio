"use client"

import { createContext, useState, useContext, useEffect } from "react";
import type { SectionName, Theme } from "@/lib/types/appTypes";
import { ContextProps } from "@/lib/types/contextType";

const GlobalContext = createContext<ContextProps | null>(null);

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
        const [theme, setTheme] = useState<Theme>("light");
        const [activeSection, setActiveSection] = useState<SectionName>('Home');
        const [timeOfLastClick, setTimeOfLastClick] = useState(0);

        const toggleTheme = () => {
            if (theme === "dark") {
                setTheme("light");
                window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
            } else {
                setTheme("dark");
                window.localStorage.setItem("theme", "dark");
                document.documentElement.classList.add("dark");
            }
        };

    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme") as Theme | null;

        if (localTheme) {
            setTheme(localTheme);

        if (localTheme === "dark") {
            document.documentElement.classList.add("dark");
        }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <GlobalContext.Provider value={{
            theme,
            toggleTheme,
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick
        }}>
            {children}
        </GlobalContext.Provider>
    );
}

export const useGlobalContext = () => {
    const contextValue = useContext(GlobalContext);

    if (contextValue === null) {
        throw new Error("useGlobalContext must be used within GlobalContextProvider");
    }

    return contextValue;
}