import Text from "../Atoms/Text";
import Image from "next/image";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const projectItems = [
  {
    title: "Soy Menu",
    description: `Provides a service to create digital menus for restaurants, with an easy and straightforward process for restaurant owners to use.`,
    href: "https://soymenu.com",
    image: "/images/projects/soymenu.svg",
  },
  {
    title: "SpiritSwap v2",
    description: `
      Decentralized exchange that offers trading, staking, farming, and now lending services to incentivize participants on the network.
      `,
    href: "https://spiritswap.finance/",
    image: "/images/projects/spiritswap.png",
  },

  {
    title: "Fuel",
    description:
      "Fuel helps creators build their own platform where they can engage directly with their fans ans monetize independently.",
    href: "https://www.onfuel.io/",
    image: "/images/projects/fuel.svg",
  },
  {
    title: "Mat.Joe",
    description: `Mat.Joe the 1st NFT drop, bringing tomorrowland Djs MAT.JOE to your house party`,
    href: "https://www.matjoelabamba.io/",
    image: "/images/projects/matjoe.jpeg",
  },

  {
    title: "FitGMR App",
    description: `A complete esports performance and player development system that provides game coaching, health and wellness services to gamers`,
    href: "https://www.fitgmr.gg/",
    image: "/images/projects/fitgmr.jpeg",
  },
  {
    title: "SwiftDoc App",
    description: `Platform that connects patients with doctors and medical professionals in real-time.`,
    href: "https://swiftdoc.com/",
    image: "/images/projects/swiftdoc.jpeg",
  },

  {
    title: "First On Site",
    description: `First On Site Restoration is a full-service restoration company that provides emergency services.`,
    href: "https://firstonsite.com/",
    image: "/images/projects/first-on-site.jpeg",
  },
  {
    title: "LevyGorvy App",
    description: `Custom CRM for the art gallery to manage their clients and their art pieces.`,
    href: "https://www.levygorvy.com/",
    image: "/images/projects/levygorvy.png",
  },
  {
    title: "Scroll Animated",
    description: `A simple scroll animation portfolio using React Next FramerMotion and Tailwind.`,
    href: "https://scroll-animated.vercel.app/",
    image: "/videos/scroll-animated.mov",
  },
];

export default function Projects() {
  const [copyText, setCopyText] = useState("Click to copy url");

  const copyUrl = (e: Event, href: string) => {
    navigator.clipboard.writeText(href);
    e.stopPropagation();
    setCopyText("Copied!");
  };

  const openUrl = (href: string) => {
    window.open(href, "_blank");
  };

  return (
    <div id="projects" className="md:my-20">
      <h2 className="text-4xl text-center mb-20 pt-10 md:pt-0">
        Some of the software development projects I&apos;ve contributed to.
      </h2>

      <div className=" container mx-auto  space-y-10  rounded-lg  p-0 md:p-16  ">
        <div className="grid gap-2 justify-items-center 2xl:grid-cols-3 xl:grid-cols-2 ">
          {projectItems.map((item) => (
            <div
              id={`card-${item.title}`}
              key={item.title}
              className="shadow-2xl rounded-lg ring-offset-4  transition-all duration-500 ease-in-out bg-blue-700 cursor-pointer"
              onClick={() => openUrl(item.href)}
              onMouseEnter={() => setCopyText("Click to copy url")}
            >
              <div className="p-5 h-40 rounded-lg  hover-img ">
                <div className="gap-5 mx-auto w-full text-center  flex ">
                  <Toaster />

                  {item.image.includes(".mov") ? (
                    <video
                      className="w-20 h-24 relative mx-auto md:w-40 md:h-24 "
                      autoPlay
                      loop
                      muted
                    >
                      <source src={item.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <figure className="w-20 h-24 relative mx-auto md:w-40 md:h-24 ">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        unoptimized
                        className="object-contain"
                      />
                    </figure>
                  )}

                  <figcaption
                    className="m-2"
                    onClick={(e: any) => copyUrl(e, item.href)}
                  >
                    <p className="px-3 py-2 hover:ring-4 ring-red-500 bg-white rounded-lg text-black ">
                      {copyText}
                    </p>
                  </figcaption>

                  <div className="w-5/6">
                    <Text size="xl" className="mb-2">
                      {item.title}
                    </Text>
                    <Text size="sm" className="text-right font-poppins">
                      {item.description}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
