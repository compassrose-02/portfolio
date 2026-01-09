import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header>
        <h1>Hero</h1>
      </header>
      <main>
        <section>
          <h1>
            About Me
          </h1>
          <p>
            About me text goes here :3
          </p>
        </section>
        <section>
          <h1>
            Selected Works
          </h1>
          <ul>
            <li>
              <Link href="/works/work1">Work 1</Link>
              <Link href="/works/work2">Work 2</Link>
            </li>
          </ul>
        </section>
        <section>
          <h1>
            Education
          </h1>
          <p>
            Education body goes here, probably two cards side-by-side with the two schools ive gone to
          </p>
        </section>
        <section>
          <h1>
            Work Experience
          </h1>
          <ul>
            <li>
              <Link href="/experience/exp1">Experience 1</Link>
              <Link href="/experience/exp2">Experience 2</Link>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}
