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
import phonemockup from './img/phonemockup.png';
import taskflow from './img/taskflow.png';
import herologo from './img/herologo.png';
import heromockup from './img/heromockup.png';
import dashboardhifi from './img/gallery/dashboardhifi.png';
import dashboardhifithumb from './img/gallery/dashboardhifithumb.png';
import dashboardlofi from './img/gallery/dashboardlofi.png';
import dashboardlofithumb from './img/gallery/dashboardlofithumb.png';
import dashboardmobile from './img/gallery/dashboardmobile.png';
import dashboardmobilethumb from './img/gallery/dashboardmobilethumb.png';
import designsystem from './img/gallery/designsystem.png';
import designsystemthumb from './img/gallery/designsystemthumb.png';
import persona from './img/gallery/persona.png';
import personathumb from './img/gallery/personathumb.png';

export default function Sony() {


  const images: GalleryItem[] = [
    {
      original: dashboardhifi.src,
      thumbnail: dashboardhifithumb.src,
    },
    {
      original: dashboardlofi.src,
      thumbnail: dashboardlofithumb.src,
    },
    {
      original: dashboardmobile.src,
      thumbnail: dashboardmobilethumb.src,
    },
    {
      original: designsystem.src,
      thumbnail: designsystemthumb.src,
    },
    {
      original: persona.src,
      thumbnail: personathumb.src,
    },
  ]

  const galleryRef = useRef<ImageGalleryRef>(null);

  return (
    <div className="flex">
      <WorkPageNav />
      <div className="bg-gray-100 w-full">
        <header className="h-70 flex flex-row justify-between bg-[#373D97]">
          <div className="flex flex-col justify-between">
            <ExportedImage src={herologo} alt="axolift logo" className="h-full aspect-square"/>
            <h2 className="px-6 text-white">
              AxoLift Capstone Project
            </h2>
          </div>
          <ExportedImage src={heromockup} alt="axolift hero mockup" className="h-full aspect-square" id="heromockup"/>
        </header>
        <main>
          <div className="bg-white px-6 pb-10 pt-2">
            <h3>
              Rochester Institute of Technology | 01/2025 - 12/2025
            </h3>
            <div id="ColGridContainer" className="mt-5">
              <section id="b1" className="flex flex-col gap-2">
                <h4>
                  Key Points
                </h4>
                <ul className="list-disc list-inside">
                  <li>
                    Created a multiplatform app for a real-world group of volunteer organizations
                  </li>
                  <li>
                    Negotiated project requirements with multiple conflicting stakeholders
                  </li>
                  <li>
                    Contributed to research, site architecture, visual design, and front-end development
                  </li>
                  <li>
                    Gained important experience in communication, software development, and B2B-SaaS operations
                  </li>
                </ul>
              </section>
              <section id="b2" className="flex flex-col gap-2">
                <h4>
                  Intro & Overview
                </h4>
                <p>
                  AxoLift is a multiplatform app produced by my team as part of our Senior Development Capstone Project. The objective of the class was to produce a fully-featured app based on the requirements of a real-world client group, which would then be deployed and used in the real world if selected. The clients were a group of volunteer organizations around Rochester who provide suburban transportation and rideshare services to the elderly population.
                </p>
                <p>
                  Throughout this year-long course sequence I helped negotiate a common set of requirements with multiple client orgs that often had different ways of doing things, conducted design research and ideated on a visual look-and-feel that defined the app’s personality, created task flow diagrams, helped produce prototypes of multiple fidelity levels, lead presentations to share our progress with the clients, and contributed significantly to the app’s front-end development.
                </p>
                <p>
                  In the end our app was not selected by the clients for real-world use, but the project still offered a wealth of lessons and experience in teamwork, communication, new software tools I wasn’t familiar with before, and end-to-end experience in a SaaS-like development flow.
                </p>
              </section>
              <figure id="i1" className="flex flex-col items-center gap-1 self-center">
                <ExportedImage src={phonemockup} alt="AxoLift Phone Mockup" className="w-full h-auto" />
                <figcaption className="text-sm text-gray-500">
                  A phone mockup I created to help visualize the app&apos;s interface
                </figcaption>
              </figure>
              <section id="b3" className="flex flex-col gap-2">
                <h4>
                  Initial Research & Project Requirements
                </h4>
                <p>
                  Before the project began, our team had a number of preconceived notions about what kind of app the client group would want. We had been briefed by our professor that we were making an app for volunteer senior transportation groups; we immediately assumed it would take the form of something like Uber or Lyft. We were immediately proven wrong.
                </p>
                <p>
                  We learned quite quickly that they did not want their riders to have to use our app in any way, instead opting for phone calls to schedule rides. The reason was that phone calls represented an important social connection for seniors in a way that I hadn’t considered as a young person. There is an element of human connection in a phone call, with idle chit-chat and small-talk, that isn’t there in an impersonal touch interface. I believe that this sort of empathetic thinking was important in creating a more effective interface for the actual user group, as opposed to one that I personally would use.
                </p>
                <p>
                  Throughout the first semester our group negotiated with the client group about design requirements. The different volunteer orgs had very different workflows, and criteria that often conflicted. The process of hammering out the details and gaining consensus was slow and sometimes frustrating, but it was an important experience in negotiating between different stakeholders in a productive manner.
                </p>
              </section>
              <figure id="i2" className="flex flex-col items-center gap-1 self-center">
                <ExportedImage src={taskflow} alt="AxoLift Task Flow Diagram" className="w-full h-auto shadow-md" />
                <figcaption className="text-sm text-gray-500">
                  A task flow diagram I created to help plan the architecture of the app
                </figcaption>
              </figure>

              <section id="b4" className="flex flex-col gap-2">
                <h4>
                  Design & Prototyping
                </h4>
                <p>
                  I did a lot of work on the design and prototyping of the app during the first leg of the project. As a means of getting proximate to the user group and centering empathy in our design thinking, I created personas for the different user roles the app would feature. Once we had our requirements locked in with the clients, I created task flow diagrams based on those requirements, and assisted another group member in creating a sitemap based on those task flows.
                </p>
                <p>
                  After planning the architecture of the UI, I assisted in creating the actual layout of the screens and interfaces with another group member. There was a large volume of screens, widgets, pop-ups and drop-downs compared to any class project I had done before, so we had to split up the different screens and states between multiple group members and coordinate to ensure they all shared the design language.
                </p>
                <p>
                  We presented multiple iterations of the site prototype to the clients for feedback, from a lo-fi wireframe with grey boxes and placeholders to a fully clickable Figma prototype for testing interactions. Each time, client feedback was taken into account for the next iteration.
                </p>
              </section>
              <section id="b5" className="flex flex-col gap-2">
                <h4>
                  Development & Deployment
                </h4>
                <p>
                  We began development of the actual app in fall of 2025. This was the most challenging part of the project, the short timeline meant we were very busy at almost all times. We onboarded a new group member partway through, the backend architecture changed drastically during development in a way that put a lot of pressure on the team. It was stressful, but I also consider it to be an important experience that I learned a lot of lessons from.
                </p>
                <p>
                  Final deployment went well, and we were able to demo the app’s functionality live to the clients during our final presentation. Our app wasn’t selected for further use, but the project as a whole was a success and the experience I gained was invaluable.
                </p>
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