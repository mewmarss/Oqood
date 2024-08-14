import Image from "next/image";
import Footer from "../LandingPage/components/Footer";
import Navbar from "../LandingPage/components/Navbar";
import pumpImage from "../../public/images/pumpimage.jpg";

const EnquiryPage = () => {
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
          ENQUIRY US
          <p className=" text-lg font-light mt-5">Home/ Enquiry us</p>
        </h1>
      </div>

      <div className="flex justify-between items-center px-24 py-10 mt-12">
        <div className="w-1/2">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Enquiry Us</h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Name *"
                className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <input
                type="email"
                placeholder="Email *"
                className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Phone"
                className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
              <input
                type="text"
                placeholder="Interest of Service"
                className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>
            <textarea
              placeholder="Messages *"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-red-500 text-white font-bold py-2 px-6 rounded-md hover:bg-red-600 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div className="w-1/3">
          <Image
            src={pumpImage}
            alt="Pumps"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>

      <div className=" mt-12">
        <Footer />
      </div>
    </>
  );
};

export default EnquiryPage;
