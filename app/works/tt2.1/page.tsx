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
        },
    ]

    const galleryRef = useRef<ImageGalleryRef>(null);

    return (
        <div className="flex">
            <WorkPageNav />
            <div className="bg-gray-100 w-full">
                <header className="h-70 flex" style={style}>
                    <h2 className="mt-auto px-6 text-white">
                        MVIQ+ Turning Tool Integration
                    </h2>
                </header>
                <main className="">
                    <div className="bg-white px-6 pb-10 pt-2">
                        <h3>
                            Waygate Technologies | 01/2024 - 07/2024
                        </h3>
                        <div id="ColGridContainer" className="mt-10">
                            <section id="body0" className="flex gap-2 flex-col">
                                <h4>
                                    Key Points
                                </h4>
                                <ul className="list-disc list-inside">
                                    <li>
                                        Designed interface for new software functionality on flagship video borescope product using Figma
                                    </li>
                                    <li>
                                        Coordinated with internal and external stakeholders to integrate functions across platforms and between devices
                                    </li>
                                </ul>
                            </section>
                            <section id="body1" className="flex gap-2 flex-col">
                                <h4>
                                    Overview
                                </h4>
                                <p>
                                    During my internship at Waygate Technologies, I designed a touch interface for a new software capability of the company’s flagship video borescope: the Mentor Visual IQ+.
                                </p>
                                <p>
                                    When inspecting gas turbines, technicians use a video borescope inserted into the engine casing to image the blades. The engine shaft is slowly turned using a small electric motor - a “turning tool” - to image each and every blade. The MVIQ+ has the ability to connect to a third-party turning tool and talk to it directly, enabling remote use and automatic inspection.
                                </p>
                            </section>
                            <section id="body2" className="flex gap-2 flex-col">
                                <h4>
                                    Design Process
                                </h4>
                                <p>
                                    During the design process I coordinated with different stakeholders to ensure that the interface met design requirements while remaining usable. The original functions of the turning tool remote needed to be included, plus the software-controlled automatic functions the MVIQ+ introduced, all on a relatively small section of the touch screen. The primary problem was conserving screen real-estate while offering a wealth of touch controls large enough for gloved hands. The balancing act of these various criteria was a fun challenge!
                                </p>
                                <p>
                                    I created wireframes and interactive prototypes in Figma to explore different layouts and control schemes. After several rounds of iteration and feedback from stakeholders, I finalized the design and created detailed specifications for the development team to implement. I gained experience with developer handoff as the finished design was implemented into the software. An updated version of the UI is still present on the device, I’m proud to have something I designed be used in the wild and making an impact!
                                </p>
                            </section>
                            <figure id="img1" className="flex flex-col items-center gap-1 self-center">
                                <ExportedImage src={cfm56} alt="CFM56 Gas Turbine" className="w-full h-auto shadow-md" />
                                <figcaption className="text-sm text-gray-500">
                                    The CFM56 is a popular commercial gas turbine. Turning tool integration was tested on an on-site example of this model.
                                </figcaption>
                            </figure>
                            <figure id="img2" className="flex flex-col items-center gap-1 self-center">
                                <ExportedImage src={mviq_fd_2way} alt="MVIQ+ and FutureDrive NG+" className="w-full h-auto shadow-md" />
                                <figcaption className="text-sm text-gray-500">
                                    The MVIQ+ borescope and FutureDrive NG+ turning tool.
                                </figcaption>
                            </figure>
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