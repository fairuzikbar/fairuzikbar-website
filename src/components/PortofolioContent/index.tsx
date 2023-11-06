import Link from "next/link";

export function PortofolioContent() {
  return (
    <section className="flex flex-col bg-white dark:bg-gray-900">
      <div className="hero">
        <div className="flex flex-col hero-content">
              {/* ---------------- Work Experience ---------------- */}
              <h1 className="font-bold text-3xl mt-8">Portofolio</h1>
              <div className="divider m-0"></div>
              <div className="flex lg:flex-row md:flex-row flex-col max-w-xl w-full">
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 lg:mr-1 md:mr-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <p>31 October 2023 - Present</p>
                              <h2 className="card-title">Personal Website V2</h2>
                              <h3>-</h3>
                              <div>
                                <div className="badge badge-outline">NextJs</div>
                                <div className="badge badge-outline">Tailwind CSS</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="lg:divider lg:divider-horizontal"></div>
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 lg:mx-1 md:mx-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <h2 className="card-title">Description</h2>
                              <p>Create my personal website using NextJs and Tailwind CSS. Published on this site</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="divider m-0"></div>
              <div className="flex lg:flex-row md:flex-row flex-col max-w-xl w-full">
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 lg:mr-1 md:mr-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <p>1 July 2023 - Present</p>
                              <h2 className="card-title">Personal Wedding Invitation</h2>
                              <h3>-</h3>
                              <div>
                                <div className="badge badge-outline">ReactJs</div>
                                <div className="badge badge-outline">VueJs</div>
                                <div className="badge badge-outline">Supabase</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="lg:divider lg:divider-horizontal"></div>
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 lg:mx-1 md:mx-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <h2 className="card-title">Description</h2>
                              <p>Create wedding invitation for my wedding using ReactJs</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="divider m-0"></div>
              <div className="flex lg:flex-row md:flex-row flex-col max-w-xl w-full">
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 lg:mr-1 md:mr-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <p>17 July 2023 - 2 October 2023</p>
                              <h2 className="card-title">Big Data Backlog Construction</h2>
                              <h3>Bank OCBC NISP</h3>
                              <div>
                                <div className="badge badge-outline">PostgreSQL</div>
                                <div className="badge badge-outline">SSIS</div>
                                <div className="badge badge-outline">Airflow</div>
                                <div className="badge badge-outline">Oozie</div>
                                <div className="badge badge-outline">HiveSQL</div>
                                <div className="badge badge-outline">Business Intelligence</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="lg:divider lg:divider-horizontal"></div>
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 lg:mx-1 md:mx-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <h2 className="card-title">Description</h2>
                              <ul>
                                <li className="list-disc">Replicate table using Airflow</li>
                                <li className="list-disc">Enhance function in postgreSQL</li>
                                <li className="list-disc">Create report services using Business Intelligence Microsoft Visual Studio and HiveSQL</li>
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
                              <p>1 July 2023 - 31 July 2023</p>
                              <h2 className="card-title">Personal Website</h2>
                              <h3>-</h3>
                              <div>
                                <div className="badge badge-outline">HTML</div>
                                <div className="badge badge-outline">Bootstrap</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="lg:divider lg:divider-horizontal"></div>
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 lg:mx-1 md:mx-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <h2 className="card-title">Description</h2>
                              <p>Create my personal website using Bootstrap. Published at <Link href={"http://fairuzikbar.github.io"} target="_blank">fairuzikbar.github.io</Link></p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="divider m-0"></div>
              <div className="flex lg:flex-row md:flex-row flex-col max-w-xl w-full">
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 lg:mr-1 md:mr-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <p>1 June 2023 - 2 October 2023</p>
                              <h2 className="card-title">UAT Webstatement Phase 2</h2>
                              <h3>Bank OCBC NISP</h3>
                              <div>
                                <div className="badge badge-outline">HiveSQL</div>
                                <div className="badge badge-outline">Airflow</div>
                                <div className="badge badge-outline">Jupyter Notebook</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="lg:divider lg:divider-horizontal"></div>
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 lg:mx-1 md:mx-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <h2 className="card-title">Description</h2>
                              <p>UAT script project Webstatement Phase 2 in Jupyter and replicate table for WS Phase 2</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="divider m-0"></div>
              <div className="flex lg:flex-row md:flex-row flex-col max-w-xl w-full">
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 lg:mr-1 md:mr-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <p>3 October 2022 - 3 July 2023</p>
                              <h2 className="card-title">Big Data Competency Center</h2>
                              <h3>Bank OCBC NISP</h3>
                              <div>
                                <div className="badge badge-outline">HiveSQL</div>
                                <div className="badge badge-outline">SAS</div>
                                <div className="badge badge-outline">Jupyter Notebook</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="lg:divider lg:divider-horizontal"></div>
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 lg:mx-1 md:mx-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <h2 className="card-title">Description</h2>
                              <p>Migrate SAS Language to Hive SQL and Python</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="divider m-0"></div>
              <div className="flex lg:flex-row md:flex-row flex-col max-w-xl w-full">
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 lg:mr-1 md:mr-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <p>11 April 2022 - 14 May 2022</p>
                              <h2 className="card-title">Dowa Reseller Web</h2>
                              <h3>Dowa Bag</h3>
                              <div>
                                <div className="badge badge-outline">PHP</div>
                                <div className="badge badge-outline">HTML</div>
                                <div className="badge badge-outline">Bootstrap</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="lg:divider lg:divider-horizontal"></div>
                  <div className="grid grid-cols-1 w-full">
                      <div className="card bg-base-100 lg:mx-1 md:mx-1 mt-1 dark:bg-gray-900">
                          <div className="card-body">
                              <h2 className="card-title">Description</h2>
                              <p>Refactor the landing page of Dowa Reseller website. Published at <Link href={"http://reseller.dowabag.co.id/"} target="_blank">reseller.dowabag.co.id</Link></p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="divider m-0"></div>
        </div>
      </div>
    </section>
  );
}