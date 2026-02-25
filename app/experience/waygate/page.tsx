'use client';

import WorkPageNav from "../components/expPageNav";
import { getCurrentYear } from "@/app/lib/utils";
import './page.css';
import ExportedImage from "next-image-export-optimizer";
 "next/image";
import ImageGallery from "react-image-gallery";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";
import { useRef } from "react";
import { IoMdApps } from "react-icons/io";

// import hero from './img/hero.png';

export default function Waygate() {


  const images: GalleryItem[] = [
    // {
    //   original: finalscreen.src,
    //   thumbnail: finalscreenthumb.src,
    // },
  ]

  const galleryRef = useRef<ImageGalleryRef>(null);

  return (
    <div className="flex">
      <WorkPageNav />
      <div className="bg-gray-100 w-full">
        <header className="h-70 flex justify-between bg-gray-800">
          <h2 className="px-6 mt-auto text-white">
            Waygate Technologies
          </h2>
        </header>
        <main>
          <div className="bg-white px-6 pb-10 pt-2">
            <h3>
              1/2024 - 8/2024
            </h3>
            <div id="ColGridContainer" className="mt-5">
              <section id="b1" className="flex flex-col gap-2">
                <h4>
                  Key Points
                </h4>
                <ul className="list-disc list-inside">
                  <li>
                    Created a mobile mockup of a “whimsical children’s camera” based on a short student prompt
                  </li>
                  <li>
                    Gained experience in the design process - developing a short prompt into a refined idea and appearance
                  </li>
                  <li>
                    Gained experience in 3D interactive design using Spline
                  </li>
                  <li>
                    Applied Figma animations to create a novel interactive experience
                  </li>
                </ul>
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