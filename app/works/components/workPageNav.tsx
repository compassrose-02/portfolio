
"use client";

import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";

interface WorkPageNavProps {
    // Add any props if needed in the future
    route: Array<string>;    
}

export default function WorkPageNav(props: WorkPageNavProps) {
    const router = useRouter();
    return (
        <nav className="bg-gray-800 flex" style={{writingMode: "sideways-rl"}}>
            <ul className="flex items-center sticky top-0">
                <li>
                    <button onClick={() => router.back()} className="transition-colors duration-300 block p-4 text-white text-4xl font-light bg-green-900 hover:bg-green-700"><MdOutlineArrowBackIos /></button>
                </li>
                {
                    props.route.map((segment, index) => (
                        <Fragment key={index}>                        
                            <li>
                                <span className="transition-colors block p-4 text-white text-2xl font-light">\</span>
                            </li>
                            <li>
                                <span className="transition-colors block p-4 text-white text-2xl font-light">{segment}</span>
                            </li>
                        </Fragment>
                    ))
                }
            </ul>
        </nav>
    );
};
