import Image from 'next/image'
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faYoutube, faBehance, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function Hero() {
  return (
    <section className="flex flex-col bg-white dark:bg-gray-900 h-screen">
        <div className="m-auto lg:px-52 py-0.5 px-4 max-w-screen-xl text-center lg:py-16">
        <Image
          src="/assets/images/profile.jpg"
          width={150}
          height={150}
          style={{borderRadius:"50%"}}
          className='m-auto'
          alt="Picture of the author"
        />
            <h1 className="text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Fairuz Ikbar</h1>
            <p className="mb-1 font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Software Engineer</p>
            <FontAwesomeIcon icon={faInstagram} className='fa-xl mx-1' />
            <FontAwesomeIcon icon={faLinkedin} className='fa-xl mx-1' />
            <FontAwesomeIcon icon={faYoutube} className='fa-xl mx-1' />
            <FontAwesomeIcon icon={faBehance} className='fa-xl mx-1' />
            <FontAwesomeIcon icon={faGithub} className='fa-xl mx-1' />
            <FontAwesomeIcon icon={faEnvelope} className='fa-xl mx-1' />
            <div className='border-2 my-3 rounded-lg'>
            <p className="p-5 text-justify max-w-xl font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            👋 Hi, I’m @fairuzikbar<br/><br/>
    I’m interested in Backend and Frontend Development | I’m currently working as Software Engineer | I'm interested on programming, design, and photography</p>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <Link href="/about" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Learn more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </Link>
                <Link href="https://drive.google.com/file/d/1WNEWLO5Rcwr-3jloR_HL_yujwrwH0Mnf/view?usp=sharing" target='_blank' className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Download CV
                </Link>  
            </div>
        </div>
    </section>
  );
}