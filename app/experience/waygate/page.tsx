'use client';

import WorkPageNav from "../components/expPageNav";
import { getCurrentYear } from "@/app/lib/utils";
import './page.css';
import ExportedImage from "next-image-export-optimizer";
"next/image";

// import hero from './img/hero.png';
import turbofan from './img/Turbofan3_Unlabelled.gif';
import inspection from './img/mviq_inspection.png';
import ptz from './img/ptzselfie.jpg';

export default function Waygate() {

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
                    Served as on-site liaison for the international User Experience team, provided UX evaluation and competitive analysis for remote visual inspection products.
                  </li>
                  <li>
                    Created interface mockups, hardware supplemental material, and promotional material using Figma and the Adobe suite
                  </li>
                  <li>
                    Lead a project to revamp the product photography on the online storefront.
                  </li>
                </ul>
              </section>
              <section id="b2" className="flex flex-col gap-2">
                <h4>
                  Experience
                </h4>
                <p>
                  I interned at Waygate Technologies from January to June of 2024. Based in Skaneateles NY, Waygate designs and manufactures non-destructive testing equipment for industrial applications. During my intership I was able to contribute to the development and deployment of high-end video borescopes and pan-tilt-zoom inspection cameras.
                </p>
                <p>
                  I learned about remote visual inspection in the aerospace sector, where technicians use Waygate’s video borescopes to get an inside view of the most mission-critical areas of commercial gas turbines. I also gained important experience in designing touch interfaces for industrial equipment, where a user’s needs and constraints differ significantly from consumer devices.
                </p>
                <p>
                  I leveraged my design skills to create a graphical user guide for pan-tilt-zoom camera system assembly and startup. I also designed, proposed, and initiated a new product photography workflow to increase image quality for items on Waygate’s online storefront.
                </p>
              </section>
              <figure id="i1" className="flex flex-col items-center gap-1 self-center">
                <ExportedImage src={turbofan} alt="Turbofan Diagram" className="w-full h-auto shadow-md" />
                <figcaption className="text-sm text-gray-500">
                  The inner components of a commercial turbofan engine.
                </figcaption>
              </figure>
              <figure id="i2" className="flex flex-col items-center gap-1 self-center">
                <ExportedImage src={inspection} alt="MVIQ+ inspection" className="w-full h-auto shadow-md" />
                <figcaption className="text-sm text-gray-500">
                  An MVIQ+ borescope in use to inspect the interior of a gas turbine.
                </figcaption>
              </figure>
              <figure id="i3" className="flex flex-col items-center gap-1 self-center">
                <ExportedImage src={ptz} alt="PTZ Selfie" className="w-full h-auto shadow-md" />
                <figcaption className="text-sm text-gray-500">
                  The most expensive selfie I’ve ever taken, using the Everest Ca-Zoom HD.
                </figcaption>
              </figure>
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