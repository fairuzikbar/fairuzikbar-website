import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faYoutube, faBehance, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export function AboutHero() {
  return (
    <section className="flex flex-col bg-white dark:bg-gray-900">
      <div className="hero">
        <div className="flex flex-col hero-content text-center">
          <div className="flex flex-col lg:flex-row md:flex-row">
            <Image
              src="/assets/images/profile.jpg"
              width={150}
              height={150}
              style={{borderRadius:"50%"}}
              className='m-auto lg:mr-5 md:mr-5'
              alt="Picture of the author"
            />
            <div className="flex flex-col items-left my-auto">
              <h1 className="2xl:text-5xl xl:text-5xl lg:text-4xl text-3xl font-bold lg:text-left md:text-left">Fairuz Ikbar W.</h1>
              <p className="font-normal text-gray-500 lg:text-xl dark:text-gray-400">Software Engineer</p>
              {/* <Link href={'/about'} className="btn text-base font-medium text-center text-white bg-slate-400 hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-white">
              Learn more
              <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </Link> */}
              {/* <div className="flex flex-row">
                <FontAwesomeIcon icon={faInstagram} className='fa-xl mx-1' />
                <FontAwesomeIcon icon={faLinkedin} className='fa-xl mx-1' />
                <FontAwesomeIcon icon={faYoutube} className='fa-xl mx-1' />
                <FontAwesomeIcon icon={faBehance} className='fa-xl mx-1' />
                <FontAwesomeIcon icon={faGithub} className='fa-xl mx-1' />
                <FontAwesomeIcon icon={faEnvelope} className='fa-xl mx-1' />
              </div> */}
            </div>
          </div>
          <div className='border-2 my-3 rounded-lg'>
                <p className="p-5 text-justify max-w-xl font-normal text-gray-500 dark:text-gray-400">
                Lulusan Sarjana Terapan Teknik daru jurusan Teknik Pengelolaan dan Perawatan Alat Berat yang
                melakukan career shifting ke bidang IT. Belajar Full Stack Development dengan menggunakan
                NodeJs (back-end) dan Angular (front-end) selama 2 bulan. Pernah bekerja sebagai Big Data Engineer
                di bank OCBC NISP.
                </p>
              </div>
            
        </div>
      </div>
    </section>
  );
}