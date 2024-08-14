import Footer from "@/components/LandingPage/components/Footer";
import Navbar from "@/components/LandingPage/components/Navbar";
import MaxWidthWrapper from "@/components/Wrapper/max-width-wrapper";
import React from "react";
import CarouselOne from "./components/one";

const sealTypes = [
  "API Plan 53A, Plan 53B & API Plan 53C",
  "API Plan 54",
  "API Plan 32",
  "Cyclone Separator",
  "Heat Exchanger",
];

const SealSupportPage = () => {
  return (
    <>
      <Navbar />

      <div className="relative">
        <img
          src="/images/banner.jpg"
          alt="About Us Banner"
          className="w-full h-auto"
        />
        <h1 className="absolute inset-0 flex flex-col items-center justify-center text-white text-4xl sm:text-5xl md:text-5xl z-10">
          SEAL SUPPORTING SYSTEMS
          <p className=" text-lg font-light mt-5">Home/ Products</p>
        </h1>
      </div>

      <MaxWidthWrapper className=" mt-14">
        <h2 className=" text-4xl font-bold text-blue-900 underline">
          SEAL SUPPORTING SYSTEMS
        </h2>
      </MaxWidthWrapper>

      <section>
        <MaxWidthWrapper>
          <div className=" flex justify-between items-center mt-8">
            <div>
              <div>
                <ul className="list-none pl-4 space-y-2">
                  {sealTypes.map((type, index) => (
                    <li key={index} className="flex items-center text-blue-900">
                      <span className="inline-block w-2 h-2 mr-2 bg-blue-900 rounded-full" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className=" mr-24">
              <CarouselOne />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <div className=" mt-28">
        <Footer />
      </div>
    </>
  );
};

export default SealSupportPage;
