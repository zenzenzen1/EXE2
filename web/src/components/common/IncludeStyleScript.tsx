import { useEffect } from 'react';
import { indexScript } from '../../include/include';

interface Props {
    scripts?: string[];
    links?: string[];
}

const IncludeStyleScript = (props: Props = { scripts: [], links: [] }) => {
    // useMemo(() => {
    //     let l: HTMLLinkElement[] = [];
    //     // Link for head
    //     [...indexStyle, ...(props.links ?? [])].forEach((linkHref) => {
    //         const link = document.createElement('link');
    //         link.rel = 'stylesheet';
    //         link.href = linkHref;
    //         document.head.appendChild(link);
    //         l.push(link);

    //     });

    //     return () => {
    //         console.log(l.length);
    //         l.forEach((link) => {
    //             document.head.removeChild(link); // Cleanup
    //         });
    //     };
    // }, []);

    useEffect(() => {
        let s: HTMLScriptElement[] = [];
        [...(props.scripts ?? []), ...indexScript].forEach((script) => {
            const scriptElement = document.createElement("script");
            scriptElement.src = script;
            if (script.includes("https")) {
                scriptElement.crossOrigin = "anonymous";

            }
            else {
            }
            scriptElement.async = false;

            document.body.appendChild(scriptElement);
            s.push(scriptElement);
        });

        return () => {
            s.forEach((script) => {
                document.body.removeChild(script); // Cleanup
            });
        };
    }, []);
    return (
        <></>
    )
}

export default IncludeStyleScript