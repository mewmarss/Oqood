import Navbar from "@/components/LandingPage/components/Navbar";
import Image from "next/image";
import bearing from "../../../public/images/forms/bearing.jpg";
import Footer from "@/components/LandingPage/components/Footer";

const BearingPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center justify-center h-full space-y-4 mb-10">
        <Image src={bearing} alt="Ono" className="w-full h-1/2 object-cover" />
      </div>

      <Footer />
    </>
  );
};

export default BearingPage;
