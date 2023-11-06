import Image from "next/image";

export function AboutContent() {
  return (
    <section className="flex flex-col bg-white dark:bg-gray-900">
      <div className="hero">
        <div className="flex flex-col hero-content">
          <div className="flex flex-col lg:flex-row md:flex-row">
            <Image
              src="/assets/images/profile.jpg"
              width={150}
              height={150}
              style={{borderRadius:"50%"}}
              className='m-auto lg:mr-5 md:mr-5'
              alt="Picture of the author"
            />
            <div className="flex flex-col items-left my-auto text-center">
              <h1 className="2xl:text-5xl xl:text-5xl lg:text-4xl text-3xl font-bold lg:text-left md:text-left">Fairuz Ikbar W.</h1>
              <p className="font-normal text-gray-500 lg:text-xl dark:text-gray-400">Software Engineer</p>
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
              {/* ---------------- Skills ---------------- */}
              <h1 className="font-bold text-3xl mt-8">Skills</h1>
              <div className="divider m-0"></div>
              <div className="flex lg:flex-row md:flex-row flex-col max-w-xl w-full">
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 border-2 lg:mr-1 md:mr-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <h2 className="card-title">Basic</h2>
                              <ul className="list-none">
                                  <li>Google Cloud</li>
                                  <li>ReactJs</li>
                                  <li>C#</li>
                                  <li>VueJs</li>
                                  <li>NextJs</li>
                                  <li>Airflow</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 border-2 lg:mx-1 md:mx-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <h2 className="card-title">Intermediate</h2>
                              <ul className="list-none">
                                  <li>NodeJs</li>
                                  <li>ExpressJs</li>
                                  <li>Angular</li>
                                  <li>Python</li>
                                  <li>Jupyter</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 border-2 lg:ml-1 md:ml-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <h2 className="card-title">Advance</h2>
                              <ul className="list-none">
                                  <li>PostgreSQL</li>
                                  <li>HiveSQL</li>
                                  <li>SAS</li>
                                  <li>MySQL</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              {/* ---------------- Work Experience ---------------- */}
              <h1 className="font-bold text-3xl mt-8">Work Experience</h1>
              <div className="divider m-0"></div>
              <div className="flex lg:flex-row md:flex-row flex-col max-w-xl w-full">
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 lg:mr-1 md:mr-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <h2 className="card-title">Big Data Egineer</h2>
                              <h3>Bank OCBC NISP</h3>
                              <p>October 2022 - October 2023
                                <br/>South Tangerang, ID
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="lg:divider lg:divider-horizontal"></div>
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 lg:mx-1 md:mx-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <h2 className="card-title">Job Description</h2>
                              <ul>
                                <li className="list-disc">Migrate SAS Language to Hive SQL and Python (Jupyter)</li>
                                <li className="list-disc">UAT script Webstatement Phase 2 using python</li>
                                <li className="list-disc">Replicate table using Airflow</li>
                                <li className="list-disc">Enhancement existing function in postgreSQL</li>
                                <li className="list-disc">Create new report services using Business Intelligence Microsoft Visual Studio</li>
                                <li className="list-disc">Create function for reporting services using Hive SQL</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="divider m-0"></div>
              <div className="flex lg:flex-row md:flex-row flex-col max-w-xl w-full">
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 lg:mr-1 md:mr-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <h2 className="card-title">IT Trainee</h2>
                              <h3>Enigma Camp</h3>
                              <p>July 2022 - October 2022
                                <br/>South Jakarta, ID
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="lg:divider lg:divider-horizontal"></div>
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 lg:mx-1 md:mx-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <h2 className="card-title">Job Description</h2>
                              <ul>
                              Learn back end and front end development using
                                <li className="list-disc">NodeJs and ExpressJs (Backend)</li>
                                <li className="list-disc">PostgreSQL (Bigdata)</li>
                                <li className="list-disc">Angular (Frontend)</li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
      </div>
    </section>
  );
}