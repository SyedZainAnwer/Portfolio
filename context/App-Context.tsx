"use client"

import { createContext, useState, useContext } from "react";
import type { SectionName } from "@/lib/types";

interface ContextProps {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

const GlobalContext = createContext<ContextProps | null>(null);

export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {

    const [ activeSection, setActiveSection ] = useState<SectionName>('Home');
    const [ timeOfLastClick, setTimeOfLastClick ] = useState(0);

    return(
        <GlobalContext.Provider value={{
            activeSection,
            setActiveSection,
            timeOfLastClick,
            setTimeOfLastClick
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    const contextValue = useContext(GlobalContext);

    if (contextValue === null) {
        throw new Error("useGlobalContext must be used within GlobalContextProvider");
    }

    return contextValue;
}