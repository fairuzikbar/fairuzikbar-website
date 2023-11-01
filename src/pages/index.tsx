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
    </Head>
    <div>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
    </>
  )
}
