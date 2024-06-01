import React from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import GridComponent from "./GridComponent";
import FooterComponent from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <div className="flex justify-center p-3 mx-auto flex-col md:flex-row md:items-center gap-3">
        <div className="flex flex-col items-center md:items-start md:flex-grow">
          <h1 className="text-xl font-bold text-gray-800 dark:text-white md:text-5xl text-center">
            Become a RFID seller
          </h1>
          <h2 className="text-lg text-gray-600 dark:text-gray-300 md:text-2xl">
            Start selling your RFID products
          </h2>
          <Link to={"/sign-up"}>
            <Button className="mt-5" gradientDuoTone={"purpleToBlue"} pill>
              Start Selling
            </Button>
          </Link>
        </div>
        <div className="md:flex md:justify-end md:flex-grow">
          <img
            className="w-96 h-96 md:w-96 md:h-auto"
            src="/images/RFID.jpg"
            alt="RFID"
          />
        </div>
      </div>

      <section className="flex p-3   mx-auto flex-col md:flex-row md:items-center gap-3">
        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white md:text-5xl text-center">
            Why Sellers Choose us?
          </h2>
          {/* Add additional content here if needed */}
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end items-center"></div>
        <img
          className="w-full md:w-96 h-auto"
          src="/images/istockphoto-1169530992-612x612.png"
          alt="RFID Technology"
        />
      </section>

      {/* GridComponent placed below the "Why Sellers Choose Us?" heading */}
      <div className="flex p-3   mx-auto flex-col md:flex-row md:items-center gap-3">
        <GridComponent />
      </div>
      {/* End of GridComponent */}
      {/* Stepper Component  */}
      <div>
        <section className="flex p-3 mx-auto flex-col items-start gap-3 bg-blue-300">
          <div className="flex flex-col items-center md:items-start pt-10 md:ml-60">
            <h1 className="text-xl font-bold text-blue-800 dark:text-white md:text-5xl text-center">
              Simplifying Your Shopping Experience
            </h1>
          </div>
          {/* add space in between */}

          <div className="flex justify-between items-center p-10 md:ml-60">
            <ol class="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0 rtl:space-x-reverse">
              <li class="flex flex-col items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
                <span class="flex items-center justify-center w-24 h-24 md:w-48 md:h-48 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                  <img
                    class="w-6 h-6 md:w-12 md:h-12 rounded-full"
                    src="/path/to/circular-image.jpg"
                    alt="Step1"
                  />
                </span>
                <span>
                  <h3 class="font-medium leading-tight">Company info</h3>
                  <p class="text-sm">Step details here</p>
                </span>
              </li>
              <li class="flex flex-col items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
                <span class="flex items-center justify-center w-24 h-24 md:w-48 md:h-48 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                  <img
                    class="w-6 h-6 md:w-12 md:h-12 rounded-full"
                    src="/path/to/circular-image.jpg"
                    alt="Step1"
                  />
                </span>
                <span>
                  <h3 class="font-medium leading-tight">Company info</h3>
                  <p class="text-sm">Step details here</p>
                </span>
              </li>
              <li class="flex flex-col items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
                <span class="flex items-center justify-center w-24 h-24 md:w-48 md:h-48 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                  <img
                    class="w-6 h-6 md:w-12 md:h-12 rounded-full"
                    src="/path/to/circular-image.jpg"
                    alt="Step1"
                  />
                </span>
                <span>
                  <h3 class="font-medium leading-tight">Company info</h3>
                  <p class="text-sm">Step details here</p>
                </span>
              </li>
              <li class="flex flex-col items-center text-gray-500 dark:text-gray-400 space-x-2.5 rtl:space-x-reverse">
                <span class="flex items-center justify-center w-24 h-24 md:w-48 md:h-48 border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
                  <img
                    class="w-6 h-6 md:w-12 md:h-12 rounded-full"
                    src="/path/to/circular-image.jpg"
                    alt="Step1"
                  />
                </span>
                <span>
                  <h3 class="font-medium leading-tight">Company info</h3>
                  <p class="text-sm">Step details here</p>
                </span>
              </li>
              {/* Repeat the above <li> for each step */}
            </ol>
          </div>
        </section>
      </div>
      {/* End of Stepper Component */}

      <section className="flex p-3   mx-auto flex-col md:flex-row md:items-center gap-3  min-h-96">
        <div className="flex p-3   mx-auto flex-col md:flex-row md:items-center gap-3">
          <div className="flex flex-col items-center md:items-start md:flex-grow">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white md:text-5xl text-center">
              Journey Begins Here
            </h1>
            <h2 className="text-lg text-gray-600 dark:text-gray-300 md:text-2xl">
              Embark on a seamless shopping journey with our cutting-edge RFID
              technology. Experience effortless checkout, enhanced security, and
              optimized inventory management. Start revolutionizing your retail
              operations today.
            </h2>
            <Link to={"/sign-up"}>
              <Button className="mt-5" gradientDuoTone={"purpleToBlue"} pill>
                Start Selling
              </Button>
            </Link>
          </div>
          <div className="md:flex md:justify-end md:flex-grow">
            <img
              className="w-96 h-96 md:w-96 md:h-auto"
              src="/images/vecteezy_online-order-tracking-or-freight-delivery-service_7278462.png"
              alt="RFID"
            />
          </div>
        </div>
      </section>
      <FooterComponent></FooterComponent>
    </div>
  );
};

export default HomePage;