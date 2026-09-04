'use client';

import WorkPageNav from "../components/workPageNav";
import { getCurrentYear } from "@/app/lib/utils";
import './page.css';
import ExportedImage from "next-image-export-optimizer";
import ImageGallery from "react-image-gallery";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";
import { useRef } from "react";
import { IoMdApps } from "react-icons/io";

import cfm56 from './img/cfm56.png';
import mviq_fd_2way from './img/mviq_fd_2way.png';
import hero from './img/hero.png';
import mviq_ui from './img/gallery/mviq_ui.jpg';
import mviq_uithumb from './img/gallery/mviq_uithumb.jpg';
import inspectionVisual from './img/inspection-visual.png';
import screen1 from './img/screen1.png'
import screen2 from './img/screen2.png'
import screen3 from './img/screen3.png'

export default function TT21() {

    const style = {
        backgroundImage: `linear-gradient(180deg,rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 70%, rgba(0, 0, 0, 0.8) 100%),url(${hero.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    const images: GalleryItem[] = [
        {
            original: mviq_ui.src,
            thumbnail: mviq_uithumb.src,
            description: "Prototype UI on the device"
        },
    ]

    const galleryRef = useRef<ImageGalleryRef>(null);

    return (
        <div className="flex">
            <WorkPageNav />
            <div className="bg-gray-100 w-full">
                <header className="h-70 flex" style={style}>
                    <h2 className="mt-auto px-12 text-white">
                        MVIQ+ Turning Tool Integration
                    </h2>
                </header>
                <main className="">
                    <section className="bg-white pt-3 flex flex-col gap-10" id="top">
                        <h3>
                            Waygate Technologies | 01/2024-07/2024
                        </h3>
                        <p className="">
                            During my internship I designed a touch interface for a new software capability{"\n"}
                            of the company’s flagship video borescope. The interface is live in production,{"\n"}
                            helping reduce the workload of industrial inspections.{"\n"}
                        </p>
                    </section>
                    <section className="bg-gray-100" id="context">
                        {/* TODO: parallax scroll on turbine image (maybe) */}
                        <h3>
                            Context
                        </h3>
                        <div>
                            <p>
                                Technicians inspect gas turbines with two tools.
                            </p>
                            <p>
                                One to rotate the assembly, and another to image each blade.
                            </p>
                        </div>
                        <div className="spacer"></div>
                        <p>
                            ...but two remotes for two tools is a handful!
                        </p>
                        <ExportedImage src={inspectionVisual} alt="Stylized render of the borescope and turning tool on a turbine" id="contextImage" />
                    </section>
                    <section className="bg-white flex gap-10" id="designGoals">
                        <div className="flex flex-col gap-5">
                            <h3>
                                Design Goals
                            </h3>
                            <div className="flex flex-col gap-4">
                                <p>
                                    Integrating the turning tool remote controls into the borescope touch UI makes the inspection workflow much simpler, but screen-space is very limited.
                                </p>
                                <p>
                                    Industrial users may be working with gloved hands, so big buttons are still a must.
                                </p>
                                <p>
                                    I had to design a complex interface, with large buttons, using minimal screen real-estate.
                                </p>
                            </div>
                        </div>
                        <ExportedImage src={mviq_fd_2way} alt="Graphic of 2-way communication between turning tool and borescope" className="h-auto shrink-0" />
                    </section>
                    <section className="bg-gray-100 flex flex-col gap-5">
                        <h3>
                            Process
                        </h3>
                        <p>
                            I worked at the problem with the company&apos;s international design team, product stakeholders, and technicians who actually use the devices:
                        </p>
                        <div className="" id="screensContainer">
                            <div>
                                <ExportedImage src={screen1} alt="First iteration of the turning tool integration menu" className="" />
                                <p>
                                    At first, all of the buttons made the menu cover the entire screen. Technicians couldn&apos;t see the camera feed!
                                </p>
                            </div>
                            <div className="self-center">
                                <ExportedImage src={screen2} alt="Second iteration of the turning tool integration menu" className="" />
                                <p>
                                    Splitting them into pages was better, but still bulky. It also sacrificed instant access to the second page controls.
                                </p>
                            </div>
                            <div className="self-end">
                                <ExportedImage src={screen3} alt="Third iteration of the turning tool integration menu" className="" />
                                <p>
                                    The breakthrough: Technicians either want all controls or a compact state readout. Let them minimize the controls, and move some to a settings page.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="bg-white flex flex-col gap-5">
                        <h3>
                            Results
                        </h3>
                        <div className="flex flex-col gap-4">
                            <p>
                                I also gained experience with developer handoff as the finished design was implemented into the software early 2025.
                            </p>
                            <p>
                                An updated version of the UI is still present on the device out in the field, resulting in less inspector workload and enabling hands-free turbine stage inspections.
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
                        <div className="bg-gray-200">
                            <ImageGallery
                                ref={galleryRef}
                                items={images}
                                onSlide={(index) => console.log("Slid to", index)}
                            />
                        </div>
                    </section>
                </main>
                <footer className='px-6 py-10 bg-gray-800 flex justify-center text-white align-center'>
                    <p>&copy; {getCurrentYear()} Riley Pankow. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}