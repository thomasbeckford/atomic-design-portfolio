import HeroItems from "../Organisms/HeroItems";
import Image from "next/image";

export default function Experience() {
  return (
    <div id="experience" className=" container mx-auto  py-10">
      <h2 className="text-4xl text-center mb-20 pt-10 md:pt-0">About me</h2>

      <div className="md:flex md:justify-evenly mb-20 ">
        <div className="gap-4 w-full space-y-10 lg:space-y-0 lg:flex ">
          <figure>
            <Image
              src="/profile/with_chris.jpeg"
              alt="avatar"
              width={400}
              height={200}
              className="rounded-md object-cover max-h-36 w-auto mx-auto md:max-h-64"
            />

            <figcaption className="text-center text-sm w-56 mx-auto mt-2">
              With Christopher Chedeau (React Co-Creator)
            </figcaption>
          </figure>

          <figure>
            <Image
              src="/profile/with_kent.jpg"
              alt="avatar"
              className="rounded-md object-cover max-h-36 w-auto object-y-4 mx-auto md:max-h-64"
              width={400}
              height={200}
            />
            <figcaption className="text-center text-sm w-56 mx-auto mt-2">
              With Kent C. Dodds at Miami Conf
            </figcaption>
          </figure>

          <figure>
            <Image
              src="/profile/guitar.jpeg"
              alt="avatar"
              className="rounded-md object-cover max-h-36 w-auto object-y-4 mx-auto md:max-h-64"
              width={400}
              height={200}
            />
            <figcaption className="text-center text-sm w-56 mx-auto mt-2">
              Recording guitar for my band&apos;s album
            </figcaption>
          </figure>
        </div>

        <div className="  mx-auto mt-10 md:w-7/12">
          <h2 className="text-xl text-center mb-5 md:text-4xl md:text-right">
            Hi, I&apos;m Thomas E. Beckford.
            <br />I am a software developer.
          </h2>

          <p className="text-lg text-center md:text-right">
            As a self-taught developer with over 5 years of experience, I am
            passionate about meeting new people, playing musical instruments,
            and continuously learning new things. I enjoy spending my free time
            at the gym doing boxing and practicing my guitar skills. When it
            comes to my work, I am driven by my desire to stay up-to-date with
            the latest trends in the industry and improve my skills, whether it
            be through attending conferences, taking courses or learning from my
            peers.
          </p>
        </div>
      </div>
      <h2 className="text-4xl text-center mb-20 pt-10 md:pt-0 ">
        Some skills I&apos;ve acquired over the years
      </h2>
      <HeroItems />
    </div>
  );
}
