'use client';

import WorkPageNav from "../components/workPageNav";
import { getCurrentYear } from "@/app/lib/utils";
import './page.css';
import ExportedImage from "next-image-export-optimizer";
 "next/image";
import ImageGallery from "react-image-gallery";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";
import { useRef } from "react";
import { IoMdApps } from "react-icons/io";

// import hero from './img/hero.png';
import finalscreens from './img/finalscreens.png';
import ogscreens from './img/ogscreens.png';
import moodboard from './img/gallery/moodboard.png';
import moodboardthumb from './img/gallery/moodboardthumb.png';
import colortexture from './img/gallery/colortexture.png';
import colortexturethumb from './img/gallery/colortexturethumb.png';
import persona from './img/gallery/persona.png';
import personathumb from './img/gallery/personathumb.png';
import typetreatment from './img/gallery/type.png';
import typetreatmentthumb from './img/gallery/typethumb.png';
export default function TasksEx() {


  const images: GalleryItem[] = [
    {
      original: moodboard.src,
      thumbnail: moodboardthumb.src,
    },
    {
      original: colortexture.src,
      thumbnail: colortexturethumb.src,
    },
    {
      original: persona.src,
      thumbnail: personathumb.src,
    },
    {
      original: typetreatment.src,
      thumbnail: typetreatmentthumb.src,
    },
  ]

  const galleryRef = useRef<ImageGalleryRef>(null);

  return (
    <div className="flex">
      <WorkPageNav />
      <div className="bg-gray-100 w-full">
        <header className="h-70 flex justify-between bg-gray-800">
          <h2 className="px-6 mt-auto text-white">
            Tasks Revamp Exercise
          </h2>
        </header>
        <main>
          <div className="bg-white px-6 pb-10 pt-2">
            <h3>
              Rochester Institute of Technology | 08/2025 - 12/2025
            </h3>
            <div id="ColGridContainer" className="mt-5">
              <section id="b1" className="flex flex-col gap-2">
                <h4>
                  Key Points
                </h4>
                <ul className="list-disc list-inside">
                  <li>
                    Redesigned the interface of an existing mobile app — Google Tasks — to completely change its visual style
                  </li>
                  <li>
                    Gained experience in UX research, using personas and moodboards to design for a new user group
                  </li>
                  <li>
                    Gained design experience in the use of texture, color, and typography to create a cohesive visual style
                  </li>
                </ul>
              </section>
              <section id="b2" className="flex flex-col gap-2">
                <h4>
                  Overview
                </h4>
                <p>
                  This exercise was part of my Graphic User Interface class in the fall of 2025. Choosing an existing app to work off of, I was tasked with changing the presentation and style of the app to focus on a new user group. I chose Google Tasks for its clear structure and plain style. I chose to refocus the app’s visual appearance to appeal to a more narrow user group, young adults and students.
                </p>
                <p>
                  I took an approach that was inspired a lot by pen-and-paper notes, stationery and bullet journalling. I created mood boards and a persona to further develop the aesthetic and the type of user I was designing for, created prototypes to explore color, texture and type treatment, and created a final mockup in Figma of the redesign after iteration.
                </p>
              </section>
              <section id="b3" className="flex flex-col gap-2">
                <h4>Original Screens</h4>
                <p>The original screens of Tasks app are plain. This works for a Google product, it fits with their design system and is meant to appeal to as many users as possible.</p>
                <ExportedImage
                  src={ogscreens}
                  alt="Original screens of the app before redesign"
                  className="rounded-lg border border-gray-300"
                />
              </section>
              <section id="b4" className="flex flex-col gap-2">
                <h4>Revamped Screens</h4>
                <p>The revamped screens show a more colorful and textured design style, focusing down on a user group who appreciate a more personal, expressive and fun interface.</p>
                <ExportedImage
                  src={finalscreens}
                  alt="Final screens of the app redesign, showing a more colorful and textured design style"
                  className="rounded-lg border border-gray-300"
                />
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