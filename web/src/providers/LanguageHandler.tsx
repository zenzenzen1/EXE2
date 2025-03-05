import { getLanguage } from "../configurations/language";

type ChildProps = {
    children: React.ReactNode; // Children prop
    onLanuageChange: (language: string) => void; // Function prop
};

const LanguageHandler = (props : ChildProps) => {
    props.onLanuageChange(getLanguage());

    return (
        <>{props.children}</>
    )
};


export default LanguageHandler;