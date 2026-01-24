import Link from 'next/link'
import Image from 'next/image'
import ScrollNav from './components/scrollnav';
import SkillsBox from './components/skillsbox';

import pfp from './lib/img/personplaceholder.jpg'

export default function Home() {
  return (
    <div className='flex'>
      <ScrollNav />
      <div>
        <header id="about" className='bg-gray-100 flex justify-around h-100 items-center'>
          <Image
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
          <section className='bg-white flex justify-between px-6 py-10 gap-10'>
            <div className='w-1/3'>
              <h2>
                I&apos;m Riley Pankow
              </h2>
              <h3>
                UI/UX Designer | Front-end Dev
              </h3>
              <p>
                I create novel UI design solutions, develop engaging web and mobile applications, and uplift teams with contagious enthusiasm!
              </p>
            </div>
            <div className='flex w-2/3 gap-2'>
              <div className='w-1/4'>
                <h4>
                  Design Tools
                </h4>
                <SkillsBox content={['Figma', 'Spline', 'Illustrator', 'Photoshop', 'Lightroom']} />
              </div>
              <div className='w-1/4'>
                <h4>
                  Dev Tools
                </h4>
                <SkillsBox content={['VSCode', 'Visual Studio', 'JetBrains IDEs', 'Android Studio', 'XCode', 'FlutterFlow']} />
              </div>
              <div className='w-1/4'>
                <h4>
                  Languages
                </h4>
                <SkillsBox content={['HTML', 'CSS', 'JS', 'PHP', 'C++', 'Python', 'Java' , 'Swift' , 'Flutter' , 'React', 'ASP.net', 'Kotlin']} />
              </div>
              <div className='w-1/4'>
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
            <ul>
              <li>
                <Link href="/works/work1">Work 1</Link>
                <Link href="/works/work2">Work 2</Link>
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
            <ul>
              <li>
                <Link href="/experience/exp1">Experience 1</Link>
                <Link href="/experience/exp2">Experience 2</Link>
              </li>
            </ul>
          </section>
        </main>
        <footer className='px-6 py-10 bg-gray-800'>
          <p>Footer</p>
        </footer>
      </div>
    </div>
  );
}
