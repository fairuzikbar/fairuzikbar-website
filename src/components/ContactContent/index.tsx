import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faYoutube, faBehance, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

export function ContactContent() {
  return (
    <section className="flex flex-col bg-white dark:bg-gray-900 h-screen">
      <div className="hero min-h-screen">
        <div className="flex flex-col hero-content">
          <div className="flex flex-col lg:flex-row md:flex-row">
            <div className="flex flex-col items-left my-auto text-center">
              <h1 className="2xl:text-5xl xl:text-5xl lg:text-4xl text-3xl font-bold lg:text-left md:text-left">Fairuz Ikbar W.</h1>
              <p className="font-normal text-gray-500 lg:text-xl dark:text-gray-400">Software Engineer</p>
            </div>
          </div>
              <div className="divider m-0"></div>
              <p className="text-center max-w-xl font-normal text-gray-500 dark:text-gray-400">Feel free to contact me by submitting the form below and I will get back to you as soon as possible</p>
              <div className="flex lg:flex-row md:flex-row flex-col max-w-xl w-full">
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 border-2 lg:mr-1 md:mr-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                            <div className="flex lg:flex-row flex-col">
                                <div className="flex flex-row items-center lg:mr-1 my-1">
                                    <div className="flex justify-center items-center border-2 rounded-lg border-gray-400 mr-4" style={{height:"50px",width:"50px"}}>
                                    <FontAwesomeIcon icon={faEnvelope} className='fa-2xl' /></div>
                                    <div className="flex flex-col">
                                        <div className="font-bold">Email</div>
                                        <p><Link href={"mailto:fairuzikbar.space@gmail.com"}>fairuzikbar.space@gmail.com</Link></p>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center lg:ml-1 my-1">
                                    <div className="flex justify-center items-center border-2 rounded-lg border-gray-400 mr-4" style={{height:"50px",width:"50px"}}>
                                        <FontAwesomeIcon icon={faMapLocationDot} className='fa-2xl' />
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="font-bold">Location</div>
                                        <p>Jakarta, ID</p>
                                    </div>
                                </div>
                            </div>
                              <div className="flex flex-row justify-between border-2 rounded-lg border-gray-400 py-2 lg:px-10 px-2">
                                <Link href={"https://instagram.com/fairuzikbar"} target="_blank" className="lg:tooltip md:tooltip lg:tooltip-top md:tooltip-top" data-tip="Instagram">
                                    <FontAwesomeIcon icon={faInstagram} className='fa-2xl mr-2' />
                                </Link>
                                <Link href={"https://linkedin.com/in/fairuzikbar"} target="_blank" className="lg:tooltip md:tooltip lg:tooltip-top md:tooltip-top" data-tip="Linkedin">
                                    <FontAwesomeIcon icon={faLinkedin} className='fa-2xl mr-2' />
                                </Link>
                                <Link href={"https://youtube.com/fairuzikbar"} target="_blank" className="lg:tooltip md:tooltip lg:tooltip-top md:tooltip-top" data-tip="YouTube">
                                    <FontAwesomeIcon icon={faYoutube} className='fa-2xl mr-2' />
                                </Link>
                                <Link href={"https://behance.net/fairuzikbar"} target="_blank" className="lg:tooltip md:tooltip lg:tooltip-top md:tooltip-top" data-tip="Behance">
                                    <FontAwesomeIcon icon={faBehance} className='fa-2xl mr-2' />
                                </Link>
                                <Link href={"https://github.com/fairuzikbar"} target="_blank" className="lg:tooltip md:tooltip lg:tooltip-top md:tooltip-top" data-tip="Github">
                                    <FontAwesomeIcon icon={faGithub} className='fa-2xl mr-2' />
                                </Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <Link href={'https://drive.google.com/file/d/1WNEWLO5Rcwr-3jloR_HL_yujwrwH0Mnf/view?usp=drive_link'} target="_blank" className="btn text-base font-medium text-center text-white bg-slate-400 hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-700 dark:hover:bg-slate-700 dark:hover:text-white">
              Download CV
            </Link>
        </div>
      </div>
    </section>
  );
}