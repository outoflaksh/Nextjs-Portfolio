import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lakshya Malik</title>
      </Head>
      <Navbar />

      <div style={{ scrollSnapType: "y mandatory" }}>
        <Hero />
        <About />
        <Projects />
      </div>
      <Footer />
    </>
  );
}
