import Link from 'next/link'
import Image from 'next/image'

import pfp from './lib/img/personplaceholder.jpg'

export default function Home() {
  return (
    <>
      <header className='bg-gray-100 flex justify-around h-100 items-center'>
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
        <section className='bg-white flex justify-between px-6 py-10'>
          <div>
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
          <div>

          </div>
        </section>
        <section className='bg-gray-100 px-6 py-10'>
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
        <section className='bg-white px-6 py-10'>
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
        <section className='bg-gray-100 px-6 py-10'>
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
      <footer className='px-6 py-10'>
        <p>Footer</p>
      </footer>
    </>
  );
}
