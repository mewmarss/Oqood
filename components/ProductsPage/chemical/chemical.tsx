import Navbar from "@/components/LandingPage/components/Navbar";
import Image from "next/image";
import one from "../../../public/images/chemical/one.jpg";
import two from "../../../public/images/chemical/two.jpg";
import Footer from "@/components/LandingPage/components/Footer";

const ChemicalPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center h-full space-y-4 mt-10">
        <Image src={one} alt="Ono" className="w-full h-1/2 object-cover" />
        <Image src={two} alt="Dono" className="w-full h-1/2 object-cover" />
      </div>

      <div className=" mt-24">
        <Footer />
      </div>
    </>
  );
};

export default ChemicalPage;
