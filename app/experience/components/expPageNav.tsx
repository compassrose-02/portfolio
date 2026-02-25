
"use client";

import { useRouter } from "next/navigation";



export default function ExpPageNav() {
    const router = useRouter();
    return (
        <nav className="bg-gray-800 flex" style={{writingMode: "sideways-rl"}}>
            <ul className="flex justify-center sticky h-screen top-0">
                <li>
                    <button onClick={() => router.back()} className="transition-colors sm:p-4 sm:text-4xl py-2 px-4 text-xl duration-300 block  text-white  font-light hover:bg-gray-500">Back</button>
                </li>
            </ul>
        </nav>
    );
};
