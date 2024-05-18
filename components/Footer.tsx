export default function Footer() {
  return (
    <footer className=" bg-white">
      <section className="bg-white overflow-hidden">
        <div className="container px-4 mx-auto">
          <div className=" border-b">
            <div className="flex flex-wrap -m-8">
              <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
                <h3 className="mb-6 font-semibold leading-normal">Pages</h3>
                <ul>
                  <li className="">
                    <a
                      className="text-gray-600 hover:text-gray-700  leading-relaxed"
                      href="#"
                    >
                      Login
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="text-gray-600 hover:text-gray-700 leading-relaxed"
                      href="#"
                    >
                      Register
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="text-gray-600 hover:text-gray-700 leading-relaxed"
                      href="#"
                    >
                      Add list
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-700 leading-relaxed"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
                <h3 className="mb-6 font-semibold leading-normal">Legal</h3>
                <ul>
                  <li className="">
                    <a
                      className="text-gray-600 hover:text-gray-700 fleading-relaxed"
                      href="#"
                    >
                      Terms
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="text-gray-600 hover:text-gray-700 leading-relaxed"
                      href="#"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="text-gray-600 hover:text-gray-700  leading-relaxed"
                      href="#"
                    >
                      Team
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-700  leading-relaxed"
                      href="#"
                    >
                      Privacy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 lg:w-2/12 p-8">
                <h3 className="mb-6 font-semibold leading-normal">Resources</h3>
                <ul>
                  <li className="">
                    <a
                      className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                      href="#"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="text-gray-600 hover:text-gray-700 leading-relaxed"
                      href="#"
                    >
                      Service
                    </a>
                  </li>
                  <li className="">
                    <a
                      className="text-gray-600 hover:text-gray-700 font-medium leading-relaxed"
                      href="#"
                    >
                      Product
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-700 leading-relaxed"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full sm:w-1/2 lg:w-4/12 p-8">
                <div className="lg:max-w-sm">
                  <h3 className="mb-6 font-semibold leading-normal">
                    Subscribe
                  </h3>
                  <p className="mb-5 font-sans text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <div className="mb-3 xl:pl-6 inline-block md:max-w-xl w-full overflow-hidden border border-gray-300 rounded-xl focus-within:ring focus-within:ring-indigo-300">
                    <div className="flex flex-wrap items-center">
                      <div className="w-full xl:flex-1">
                        <input
                          className="p-3 xl:p-0 xl:pr-6 w-full  text-gray-500 placeholder-gray-500 outline-none"
                          id="footerInput1-1"
                          type="text"
                          placeholder="Type your e-mail"
                        />
                      </div>
                      <div className="w-full xl:w-auto">
                        <div className="block">
                          <button
                            className="h-[40px] px-8 w-full text-white font-semibold border  bg-orange-600 transition ease-in-out duration-200"
                            type="button"
                          >
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">The Afrikan House</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2020 The Afrikan House
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500">
            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="none" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="ml-3 text-gray-500">
            <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
