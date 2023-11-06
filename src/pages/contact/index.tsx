import Head from "next/head";
import { Navbar } from '@/components/Navbar'
import { Footer } from "@/components/Footer";
import { ContactContent } from "@/components/ContactContent";

export default function Contact() {
  return (
    <>
      <Head>
        <title>fairuzikbar | contact</title>
        <meta name="description" content="I am Fairuz Ikbar. I am interested in Backend and Frontend Development | I am currently working as Software Engineer | I am interested on programming, design, and photography. I have experience in Bigdata Engineer." />
        <meta property="og:title" content="Fairuz Ikbar Personal Website"/>
        <meta property="og:description" content="I am Fairuz Ikbar. I am interested in Backend and Frontend Development | I am currently working as Software Engineer | I am interested on programming, design, and photography. I have experience in Bigdata Engineer."/>
      </Head>
      <Navbar />
      <ContactContent />
      <Footer />
    </>
  );
}