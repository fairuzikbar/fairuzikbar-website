import Image from 'next/image'
import Link from "next/link";

export function Hero() {
  return (
    
    <section className="flex flex-col bg-white dark:bg-gray-900 h-screen">
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <div className="lg:tooltip md:tooltip lg:tooltip-right md:tooltip-right" data-tip="👋 Hi, I&apos;m @fairuzikbar">
              <Image
                src="/assets/images/profile.jpg"
                width={150}
                height={150}
                style={{borderRadius:"50%"}}
                className='m-auto'
                alt="Picture of the author"
              />
            </div>
            <h1 className="text-5xl font-bold">Fairuz Ikbar</h1>
            <p className="mb-1 font-normal text-gray-500 lg:text-xl sm:px-16 dark:text-gray-400">Software Engineer</p>
            <div className='border-2 my-3 rounded-lg'>
              <p className="p-5 text-justify max-w-xl font-normal text-gray-500 dark:text-gray-400">
                👋 Hi, I&apos;m @fairuzikbar<br/><br/>
                I&apos;m interested in Backend and Frontend Development | I&apos;m currently working as Software Engineer | I&apos;m interested on programming, design, and photography
              </p>
            </div>
            <Link href={'/about'} className="btn text-base font-medium text-center text-white bg-slate-400 hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-white">
              Learn more
              <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}