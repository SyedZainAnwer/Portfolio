import { SectionName, Theme } from "./appTypes";

export interface ContextProps {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
    theme: Theme;
    toggleTheme: () => void;
}