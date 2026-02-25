'use client'

import Link from 'next/link'
import ExportedImage from "next-image-export-optimizer";

import ScrollNav from './components/scrollnav';
import SkillsBox from './components/skillsbox';

import { MdMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

import pfp from './lib/img/personplaceholder.jpg';
import placeholder from './lib/img/imgplaceholder.jpg';
import wglogo from './lib/img/waygatelogo.jpg'
import ttimg from './lib/img/mviq_fd.png'
import sonylogo from './lib/img/sonylogo.png'
import axoliftlogo from './lib/img/axoliftlogo.png'
import ex2logo from './lib/img/ex2logo.png'
import ex3logo from './lib/img/ex3logo.png'

import './lib/page.css';
import { getCurrentYear } from './lib/utils';

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text)
    .then(() => { alert('Email address copied to clipboard!'); })
    .catch(err => { console.error('Failed to copy email:', err); });
}

export default function Home() {

  return (
    <div className='flex'>
      <ScrollNav />
      <div>
        <header className='bg-gray-100 flex justify-around h-75 sm:h-100 items-center'>
          <ExportedImage
            src={pfp}
            alt="Picture of Riley Pankow"
            className='h-full w-auto'
          />
          <h1 className='flex flex-col text-7xl'>
            <span>Design</span>
            <span>Develop</span>
            <span className='font-bold italic'>Delight!</span>
          </h1>
        </header>
        <main>
          <section className='bg-white px-6 py-10' id='about'>
            <h2 id='name' className='leading-10'>
              I&apos;m Riley Pankow
            </h2>
            <h3 id='skills' className='leading-10'>
              I have experience with:
            </h3>
            <div className='flex flex-col justify-between gap-3' id='nameContent'>
              <div className='flex flex-col gap-2'>
                <h3>
                  UI/UX Designer | Front-end Dev
                </h3>
                <p>
                  I create novel UI design solutions, develop engaging web and mobile applications, and uplift teams with contagious enthusiasm!
                </p>
              </div>
              <div>
                <h4>
                  Get in Touch
                </h4>
                <div className='flex gap-2'>
                  <button onClick={() => copyToClipboard("pankow.riley.02@gmail.com")} aria-label='Email' className='transition-colors duration-300 p-2 bg-gray-800 hover:bg-gray-500 text-3xl text-white'><MdMail /></button>
                  <a href="https://www.linkedin.com/in/riley-pankow-0003a3293" aria-label='LinkedIn' className='transition-colors duration-300 p-2 bg-gray-800 hover:bg-gray-500 text-3xl text-white'><FaLinkedin /></a>
                  <a href="/RileyPankowCV2026.pdf" download="RileyPankowCV2026.pdf" aria-label='CV Download' className='transition-colors duration-300 p-2 bg-gray-800 hover:bg-gray-500 text-2xl font-bold text-white'>CV</a>
                </div>
              </div>
            </div>
            <div id='skillsContent'>
                <div id='designtools'>
                  <h4>
                    Design Tools
                  </h4>
                  <SkillsBox content={['Figma', 'Spline', 'Illustrator', 'Photoshop', 'Lightroom']} />
                </div>
                <div id='devtools'>
                  <h4>
                    Dev Tools
                  </h4>
                  <SkillsBox content={['VSCode', 'Visual Studio', 'JetBrains IDEs', 'Android Studio', 'XCode', 'FlutterFlow']} />
                </div>
                <div id='languages'>
                  <h4>
                    Languages
                  </h4>
                  <SkillsBox content={['HTML', 'CSS', 'JS', 'PHP', 'C++', 'Python', 'Java', 'Swift', 'Flutter', 'React', 'ASP.net', 'Kotlin']} />
                </div>
                <div id='softskills'>
                  <h4>
                    Soft Skills
                  </h4>
                  <SkillsBox content={['Group Leadership', 'Communication', 'Team-Player', 'Adaptable', 'Loves to Learn']} />
                </div>
            </div>
          </section>
          <section id="works" className='bg-gray-100 px-6 py-10'>
            <h2>
              Selected Works
            </h2>
            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              <li>
                <Link href="/works/tt2.1" className='bg-white flex flex-row justify-between h-35 hover:scale-105 transition-transform duration-300'>
                  <div className='flex flex-col justify-between p-4'>
                    <h4>MVIQ+ Turning Tool Integration</h4>
                    <p>Waygate Technologies - 2024</p>
                  </div>
                  <ExportedImage
                    src={ttimg}
                    alt="MVIQ+ Turning Tool Integration Image"
                    className='h-full w-auto aspect-square object-cover'
                  />
                </Link>
              </li>
              <li>
                <Link href="/works/sony" className='bg-white flex flex-row justify-between h-35 hover:scale-105 transition-transform duration-300'>
                  <div className='flex flex-col justify-between p-4'>
                    <h4>Special Olympics Site Redesign</h4>
                    <p>Rochester Institute of Technology - 2025</p>
                  </div>
                  <ExportedImage
                    src={sonylogo}
                    alt="Special Olympics NY Logo"
                    className='h-full w-auto  aspect-square object-cover'
                  />
                </Link>
              </li>
              <li>
                <Link href="/works/axolift" className='bg-white flex flex-row justify-between h-35 hover:scale-105 transition-transform duration-300'>
                  <div className='flex flex-col justify-between p-4'>
                    <h4>AxoLift Capstone Project</h4>
                    <p>Rochester Institute of Technology - 2025</p>
                  </div>
                  <ExportedImage
                    src={axoliftlogo}
                    alt="AxoLift Logo"
                    className='h-full w-auto  aspect-square object-cover'
                  />
                </Link>
              </li>
              <li>
                <Link href="/works/camera-ex" className='bg-white flex flex-row justify-between h-35 hover:scale-105 transition-transform duration-300'>
                  <div className='flex flex-col justify-between p-4'>
                    <h4>Whimsical Camera Exercise</h4>
                    <p>Rochester Institute of Technology - 2025</p>
                  </div>
                  <ExportedImage
                    src={ex2logo}
                    alt="Exercise 2 Logo"
                    className='h-full w-auto aspect-square object-cover'
                  />
                </Link>
              </li>
              <li>
                <Link href="/works/tasks-ex" className='bg-white flex flex-row justify-between h-35 hover:scale-105 transition-transform duration-300'>
                  <div className='flex flex-col justify-between p-4'>
                    <h4>Tasks Revamp Exercise</h4>
                    <p>Rochester Institute of Technology - 2025</p>
                  </div>
                  <ExportedImage
                    src={ex3logo}
                    alt="Exercise 3 Logo"
                    className='h-full w-auto aspect-square object-cover'
                  />
                </Link>
              </li>
            </ul>
          </section>
          <section id="education" className='bg-white px-6 py-10'>
            <h2>
              Education
            </h2>
            <div className='flex gap-5'>
              <div className='bg-gray-100 flex-1 p-5'>
                <h4>Rochester Institute of Technology</h4>
                <p>BS - Human Centered Computing</p>
                <p>2022-2026</p>
              </div>
              <div className='bg-gray-100 flex-1 p-5'>
                <h4>Onondaga Community College</h4>
                <p>AS - Computer Information Systems</p>
                <p>2020-2022</p>
              </div>
            </div>
          </section>
          <section id="experience" className='bg-gray-100 px-6 py-10'>
            <h2>
              Work Experience
            </h2>
            <ul className='grid grid-cols-2 gap-5'>
              <li>
                <Link href="/experience/waygate" className='bg-white flex flex-row justify-between h-35 hover:scale-105 transition-transform duration-300'>
                  <div className='flex flex-col justify-between p-4'>
                    <h4>Waygate Technologies</h4>
                    <p>01/2024 - 07/2024</p>
                  </div>
                  <ExportedImage
                    src={wglogo}
                    alt="Waygate Technologies Logo"
                    className='h-full w-auto'
                  />
                </Link>
              </li>
            </ul>
          </section>
        </main>
        <footer className='px-6 py-10 bg-gray-800 flex justify-center text-white align-center'>
          <p>&copy; {getCurrentYear()} Riley Pankow. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
