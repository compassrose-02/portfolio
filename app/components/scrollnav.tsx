

import Link from 'next/link';

export default function ScrollNav() {
    return (
        <nav className="bg-gray-800 flex" style={{writingMode: "sideways-rl"}}>
            <ul className="flex sticky top-0">
                <li>
                    <Link href="#about" className="block p-4 text-white text-4xl font-light hover:bg-gray-700 transition-colors">About</Link>
                </li>
                <li>
                    <Link href="#works" className="block p-4 text-white text-4xl font-light hover:bg-gray-700 transition-colors">Works</Link>
                </li>
                <li>
                    <Link href="#education" className="block p-4 text-white text-4xl font-light hover:bg-gray-700 transition-colors">Education</Link>
                </li>
                <li>
                    <Link href="#experience" className="block p-4 text-white text-4xl font-light hover:bg-gray-700 transition-colors">Experience</Link>
                </li>
            </ul>
        </nav>
    );
};

