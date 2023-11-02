import Head from "next/head";
import { Navbar } from '@/components/Navbar'
import { Footer } from "@/components/Footer";
import { AboutContent } from "@/components/AboutContent";

export default function About() {
  return (
    <>
      <Head>
      <title>fairuzikbar | about</title>
      <meta name="description" content="I am fii maarif a frontend developer, I have experience in creating and developing responsive and intuitive UI." />
      <meta property="og:title" content="fii maarif personal website"/>
      <meta property="og:description" content="I am fii maarif a frontend developer, I have experience in creating and developing responsive and intuitive UI."/>
      </Head>
      <Navbar />
      <AboutContent />
      <Footer />
    </>
  );
}