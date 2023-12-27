import Main from "../components/Templates/Main";
import Navbar from "../components/Organisms/Navbar";
import Footer from "../components/Templates/Footer";
import Projects from "../components/Templates/Projects";
import Experience from "../components/Templates/Experience";
import Head from "next/head";
import FloatingWhatsapp from "../components/Atoms/FloatingWhatsapp";
import AnimatedIntro from "../components/Templates/AnimatedIntro";
import { useEffect, useState } from "react";
import { Varela_Round } from "next/font/google";

const varela_round = Varela_Round({
  style: "normal",
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const [isAnimated, setIsAnimated] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimated(false);
    }, 1300);
  }, []);

  return (
    <main
      id="main"
      className={` text-slate-50 ${varela_round.className}  bg-gradient-to-b from-indigo-500 from-10% via-sky-500 via-20% to-blue-800 to-90% `}
    >
      <Head>
        <title>Thomas E. Beckford</title>
        <meta property="og:title" content="Thomas E. Beckford" key="title" />
        <meta property="og:description" content="Thomas E. Beckford" />
        <meta name="description" content="Thomas E. Beckford" key="desc" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>

      <AnimatedIntro isAnimated={isAnimated} />

      <div className={isAnimated ? "hidden" : "animate animate-fadeIn "}>
        <Navbar />
        <Main />
        <Experience />
        <Projects />
        <Footer />
        <FloatingWhatsapp />
      </div>
    </main>
  );
}
