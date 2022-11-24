import React from "react";

const About = () => {
  return (
    <>
      <nav class="bg-blue-400">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-right justify-end">
            <div class="flex items-center">
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/"
                    class=" text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
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
                    class=" text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Reports
                  </a>

                  <a
                    href="/about"
                    class="text-white bg-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    About
                  </a>
                  <a
                    href="/SignIn"
                    class="  text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
              class=" hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
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
              class="text-gray-300  hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Reports
            </a>
            <a
              href="/about"
              class="text-gray-300 bg-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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
          <h1 class="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-green-400  font-mono">
            About us
          </h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl h-auto py-6 px-4 sm:px-6 lg:px-8">
          <div class="px-2 py-6 sm:px-0">
            <div className="mb-4">
              <figure className="relative max-w-full h-auto">
                <img
                  src={require("./../../Images/Home4.jpg")}
                  class=" transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0"
                  alt="..."
                />
                <figcaption class="absolute bottom-2 py-6 px-4 text-2xl text-white">
                  <p className=" mr-9 ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </figcaption>
              </figure>
            </div>
            <div style={{ height: "60vh" }} className="max-w-full h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.4937830068793!2d30.081934114539536!3d-1.9559169985740485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6bc98f35149%3A0x1ccb57cf52ebaf0e!2sMinistry%20of%20Infrastructure!5e0!3m2!1sen!2srw!4v1668677344162!5m2!1sen!2srw"
                width="100%"
                height="100%"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
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
    </>
  );
};

export default About;
