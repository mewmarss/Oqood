import Navbar from "@/components/LandingPage/components/Navbar";
import MaxWidthWrapper from "@/components/Wrapper/max-width-wrapper";
import CarouselOne from "./components/one";
import CarouselTwo from "./components/two";
import CarouselThree from "./components/three";
import Footer from "@/components/LandingPage/components/Footer";

const centrifugalPumps = [
  "Process API & Non-API Pumps",
  "Chemical Centrifugal Pumps",
  "Corrosive Non-Metallic Pumps",
  "Magnetic Drive Pumps",
  "Slurry Pumps",
  "Water Pumps",
  "Drum & Barrel Pump",
  "Submersible Bore hole pumps",
  "Specialised Pumps",
  "Drainage and dewatering pumps",
  "Boosters and Transfer Pump Sets",
  "Sewage and wastewater pumps",
];

const positivePumps = [
  "Air Operated Pumps",
  "Rotary Lobe Pumps",
  "Chemical Injection Pumps",
  "Progressive Cavity Pumps",
  "Rotary Gear Pumps",
  "Oil & Fuel Pumps",
  "Screw Pumps",
];

const vaccumPumps = ["High Vaccum Pumps"];

const PumpsPage = () => {
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
          PUMPS
          <p className=" text-lg font-light mt-5">Home/ Products</p>
        </h1>
      </div>

      <MaxWidthWrapper className=" mt-14">
        <h2 className=" text-4xl font-bold text-blue-900">PUMPS</h2>
      </MaxWidthWrapper>

      <section>
        <MaxWidthWrapper>
          <div className=" flex justify-between items-center mt-8">
            <div className=" flex flex-col gap-4">
              <h2 className=" underline text-2xl font-bold">
                Centrifugal Pumps
              </h2>
              <div>
                <ul className="list-none pl-4 space-y-2">
                  {centrifugalPumps.map((type, index) => (
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

      <section>
        <MaxWidthWrapper>
          <div className=" flex justify-between items-center mt-32">
            <div className=" flex flex-col gap-4">
              <h2 className=" underline text-2xl font-bold">
                Positive Displacement Pumps
              </h2>
              <div>
                <ul className="list-none pl-4 space-y-2">
                  {positivePumps.map((type, index) => (
                    <li key={index} className="flex items-center text-blue-900">
                      <span className="inline-block w-2 h-2 mr-2 bg-blue-900 rounded-full" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className=" mr-24">
              <CarouselTwo />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section>
        <MaxWidthWrapper>
          <div className=" flex justify-between items-center mt-32">
            <div className=" flex flex-col gap-4">
              <h2 className=" underline text-2xl font-bold">Vaccum Pumps</h2>
              <div>
                <ul className="list-none pl-4 space-y-2">
                  {vaccumPumps.map((type, index) => (
                    <li key={index} className="flex items-center text-blue-900">
                      <span className="inline-block w-2 h-2 mr-2 bg-blue-900 rounded-full" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className=" mr-24">
              <CarouselThree />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <div className=" mt-14">
        <Footer />
      </div>
    </>
  );
};

export default PumpsPage;
