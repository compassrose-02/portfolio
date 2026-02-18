'use client';

import WorkPageNav from "../components/workPageNav";
import { getCurrentYear } from "@/app/lib/utils";
import './page.css';
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";
import { useRef } from "react";
import { IoMdApps } from "react-icons/io";

import hero from './img/hero.png';
import notes from './img/Notes.png';
import styleboard from './img/styleboard.png';
import final from './img/gallery/Final.png';
import finalthumb from './img/gallery/Finalthumb.png';
import userflow from './img/gallery/Userflow.png';
import userflowthumb from './img/gallery/Userflowthumb.png';
import wireframe from './img/gallery/Wireframe.png';
import wireframethumb from './img/gallery/Wireframethumb.png';
// import placeholder from './img/gallery/imgplaceholder.jpg';
// import placeholderthumb from './img/gallery/imgplacerholterthumb.jpg';


export default function Sony() {

  const style = {
    backgroundImage: `linear-gradient(180deg,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.8) 100%),url(${hero.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  const images: GalleryItem[] = [
    {
      original: wireframe.src,
      thumbnail: wireframethumb.src,
    },
    {
      original: userflow.src,
      thumbnail: userflowthumb.src,
    },
    {
      original: final.src,
      thumbnail: finalthumb.src,
    },
  ]

  const galleryRef = useRef<ImageGalleryRef>(null);

  return (
    <div className="flex">
      <WorkPageNav />
      <div className="bg-gray-100 w-full">
        <header className="h-70 flex" style={style}>
          <h2 className="mt-auto px-6 text-white">
            Special Olympics Site Redesign
          </h2>
        </header>
        <main>
          <div className="bg-white px-6 pb-10 pt-2">
            <h3>
              Rochester Institute of Technology | 08/2025 - 12/2025
            </h3>
            <div id="ColGridContainer" className="mt-5">
              <section id="body1" className="flex gap-2 flex-col">
                <h4>
                  Intro & Overview
                </h4>
                <p>
                  During the fall of 2025, my GUI design class was approached by the Special Olympics of New York with a proposal for a website revamp. Our final individual project for that semester was a complete re-imagining of their website, with a focus on improving the task flow of a specific assigned user group.
                </p>
                <p>
                  I was assigned the user group of “Donors” for my focus area. I conducted research and fact-finding, ideation on style, created multiple prototypes of varying levels of fidelity to gather feedback, and finally presented a clickable Figma prototype with an accompanying pitch deck at the end of the semester. This project gave me end-to-end experience in the UX process with a real client.
                </p>
              </section>
              <section id="body2" className="flex gap-2 flex-col">
                <h4>
                  Research & Competitive Analysis
                </h4>
                <p>
                  I dug through the original site to create a list of all the different ways to contribute, and found that a lot of the information was fragmented and located in different areas. To improve the discoverability of this information for users with different goals, I chunked the list into three groups: Donations, Partners, and Fundraising Events. The design of the new pages and navigation was based on this grouped information
                </p>
                <p>
                  I also conducted a competitive analysis of Special Olympics websites from other U.S. states. An effective pattern that emerged was sites consolidating giving options under a single entry point, validating my earlier findings about fragmentation.
                </p>
              </section>
              <figure id="img1" className="flex flex-col items-center gap-1">
                <Image
                  src={notes}
                  alt="Notes from original Special Olympics site"
                  className="shadow-md"
                />
                <figcaption className="text-sm text-gray-500">
                  Notes from my research on the original site
                </figcaption>
              </figure>
              <section id="body3" className="flex gap-2 flex-col">
                <h4>
                  Style Exploration
                </h4>
                <p>
                  In parallel with the research phase, I was developing ideas for how I wanted the site to look. I knew I wanted to draw inspiration from other sites that featured an “athletic” or “outdoorsy” aesthetic to convey a feeling of authenticity, clarity, and community.
                </p>
                <p>
                  An emergent aspect during ideation was the idea of a heavy, loud, almost “militant” edge to the style as a call-to-action. As part of our research we held a discussion with some of the faculty of Special Olympics New York and they explained that for some of the athletes, the check-ups and care that they receive at the events are the only medical care they have access to. I honestly felt outraged at this, and I felt the need to channel a bit of that into the final design.
                </p>
                <p>
                  I compiled these ideas into a styleboard that included color, typography, images, and various examples of page elements.
                </p>
              </section>
              <figure id="img2" className="flex flex-col items-center gap-1 self-center">
                <Image
                  src={styleboard}
                  alt="Styleboard for the site redesign"
                  className="shadow-md"
                />
                <figcaption className="text-sm text-gray-500">
                  Styleboard for the site redesign.
                </figcaption>
              </figure>
              <section id="body4" className="flex gap-2 flex-col">
                <h4>
                  Prototyping, Iteration & Final Presentation
                </h4>
                <p>
                  I began with basic sketches of the layout, and quickly moved onto Figma to produce prototypes of multiple fidelity levels. Each iteration I was able to gather feedback from classmates, the professor, and acquaintances who I used as subjects in a task walkthrough. This feedback was very important as I was able to see what was and wasn’t working and implement that into the next iteration.                  </p>
                <p>
                  The project culminated in a high-fidelity, clickable Figma prototype spanning multiple pages, with a particular emphasis on donor pathways. I also created a slide deck to pitch the redesign, outlining my research, design decisions, and how the final solution addressed the original user group goals.                </p>
              </section>
            </div>
          </div>
          <div className="p-6 flex flex-col gap-4">
            <div className="flex gap-1 items-center">
              <h4>
                Design Artifacts
              </h4>
              <IoMdApps size={20} />
            </div>
            <div className="bg-gray-200">
              <ImageGallery
                ref={galleryRef}
                items={images}
                onSlide={(index) => console.log("Slid to", index)}
              />
            </div>

          </div>
        </main>
        <footer className='px-6 py-10 bg-gray-800 flex justify-center text-white align-center'>
          <p>&copy; {getCurrentYear()} Riley Pankow. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}