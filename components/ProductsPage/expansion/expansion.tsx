import Footer from "@/components/LandingPage/components/Footer";
import Navbar from "@/components/LandingPage/components/Navbar";
import MaxWidthWrapper from "@/components/Wrapper/max-width-wrapper";
import CarouselOne from "./components/one";

const expansionJoints = [
  "Single Unrestrained Joints",
  "Universal Expansion Joints",
  "Single Tied Expansions Joints",
  "Tied Universal Expansion Joints",
  "Hinged Expansions Joints",
  "Gimbal Expansion Joints",
  "Pressure Balanced Elbow Expansions Joints",
  "Inline Pressure Balanced Expansions Joints",
];

const ExpansionPage = () => {
  return (
    <>
      <Navbar />

      <div className="relative">
        <img
          src="/images/banner.jpg"
          alt="About Us Banner"
          className="w-full h-[200px] md:h-auto"
        />
        <h1 className="absolute inset-0 flex flex-col items-center justify-center text-white text-2xl sm:text-5xl md:text-5xl z-10">
          EXPANSION JOINT & BELLOWS
          <p className=" text-lg font-light mt-5">Home/ Products</p>
        </h1>
      </div>

      <MaxWidthWrapper className=" mt-14">
        <h2 className=" text-4xl font-bold text-blue-900 underline">
          EXPANSION JOINT & BELLOWS
        </h2>
      </MaxWidthWrapper>

      <section>
        <MaxWidthWrapper>
          <div className=" flex justify-between items-center flex-col md:flex-row mt-8">
            <div>
              <div>
                <ul className="list-none pl-4 space-y-2">
                  {expansionJoints.map((type, index) => (
                    <li key={index} className="flex items-center text-blue-900">
                      <span className="inline-block w-2 h-2 mr-2 bg-blue-900 rounded-full" />
                      {type}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mr-0 p-16 md:p-0 md:mr-24">
              <CarouselOne />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <div className=" mt-14 md:mt-28">
        <Footer />
      </div>
    </>
  );
};

export default ExpansionPage;
