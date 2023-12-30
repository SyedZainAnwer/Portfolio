import { useGlobalContext } from "@/context/App-Context";
import type { SectionName } from "@/lib/types/appTypes";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const useSectionInView = (sectionName: SectionName, threshold=0.75) => {
    const { setActiveSection, timeOfLastClick } = useGlobalContext();
    const { ref, inView } = useInView({
        threshold
    });

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClick, sectionName]);

    return {ref, inView};
}

export default useSectionInView;