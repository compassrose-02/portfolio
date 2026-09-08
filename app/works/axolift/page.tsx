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
import cargraphic from './img/cargraphic.png';
import rolediagram from './img/rolediagram.png';
import fflogo from './img/fflogo.png'
import fblogo from './img/firebaselogo.png'

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
      description: "High-fidelity desktop dashboard for managing rides and volunteers.",
    },
    {
      original: dashboardlofi.src,
      thumbnail: dashboardlofithumb.src,
      description: "Low-fidelity dashboard wireframe exploring the app's core layout.",
    },
    {
      original: dashboardmobile.src,
      thumbnail: dashboardmobilethumb.src,
      description: "Mobile dashboard concept for accessing ride operations on the go.",
    },
    {
      original: designsystem.src,
      thumbnail: designsystemthumb.src,
      description: "Visual design system defining AxoLift's reusable interface elements.",
    },
    {
      original: persona.src,
      thumbnail: personathumb.src,
      description: "User persona capturing the needs of a volunteer transportation coordinator.",
    },
  ]

  const galleryRef = useRef<ImageGalleryRef>(null);

  return (
    <div className="flex" id="mainContainer">
      <WorkPageNav />
      <div className="bg-gray-100 w-full flex-1 min-w-0">
        <header className="h-70 flex flex-row justify-between bg-[#373D97]">
          <div className="relative">
            <ExportedImage src={herologo} alt="axolift logo" className="h-full aspect-square" id="herologo" />
            <h2 className="px-12 text-white">
              AxoLift Capstone Project
            </h2>
          </div>
          <ExportedImage src={heromockup} alt="axolift hero mockup" className="h-full aspect-square" id="heromockup" />
        </header>
        <main>
          <section className="bg-white pt-3 flex flex-col gap-10" id="top">
            <h3>
              Rochester Institute of Technology | 1/2025-12/2025
            </h3>
            <p className="">
              As part of a small team, I helped create a web app for a group of volunteer medical transport organizations around Rochester to streamline their operations. I contributed to research, site architecture, visual design, and front-end development.
            </p>
          </section>
          <section className="bg-gray-100 flex flex-col gap-5 relative overflow-clip" id="context">
            <h3>
              Context
            </h3>
            <div className="h-50 flex flex-col justify-between">
              <p className="self-start">
                Volunteer medical transport organizations around Rochester provide ride services to local senior citizens.
              </p>
              <p className="self-end">
                Each organization operated in a unique way with different software, or no software at all.
              </p>
            </div>
            {/* TODO: make this responsive so it looks proper as the page shrinks */}
            <ExportedImage src={cargraphic} alt="graphic of a car going down a road" id="cargraphic" />
          </section>
          <section className="bg-white flex gap-10" id="goals">
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col gap-5">
                <h3>
                  Goals
                </h3>
                <ul className="list-disc list-inside flex flex-col gap-3">
                  <li>
                    Create a web app to automate and track operations for multiple different medical transport organizations.
                  </li>
                  <li>
                    The app will track rides, and different types of volunteers will be able to access their part of the ride workflow through the app.
                  </li>
                  <li>
                    Different organizations run differently, so the software should be configurable to fit how they work.
                  </li>
                </ul>
              </div>
              <ExportedImage src={phonemockup} alt="phone mockup of the app" className="h-50 w-auto" />
            </div>
          </section>
          <section className="bg-gray-100 flex flex-col gap-5" id="design">
            <div className="flex justify-between w-full items-center">
              <div className="flex flex-col gap-5">
                <h3>
                  Design Process
                </h3>
                <div className="flex flex-col gap-3">
                  <p>
                    Our group assumed that the app would be conceptually similar to a rideshare app like Uber or Lyft. We were immediately proven wrong.
                  </p>
                  <p>
                    We got feedback that organizations did not want their riders to have to use our app in any way. Phone calls represented an important social connection for seniors in a way that I hadn’t considered as a young person.
                  </p>
                  <p>
                    The process of hammering out details and gaining consensus on design requirements was an important experience in negotiating between different stakeholders in a productive manner.
                  </p>
                </div>
              </div>
              <ExportedImage src={rolediagram} alt="phone mockup of the app" className="h-50 w-auto" />
            </div>
          </section>
          <section className="bg-white flex flex-col gap-5" id="dev">
            <div className="flex justify-between w-full items-center gap-10">
              <div className="flex flex-col gap-5">
                <h3>
                  Development Process
                </h3>
                <div className="flex flex-col gap-3">
                  <p>
                    This was the most challenging part of the project. We built the front-end in FlutterFlow, and quickly ran into issues where we needed more specific features than the platform offered.
                  </p>
                  <p>
                    A significant revision of the back-end Firebase architecture had to be done as well, which proved to be a massive time crunch. Despite the setbacks, our team was able to complete a viable product by the end of the term.
                  </p>
                  <p>
                    Final deployment went well, and we were able to demo the app’s functionality live to the clients during our final presentation.
                  </p>
                </div>
              </div>
              <div id="imagecontainer" className="">
                <ExportedImage src={fblogo} alt="flutterflow logo" className="h-50 w-auto self-start" />
                <ExportedImage src={fflogo} alt="firebase logo" className="h-50 w-auto self-end" />

              </div>
            </div>
          </section>
          <section className="bg-gray-200 flex flex-col gap-5" id="results">
            <h3>
              Results / Postmortem
            </h3>
            <div className="flex flex-col gap-5">
              <p>
                Our app didn’t get selected for further use, but the project was a success in the sense that we passed and learned a lot of important things.
              </p>
              <p>
                A lot of the things that set us back were architectural and tech selection decisions we made early on. FlutterFlow was attractive from the outset for its low-code but ended up taking more effort for the full front-end.
              </p>
              <p>
                Everyone will make mistakes. I’m happy that I experienced this in a classroom environment where I can take the lessons and apply them to my professional work. I think that’s an asset.
              </p>
            </div>
          </section>
          <section className="bg-gray-100 flex flex-col gap-5">
            <div className="flex gap-1 items-center">
              <h3>
                Design Artifacts
              </h3>
              <IoMdApps size={25} />
            </div>
            <div className="bg-white">
              <ImageGallery
                ref={galleryRef}
                items={images}
                onSlide={(index) => console.log("Slid to", index)}
              />
            </div>
          </section>
          {/* <div className="bg-white px-6 pb-10 pt-2">
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
          </div> */}
        </main>
        <footer className='px-6 py-10 bg-gray-800 flex justify-center text-white align-center'>
          <p>&copy; {getCurrentYear()} Riley Pankow. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}