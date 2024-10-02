import villager from "../assets/characters/villager.jpeg";
import Footer from "../components/Footer";

export default function Villager() {
  return (
    <div>
      <div>
        <div className="bg-white pt-20 pb-20 lg:pt-20">
          <div className="m-auto flex flex-col md:flex-row lg:flex-row xl:flex-row justify-center px-6 xl:container md:px-12 lg:px-6">
            <div></div>

            <div className="flex">
              <div className="mt-12">
                <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <h5 class="mb-2 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Villager
                    </h5>
                  </a>
                  <img
                    src={villager}
                    className="border rounded-2xl"
                    alt="company mission"
                  />
                  <p class="m-3  font-normal text-gray-700 dark:text-gray-400">
                    Objective: Figure out who are the Werewolves
                  </p>

                  <a
                    href="#"
                    class="inline-flex items-center m-3 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>

                <div className="flex justify-center "></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
