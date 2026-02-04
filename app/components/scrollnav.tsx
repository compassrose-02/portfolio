'use client';

import Link from 'next/link';

export default function ScrollNav() {
    return (
        <nav className={`bg-gray-800 flex`} style={{writingMode: "sideways-rl"}}>
            <ul className={`flex justify-center sticky h-screen top-0`}>
                <li>
                    <Link href="#about" className="transition-colors duration-300 block p-4 text-white text-4xl font-light hover:bg-gray-500">About</Link>
                </li>
                <li>
                    <Link href="#works" className="transition-colors duration-300 block p-4 text-white text-4xl font-light hover:bg-gray-500">Works</Link>
                </li>
                <li>
                    <Link href="#education" className="transition-colors duration-300 block p-4 text-white text-4xl font-light hover:bg-gray-500">Education</Link>
                </li>
                <li>
                    <Link href="#experience" className="transition-colors duration-300 block p-4 text-white text-4xl font-light hover:bg-gray-500">Experience</Link>
                </li>
            </ul>
        </nav>
    );
};

