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
                    href="#"
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
              href="#"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a 
              href="/SignIn"
              class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            > <i class="fa-solid fa-right-to-bracket mr-2"></i>
              Login
            </a>
          </div>
        </div>
      </nav>

      <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">
            Urban Dynamic Mapping
          </h1>
        </div>
      </header>
      <main>
        <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <div class="px-2 py-6 sm:px-0">
            {/* <div class="h-96 rounded-lg border-4 border-dashed border-gray-200"></div> */}
            <div className="mb-4">
            <img  src={require("./../../Images/Home.jpg")} class="max-w-full h-auto transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0" alt="..." />
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
            <h2> Rwanda - Urban dynamics</h2>
              <p>
            
                 Suburbanisation Since the 1960s, suburbs
                have become diverse economically, politically and culturally.
                Suburbanisation involved a movement or people to areas
                immediately next to large cities. This process has been helped
                by: - the development of large regional shopping centres -
                change in employment (working from home, businesses set-up in
                suburbs) - contruction of expressways, public transport.
              </p>
              <br />
              <p>
            
            Suburbanisation Since the 1960s, suburbs
           have become diverse economically, politically and culturally.
           Suburbanisation involved a movement or people to areas
           immediately next to large cities. This process has been helped
           by: - the development of large regional shopping centres -
           change in employment (working from home, businesses set-up in
           suburbs) - contruction of expressways, public transport.
         </p>
         <br />
         <p>
            
            Suburbanisation Since the 1960s, suburbs
           have become diverse economically, politically and culturally.
           Suburbanisation involved a movement or people to areas
           immediately next to large cities. This process has been helped
           by: - the development of large regional shopping centres -
           change in employment (working from home, businesses set-up in
           suburbs) - contruction of expressways, public transport.
         </p>
         <br />
         <p>
            
            Suburbanisation Since the 1960s, suburbs
           have become diverse economically, politically and culturally.
           Suburbanisation involved a movement or people to areas
           immediately next to large cities. This process has been helped
           by: - the development of large regional shopping centres -
           change in employment (working from home, businesses set-up in
           suburbs) - contruction of expressways, public transport.
         </p>
         <br />
         <p>
            
            Suburbanisation Since the 1960s, suburbs
           have become diverse economically, politically and culturally.
           Suburbanisation involved a movement or people to areas
           immediately next to large cities. This process has been helped
           by: - the development of large regional shopping centres -
           change in employment (working from home, businesses set-up in
           suburbs) - contruction of expressways, public transport.
         </p>
         <br />
         <p>
            
            Suburbanisation Since the 1960s, suburbs
           have become diverse economically, politically and culturally.
           Suburbanisation involved a movement or people to areas
           immediately next to large cities. This process has been helped
           by: - the development of large regional shopping centres -
           change in employment (working from home, businesses set-up in
           suburbs) - contruction of expressways, public transport.
         </p>
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
