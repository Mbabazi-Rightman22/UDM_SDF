import React from "react";

const Report = () => {
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
                    class="bg-gray-900 text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Reports
                  </a>

                  <a
                    href="about"
                    class="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
              class="text-gray-300 bg-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
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
          <h1 class="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-green-400  font-mono">
            Report a problem here
          </h1>
        </div>
      </header>
      <main>
        <div children="bg-gradient-to-r from-green-400 to-blue-500">
          <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div class="px-2 py-6 sm:px-0">
              <div>
                <div>
                  <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1">
                      <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">
                          Profile
                        </h3>
                        <p class="mt-1 text-sm text-gray-600">
                          This information will be displayed publicly so be
                          careful what you share.
                        </p>
                      </div>
                    </div>
                    <div class="mt-5 md:col-span-2 md:mt-0">
                      <form action="#" method="POST">
                        <div class="shadow sm:overflow-hidden sm:rounded-md">
                          <div class="space-y-6 bg-gray-200 px-4 py-5 sm:p-6">
                            <div class="grid grid-cols-3 gap-6">
                              <div class="col-span-3 sm:col-span-2">
                                <label
                                  for="country"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Category of problem
                                </label>
                                <select
                                  id="country"
                                  name="country"
                                  autocomplete="country-name"
                                  class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                >
                                  <option>Education</option>
                                  <option>Transport</option>
                                  <option>Energy(WASAC & REG)</option>
                                  <option>Justice</option>
                                  <option>Agriculture</option>
                                  <option>Banks</option>
                                  <option>VUP</option>
                                  <option>Ejo heza</option>
                                  <option>Irondo</option>
                                  <option>NIDA</option>
                                  <option>Sport</option>
                                </select>
                              </div>
                            </div>

                            <div>
                              <label
                                for="about"
                                class="block text-sm font-medium text-gray-700"
                              >
                                About
                              </label>
                              <div class="mt-1">
                                <textarea
                                  id="about"
                                  name="about"
                                  rows="3"
                                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                  placeholder="Explain well your problem"
                                ></textarea>
                              </div>
                              <p class="mt-2 text-sm text-gray-500">
                                Brief description for your problem.
                              </p>
                            </div>

                            <div>
                              <label class="block text-sm font-medium text-gray-700">
                                Upload document
                              </label>
                              <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-700 px-6 pt-5 pb-6">
                                <div class="space-y-1 text-center">
                                  <svg
                                    class="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                  <div class="flex text-sm text-gray-600">
                                    <label
                                      for="file-upload"
                                      class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                    >
                                      <span>Upload a file</span>
                                      <input
                                        id="file-upload"
                                        name="file-upload"
                                        type="file"
                                        class="sr-only"
                                      />
                                    </label>
                                    <p class="pl-1">or drag and drop</p>
                                  </div>
                                  <p class="text-xs text-gray-700">
                                    PNG, JPG, GIF up to 10MB
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="bg-gray-100 px-4 py-3 text-right sm:px-6">
                            <button
                              type="submit"
                              class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div class="hidden sm:block" aria-hidden="true">
                  <div class="py-5">
                    <div class="border-t border-gray-200"></div>
                  </div>
                </div>

                <div class="mt-10 sm:mt-0 ">
                  <div class="md:grid md:grid-cols-3 md:gap-6">
                    <div class="md:col-span-1 ">
                      <div class="px-4 sm:px-0">
                        <h3 class="text-lg font-medium leading-6 text-gray-900">
                          Personal Information
                        </h3>
                        <p class="mt-1 text-sm text-gray-600">
                          Use a permanent address where you can receive mail.
                        </p>
                      </div>
                    </div>
                    <div class="mt-5 md:col-span-2 md:mt-0 ">
                      <form action="#" method="POST">
                        <div class="overflow-hidden shadow sm:rounded-md ">
                          <div class="bg-gray-200 px-4 py-5 sm:p-6">
                            <div class="grid grid-cols-6 gap-6">
                              <div class="col-span-6 sm:col-span-3">
                                <label
                                  for="first-name"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  First name
                                </label>
                                <input
                                  type="text"
                                  name="first-name"
                                  id="first-name"
                                  autocomplete="given-name"
                                  required
                                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>

                              <div class="col-span-6 sm:col-span-3">
                                <label
                                  for="last-name"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Last name
                                </label>
                                <input
                                  type="text"
                                  name="last-name"
                                  id="last-name"
                                  autocomplete="family-name"
                                  required
                                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>

                              <div class="col-span-6 sm:col-span-4">
                                <label
                                  for="email-address"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Email address
                                </label>
                                <input
                                  type="text"
                                  name="email-address"
                                  id="email-address"
                                  autocomplete="email"
                                  required
                                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                              <div class="col-span-6 sm:col-span-4">
                                <label
                                  for="email-address"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Telephone
                                </label>
                                <input
                                  type="text"
                                  name="telephone"
                                  id="telephone"
                                  autocomplete="Telephone"
                                  placeholder="+250"
                                  required
                                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>

                              <div class="col-span-6 sm:col-span-3">
                                <label
                                  for="country"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Country
                                </label>
                                <select
                                  id="country"
                                  name="country"
                                  autocomplete="country-name"
                                  required
                                  class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                >
                                  <option>Rwanda</option>
                                  <option>Burundi</option>
                                  <option>DR Congo</option>
                                  <option>Uganda</option>
                                  <option>Kenya</option>
                                  <option>South Sudan</option>
                                </select>
                              </div>

                              <div class="col-span-6">
                                <label
                                  for="street-address"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Street address
                                </label>
                                <input
                                  type="text"
                                  name="street-address"
                                  id="street-address"
                                  autocomplete="street-address"
                                  required
                                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>

                              <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                <label
                                  for="city"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Province
                                </label>
                                <input
                                  type="text"
                                  name="city"
                                  id="city"
                                  autocomplete="address-level2"
                                  required
                                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>

                              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label
                                  for="region"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  District
                                </label>
                                <input
                                  type="text"
                                  name="region"
                                  id="region"
                                  autocomplete="address-level1"
                                  required
                                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>

                              <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label
                                  for="postal-code"
                                  class="block text-sm font-medium text-gray-700"
                                >
                                  Sector
                                </label>
                                <input
                                  type="text"
                                  name="postal-code"
                                  id="postal-code"
                                  autocomplete="postal-code"
                                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                              </div>
                            </div>
                          </div>
                          <div class="bg-gray-100 px-4 py-3 text-right sm:px-6">
                            <button
                              type="submit"
                              class="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                              Save
                            </button>
                          </div>
                        </div>
                      </form>
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
    </>
  );
};

export default Report;
