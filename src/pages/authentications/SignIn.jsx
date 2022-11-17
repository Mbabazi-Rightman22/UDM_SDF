import axios from "axios";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const usernameRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (!username || !password) {
      toast.warn("Username and password should not be empty");
      return;
    }

    const params = new URLSearchParams()
    params.append('username', username)
    params.append('password', password)
    params.append('referer', 'https://infrastructure.space.gov.rw/portal/')
    params.append('client', 'https://infrastructure.space.gov.rw/portal/')
    params.append('expiration', '3600')

    const URL =
      'https://infrastructure.space.gov.rw/portal/sharing/rest/generateToken?f=json'

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };

    axios
      .post(URL, params, config)
      .then((response) => {
        if (response.data.error) {
          toast.error(response.data.error.message);
        } else {
          localStorage.setItem("token", response.data.token);
          toast.success("You have successfully login");
          navigate("/dashboard", { replace: true });
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
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
                    class=" bg-gray-900 text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
              class=" text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium"
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
              class="text-gray-300 bg-gray-900 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {" "}
              <i class="fa-solid fa-right-to-bracket mr-2"></i>
              Login
            </a>
          </div>
        </div>
      </nav>
      <div></div>
      <div class="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-green-400 to-blue-500">
        <div class=" px-10 py-8 rounded-lg bg-white bg-opacity-20 backdrop-blur-lg rounded drop-shadow-lg space-y-5">
          <div className="">
            <img
              class="mx-auto h-12 w-auto rounded-full"
              src={require("../../Images/logo.jpg")}
              alt="Your Company"
            />
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form onSubmit={submit} class="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div class="-space-y-px rounded-md shadow-sm">
              <div className="m-2">
                <label for="username" class="sr-only">
                  Username
                </label>
                <input
                  id="Username"
                  ref={usernameRef}
                  name="username"
                  type="text"
                  autocomplete="username"
                  required
                  class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div className="m-2">
                <label for="password" class="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  ref={passwordRef}
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span class="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
