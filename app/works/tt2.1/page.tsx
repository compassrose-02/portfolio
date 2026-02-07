import WorkPageNav from "../components/workPageNav";
import { getCurrentYear } from "@/app/lib/utils";
import './page.css';
import Image from "next/image";
import cfm56 from './img/cfm56.png';
import mviq_fd_2way from './img/mviq_fd_2way.png';
import hero from './img/hero.png';

export default function tt21() {

    const style = {
        backgroundImage: `url(${hero.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return (
        <div className="flex">
            <WorkPageNav />
            <div className="bg-gray-100">
                <header className="h-70 flex" style={style}>
                    {/* <Image
                        src={hero}
                        alt="MVIQ+ Turning Tool Integration Hero Image"
                        className="object-cover w-full"
                    /> */}
                    <h2 className="mt-auto px-6 text-white">
                        MVIQ+ Turning Tool Integration
                    </h2>
                </header>
                <main className="">
                    <div className="bg-white px-6 pb-10 pt-2">
                        <h3>
                            Waygate Technologies | 01/2024-07/2024
                        </h3>
                        <div id="ColGridContainer" className="mt-10">
                            <section id="body1" className="flex gap-4 flex-col">
                                <p>
                                    During my internship at Waygate Technologies, I designed a touch interface for a new software capability of the company’s flagship video borescope: the Mentor Visual IQ+.
                                </p>
                                <p>
                                    When inspecting gas turbines, technicians use a video borescope inserted into the engine casing to image the blades. The engine shaft is slowly turned using a small electric motor - a “turning tool” - to image each and every blade. The MVIQ+ has the ability to connect to a third-party turning tool and talk to it directly, enabling remote use and automatic inspection.
                                </p>
                            </section>
                            <section id="body2" className="flex gap-4 flex-col">
                                <p>
                                    During the design process I coordinated with different stakeholders to ensure that the interface met design requirements while remaining usable. The original functions of the turning tool remote needed to be included, plus the software-controlled automatic functions the MVIQ+ introduced, all on a relatively small section of the touch screen. The primary problem was conserving screen real-estate while offering a wealth of touch controls large enough for gloved hands. The balancing act of these various criteria was a fun challenge!
                                </p>
                                <p>
                                    I created wireframes and interactive prototypes in Figma to explore different layouts and control schemes. After several rounds of iteration and feedback from stakeholders, I finalized the design and created detailed specifications for the development team to implement. I gained experience with developer handoff as the finished design was implemented into the software. An updated version of the UI is still present on the device, I’m proud to have something I designed be used in the wild and making an impact!
                                </p>
                            </section>
                            <Image
                                id="img1"
                                src={cfm56}
                                alt="CFM56 Gas Turbine"
                            />
                            <Image
                                id="img2"
                                src={mviq_fd_2way}
                                alt="MVIQ+ and FutureDrive NG+"
                            />
                        </div>
                    </div>

                    {/*image gallery goes here */}

                </main>
                <footer className='px-6 py-10 bg-gray-800 flex justify-center text-white align-center'>
                    <p>&copy; {getCurrentYear()} Riley Pankow. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
}