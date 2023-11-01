import Head from "next/head";
import { Navbar } from '@/components/Navbar'
import { Footer } from "@/components/Footer";
import { AboutDesc } from "@/components/About";

export default function Portofolio() {
  return (
    <>
      <Head>
      <title>fairuzikbar | Portofolio</title>
      <meta name="description" content="I am fii maarif a frontend developer, I have experience in creating and developing responsive and intuitive UI." />
      <meta property="og:title" content="fii maarif personal website"/>
      <meta property="og:description" content="I am fii maarif a frontend developer, I have experience in creating and developing responsive and intuitive UI."/>
      </Head>
      <Navbar />
      <AboutDesc />
      <Footer />
    </>
  );
}