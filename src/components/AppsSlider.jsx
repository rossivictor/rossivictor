import React from "react";
import Image from "next/image";

export default function AppsSlider() {
    const appLogos = [
        "/logos/npm.png",
        "/logos/zustand.png",
        "/logos/visual-studio-code.png",
        "/logos/github.png",
        "/logos/next-js.png",
        "/logos/less.png",
        "/logos/react.png",
        "/logos/typescript.png",
        "/logos/javascript.png",
        "/logos/jquery.png",
        "/logos/bootstrap.png",
        "/logos/git.png",
        "/logos/figma.png",
        "/logos/tailwind-css.png",
        "/logos/adobe-xd.png",
        "/logos/photoshop.png",
        "/logos/illustrator.png",
        "/logos/html5.png",
        "/logos/redux.png",
        "/logos/sass.png",
        "/logos/css3.png",
        "/logos/wordpress.png"
    ];

    const sliderLogos = [...appLogos, ...appLogos, ...appLogos];

    return (
        <section id="wrapper" className="py-4 bg-[#efefef] dark:bg-[#2B3133]">
            <div className="marquee">
                <div className="marquee__group">
                    {appLogos.map((logo) => (
                        <Image key={logo} src={logo} alt="Logo" width={800} height={560} className="opacity-70 dark:opacity-50" />
                    ))}
                </div>

                <div aria-hidden="true" className="marquee__group">
                    {appLogos.map((logo) => (
                        <Image key={logo} src={logo} alt="Logo" width={800} height={560} className="opacity-70 dark:opacity-50" />
                    ))}
                </div>
            </div>
        </section>
    );
}