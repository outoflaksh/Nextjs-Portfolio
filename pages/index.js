import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Lakshya Malik</title>
      </Head>
      <Navbar />

      <div>
        <Hero />
      </div>
      <Footer />
    </>
  );
}
