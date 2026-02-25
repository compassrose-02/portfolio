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
import shutterkeyframes from "./img/shutterkeyframes.png";
import vsmile from "./img/vsmile.png";
import finalscreen from "./img/gallery/finalscreen.png"
import finalscreenthumb from "./img/gallery/finalscreenthumb.png"
import initialscreen from "./img/gallery/initialscreen.png"
import initialscreenthumb from "./img/gallery/initialscreenthumb.png"
import moodboard from "./img/gallery/moodboard.png"
import moodboardthumb from "./img/gallery/moodboardthumb.png"

export default function Sony() {


  const images: GalleryItem[] = [
    {
      original: finalscreen.src,
      thumbnail: finalscreenthumb.src,
    },
        {
      original: initialscreen.src,
      thumbnail: initialscreenthumb.src,
    },
        {
      original: moodboard.src,
      thumbnail: moodboardthumb.src,
    },
  ]

  const galleryRef = useRef<ImageGalleryRef>(null);

  return (
    <div className="flex">
      <WorkPageNav />
      <div className="bg-gray-100 w-full">
        <header className="h-70 flex justify-between bg-gray-800">
          <h2 className="px-6 mt-auto text-white">
            Whimsical Camera Exercise
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
              <section id="b2" className="flex flex-col gap-2">
                <h4>
                  Overview
                </h4>
                <p>
                  This exercise was part of my Graphic User Interface class in the fall of 2025. We were organized into groups of three, and directed to create short design briefs to pass to another group. The professor stipulated that the only thing required for the design brief was that it had to be related to a button. There are a lot of different uses for buttons in a user interface, so people got creative.
                </p>
                <p>
                  The group we received briefs from would serve as our “client” for the designs we created. After a group brainstorming session, a round of sketches, and initial prototyping and critique, the final designs were presented to the client group for a “user test” where they would provide feedback on the user experience.
                </p>
              </section>
              <section id="b3" className="flex flex-col gap-2">
                <h4>
                  Group Prompts & Ideation
                </h4>
                <p>
                  When our group recieved our three button-related prompts, we decided to break it up so that each member did one prompt individually. The prompt I chose was as follows:
                </p>
                <p className="italic">
                  “Redesign the basic camera button to be suitable for children, this would be in an imaginary app that is specifically for nosy kids who wanna play in yo phone. (2-6 yrs)“
                </p>
                <p>
                  I spent the first working period brainstorming what exactly a “children’s camera app” would look like, and how it would differ from a normal camera app. The “camera app” prompt itself affords a very sparse interface, at its simplest just the camera view and a “shutter/record” button. I wanted to challenge myself to take this simple formula and convey it with as much whimsy and childlike joy as I possibly could.
                </p>
                <p>
                  I figured the best way to do this would be to draw from design patterns of other products made for children. In particular I thought back to my own childhood, playing Alphabet Park on the VTech V.Smile. I collected a series of images of children’s physical toys and screenshots of digital interactive games meant for kids, and built a quick moodboard conveying the aesthetic I wanted to bring forward.
                </p>
              </section>
              <figure id="i1" className="flex flex-col items-center gap-1 self-center">
                <ExportedImage src={vsmile} alt="2004 VTech V.Smile" className="w-full h-auto" />
                <figcaption className="text-sm text-gray-500">
                  The VTech V.Smile TV Learning System. Throwback for early 2000s kids. 
                </figcaption>
              </figure>
              <section id="b4" className="flex flex-col gap-2">
                <h4>
                  Design & Prototyping
                </h4>
                <p>
                  I knew that I wanted to take the skeuomorphic angle for the UI elements of this design.  Round, glossy plastic and big light-up buttons, oversized physical controls to convey simple, pure joy. Boiling down the mobile camera interface to its simplest form, I opted to just include a shutter button and a method to zoom in and out.
                </p>
                <p>
                  The function of the shutter button is straightforward, but I wanted to to something different with the zoom function. Instead of a two-finger pinching motion anywhere on the screen, I wanted to create a big silly gear/dial that rotated around the shutter button to change zoom. This is in part to engender maximum whimsy and partly a product of my photography experience, as a shutter button/analog dial combination is a pretty common interface element on cameras.
                </p>
                <p>
                  At first I created a Figma mockup using simple vector objects to ensure that the concept would play well with Figma’s animation features. After gathering feedback from peers and getting the dial to animate properly, I went into Spline to create 3D versions of the button and dial with proper lighting and textures. I then exported the 3D objects as flat .PNG files back into Figma, added some markings with inner shadows, implemented the animation, and added my own photo with a silly little sequence once you press the shutter button.
                </p>
              </section>
              <figure id="i2" className="flex flex-col items-center gap-1 self-center">
                <ExportedImage src={shutterkeyframes} alt="Shutter Keyframes" className="w-full h-auto" />
                <figcaption className="text-sm text-gray-500">
                  Keyframes for the shutter button animation. Yay, bee butt!
                </figcaption>
              </figure>
              <section id="b5" className="flex flex-col gap-2">
                <h4>
                  Critique & Takeaways
                </h4>
                <p>
                  The critique with the “user group” of students who gave us the prompts went well. My other group members did some really impressive stuff based on their prompts, and mine got a lot of laughs and smiles which I really appreciated. I wanted to engender a sense of simple whimsy and joy and I think I was quite successful in that.  
                </p>
                <p>
                  Taking an unclear prompt, exploring the possibility space, and creating a clear and strong vision out of the ambiguity is an important experience that I had during this exercise. I also got to practice using Figma’s animation features in a new way, and I was really happy with how the animations turned out. I think the dial animation in particular is a really fun little interaction that adds a lot of character to the design.
                </p>
              </section>
              <iframe id="b6" style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }} width={800} height={450} src="https://embed.figma.com/proto/3ZrfUTVqkPKFEPh7idjuOm/Exercise-2?node-id=292-71&scaling=scale-down&content-scaling=fixed&page-id=7%3A3&starting-point-node-id=291%3A105&embed-host=share" allowFullScreen></iframe>
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