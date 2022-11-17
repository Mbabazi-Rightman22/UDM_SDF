import React from "react";

const Home = () => {
  return (
    <div class="min-h-full">
      <nav class="bg-blue-400">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-right justify-end">
            <div class="flex items-center">
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/"
                    class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    aria-current="page"
                  >
                    Home
                  </a>

                  <a
                    href="/SignIn"
                    class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboards
                  </a>
                  <a
                    href="/report"
                    class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Reports
                  </a>

                  <a
                    href="/about"
                    class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>
                  <a
                    href="/SignIn"
                    class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
            <div class="-mr-2 flex md:hidden">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>

                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>

                <svg
                  class="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div class="md:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <a
              href="/"
              class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
              aria-current="page"
            >
              Home
            </a>

            <a
              href="/SignIn"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Dashboards
            </a>
            <a
              href="/report"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Reports
            </a>
            <a
              href="/about"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="/SignIn"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {" "}
              <i class="fa-solid fa-right-to-bracket mr-2"></i>
              Login
            </a>
          </div>
        </div>
      </nav>

      <header class="bg-gray-50 shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="relative text-4xl tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-green-400  font-mono ">
            Urban Dynamic Mapping
          </h1>
          <p>
            As part of efforts to reconstruct Rwanda and nurture a shared
            national identity, the Government of Rwanda drew on traditional
            practices in Rwandan culture to adapt its development programmes to
            the country’s needs and context.
          </p>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div class="px-2 py-6 sm:px-0">
            {/* <div class="h-96 rounded-lg border-4 border-dashed border-gray-200"></div> */}
            <div className="mb-4">
              <img
                src={require("./../../Images/Home.jpg")}
                class="max-w-full h-auto transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                alt="..."
              />
            </div>
            <div class="relative">
              {/* <div class="relative h-56 overflow-hidden rounded-lg sm:h-64 xl:h-80 2xl:h-96">
  
        <div id="carousel-item-1" class="hidden duration-700 ease-in-out">
            <span class="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img src={require("./../../Images/Home.jpg")} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
  
        <div id="carousel-item-2" class="hidden duration-700 ease-in-out">
            <img src={require("./../../Images/Home3.jpg")} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
      
        <div id="carousel-item-3" class="hidden duration-700 ease-in-out">
            <img src={require("./../../Images/Home4.jpg")} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    
        <div id="carousel-item-4" class="hidden duration-700 ease-in-out">
            <img src={require("./../../Images/Home5.jpg")} class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
        </div>
    </div>

    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button id="carousel-indicator-1" type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1"></button>
        <button id="carousel-indicator-2" type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"></button>
        <button id="carousel-indicator-3" type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"></button>
        <button id="carousel-indicator-4" type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4"></button>
    </div>
 
    <button id="data-carousel-prev" type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="hidden">Previous</span>
        </span>
    </button>
    <button id="data-carousel-next" type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="hidden">Next</span>
        </span>
    </button>
</div>
            </div> */}
              {/* <div> */}
              <div className="bg-gray-100 px-6">
                <div className="text-justify">
                  <h2 className="font-bold">
                    {" "}
                    Principles and objectives of Imihigo
                  </h2>
                  <br />
                  <h2 className="font-bold">Principles</h2>
                  <p>Imihigo is governed by the following principles:</p>
                  <ol className="list-decimal px-6">
                    <li>
                      Local: Each district decides what goes into its Imihigo.
                      However, alignment with national priorities is required.
                    </li>
                    <li>
                      Ambition: Pledges are made to achieve only what has not
                      already been achieved or gained.
                    </li>
                    <li>
                      Excellence: Imihigo is about driving outstanding
                      performance that is worthy of praise.
                    </li>
                  </ol>
                  <br />
                  <h2 className="font-bold">Objectives of Imihigo</h2>
                  <p>Imihigo has the following objectives:</p>
                  <ol className="list-decimal px-6">
                    <li>
                      To speed up implementation of the local and national
                      development agenda
                    </li>
                    <li>
                      To ensure stakeholder ownership of the development agenda
                    </li>
                    <li>To promote accountability and transparency</li>
                    <li>To promote results-oriented performance</li>
                    <li>To instill innovation and encourage competitiveness</li>
                    <li>
                      To engage stakeholders (citizens, civil society, donors,
                      private sector, etc.) in policy formulation and evaluation
                    </li>
                    <li>
                      To promote zeal and determination to achieve set goals
                    </li>
                    <li>
                      To instill a culture of regular performance evaluation
                    </li>
                  </ol>
                  <br />
                  <h2 className="font-bold">The Imihigo preparation process</h2>
                  <p>
                    Both Imihigo and action plans are used by the Government of
                    Rwanda to define goals, targets and objectives. While
                    different in their purpose, the two tools are interlinked.
                    Action plans are sets of activities to be achieved within a
                    set time period, usually a year. Imihigo are subsets of
                    action plans showing priority activities to be used as a
                    performance measure.
                  </p>
                  <br />
                  <p>
                    An action plan may contain any number of activities of a
                    routine nature such as payment of salaries, whereas Imihigo
                    define targets that have a significant impact on economic
                    development, poverty reduction, good governance and social
                    welfare.
                  </p>
                  <br />
                  <p>
                    When Imihigo are developed, government leaders are advised
                    to ask some key questions before including activities in
                    them. An activity is prioritised according to the following
                    criteria:
                  </p>
                  <ol className="list-decimal px-6">
                    <li>
                      Will the activity have a positive effect on the welfare of
                      the local population (for example by improving water
                      access, transport, energy access, schools, and so on)?
                    </li>
                    <li>
                      Will the activity create jobs for the local population?
                    </li>
                    <li>
                      Will the activity create opportunities for income
                      generation for the population/local government?
                    </li>
                    <li>
                      Will the activity have an impact on poverty reduction?
                    </li>
                    <li>
                      Will the activity be a priority for the residents in the
                      area?
                    </li>
                    <li>
                      Will the activity have synergy with development of other
                      areas (an activity may have potential to impact
                      development in neighbouring areas)?
                    </li>
                    <li>
                      Will the activity be sustainable or are the results
                      sustainable?
                    </li>
                    <li>
                      Will there be ownership from the local population for the
                      activity?
                    </li>
                    <li>
                      Will it help to achieve the national targets and is it
                      linked to national and international priorities,
                      programmes or policies (SDGs, NST1, Vision 2050)?
                    </li>
                    <li>
                      Can the activity produce quality results or outputs with
                      minimum resources?
                    </li>
                    <li>
                      Can the activity improve the way services are delivered or
                      reduce costs?
                    </li>
                    <li>
                      Will the activity promote social cohesion (unity and
                      reconciliation)?
                    </li>
                    <li>
                      Will the activity reduce social disorder or unrest (for
                      example, insecurity, drug abuse, prostitution,
                      environmental degradation, conflicts, corruption, and so
                      on)?
                    </li>
                    <li>
                      Will the activity address key cross-cutting issues
                      (gender, HIV/AIDS, environment, social inclusion and
                      youth)?
                    </li>
                    <li>
                      Has the source of funds for implementation been
                      determined?
                    </li>
                    <li>Is the activity realistic and can it be achieved?</li>
                  </ol>
                  <br />
                  <div class=" grid grid-cols-3 gap-4">
                    <div class="w-72 h-72 bg-cyan-300 bg-opacity-50 backdrop-blur-lg rounded drop-shadow-lg">
                      <h2 className="font-semibold text-2xl p-8">
                        Total Population
                      </h2>
                      <p className="font-semibold text-8xl">+12M</p>
                    </div>
                    <div class="w-72 h-72 bg-cyan-300  bg-opacity-50 backdrop-blur-md rounded drop-shadow-lg">
                      <h2 className="font-semibold text-2xl p-8">
                        Total Surface
                      </h2>
                      <p className="font-semibold text-5xl">26.338 SqK</p>
                    </div>
                    <div class="w-72 h-72 bg-cyan-300  bg-opacity-50 backdrop-blur-xl rounded drop-shadow-lg">
                      <h2 className="font-semibold text-2xl p-8">
                        Annual Budget
                      </h2>
                      <p className="font-semibold text-8xl">$4.6B</p>
                    </div>
                  </div>
                  <div className="max-w-full h-auto mt-10 bg-gradient-to-r from-black to-slate-700 shadow-2xl">
                    <div class="grid grid-cols-2 gap-2">
                      <div className="h-80 text-gray-200 my-32 mx-8 mt-24">
                        <p>
                          {" "}
                          <br />
                          <br />
                          "After 1994, everything was a priority and our people
                          were completely broken. But we made the fundamental
                          choices that guide us to this day.
                          <p>One: We chose to stay together.</p>
                          <p>Two: We chose to be accountable to ourselves.</p>
                          <p> Three: We chose to think big."</p>
                        </p>
                        <br />
                        H.E Paul Kagame - President of Rwanda
                      </div>
                      <div className="h-80 text-gray-200 m-2 mt-16">
                        <img src={require("./../../Images/pk.jpg")} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <hr />
      <footer class="bg-gray-300 dark:bg-gray-900">
        <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
              Company
            </h2>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class=" hover:underline">
                  About
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
              Help center
            </h2>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Twitter
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
              Legal
            </h2>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Licensing
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
              Connect with us
            </h2>
            <ul class="text-gray-500 dark:text-gray-400">
              <li class="mb-4">
                <span>Tel:+2507xxxxxxx</span>
              </li>
              <li class="mb-4">
                <a href="mailto:email@example.com">
                  Email us: email@example.com
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  link
                </a>
              </li>
              <li class="mb-4">
                <a href="#" class="hover:underline">
                  link
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="py-6 px-4 bg-gray-200 dark:bg-gray-700  space-x-6 md:flex md:items-center md:justify-center">
          <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
            © 2022 Government of the Republic of Rwanda.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Home;
