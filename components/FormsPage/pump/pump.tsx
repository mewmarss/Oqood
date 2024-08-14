import Navbar from "@/components/LandingPage/components/Navbar";
import Image from "next/image";
import pump from "../../../public/images/forms/pump.jpg";
import Footer from "@/components/LandingPage/components/Footer";

const PumpFormPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center h-full space-y-4 mb-10">
        <Image src={pump} alt="Ono" className="w-full h-1/2 object-cover" />
      </div>

      <Footer />
    </>
  );
};

export default PumpFormPage;
