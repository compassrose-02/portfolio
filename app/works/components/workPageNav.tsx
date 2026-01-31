
"use client";

import { useRouter } from "next/navigation";

export default function WorkPageNav() {
    const router = useRouter();
    return (
        <nav className="bg-gray-800 flex" style={{writingMode: "sideways-rl"}}>
            <ul className="flex sticky top-0">
                <li>
                    <button onClick={() => router.back()} className="transition-colors duration-300 block p-4 text-white text-4xl font-light hover:bg-gray-500">Back</button>
                </li>
            </ul>
        </nav>
    );
};

