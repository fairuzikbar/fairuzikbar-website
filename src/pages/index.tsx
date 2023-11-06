import Head from "next/head";
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Hero } from "@/components/Hero";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
      <title>fairuzikbar</title>
      <meta name="description" content="I am Fairuz Ikbar. I am interested in Backend and Frontend Development | I am currently working as Software Engineer | I am interested on programming, design, and photography. I have experience in Bigdata Engineer." />
      <meta property="og:title" content="Fairuz Ikbar Personal Website"/>
      <meta property="og:description" content="I am Fairuz Ikbar. I am interested in Backend and Frontend Development | I am currently working as Software Engineer | I am interested on programming, design, and photography. I have experience in Bigdata Engineer."/>
    </Head>
    <Navbar/>
    <Hero/>
    <Footer/>
    </>
  )
}
