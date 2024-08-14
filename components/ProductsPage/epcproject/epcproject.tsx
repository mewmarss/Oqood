import Navbar from "@/components/LandingPage/components/Navbar";
import Image from "next/image";
import one from "../../../public/images/epc/one.jpg";
import two from "../../../public/images/epc/two.jpg";
import three from "../../../public/images/epc/three.jpg";
import four from "../../../public/images/epc/four.jpg";
import Footer from "@/components/LandingPage/components/Footer";

const EPCPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center h-full space-y-4 mb-10">
        <Image src={one} alt="Ono" className="w-full h-1/2 object-cover" />
        <Image src={three} alt="Dono" className="w-full h-1/2 object-cover" />
        <Image src={four} alt="four" className="w-full h-1/2 object-cover" />
        <Image src={two} alt="Dono" className="w-full h-1/2 object-cover" />
      </div>

      <div className=" mt-24">
        <Footer />
      </div>
    </>
  );
};

export default EPCPage;
