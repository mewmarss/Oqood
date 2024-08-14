import Footer from "../LandingPage/components/Footer";
import Navbar from "../LandingPage/components/Navbar";
import MaxWidthWrapper from "../Wrapper/max-width-wrapper";

const ContactUs = () => {
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
          CONTACT US
          <p className=" text-lg font-light mt-5">Home/ Contact us</p>
        </h1>
      </div>

      <section>
        <MaxWidthWrapper>
          <div className="flex justify-between items-start mx-5 py-10 space-x-8 mt-10">
            {/* Map Section */}
            <div className="flex-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687804.134287728!2d48.597517252063344!3d26.980715211878748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e31f9471dcd7d57%3A0xe7ad37313c9e9f0b!2sJubail%2C%20Eastern%20Province%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1692100571194!5m2!1sen!2sus"
                width="500"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>

            {/* Contact Information Section */}
            <div className="flex-1 bg-gray-100 p-5 rounded-lg shadow-lg">
              <h2 className="text-gray-800 text-2xl mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 text-lg mb-4 flex items-center">
                <img
                  src="images/icons/address.png"
                  alt="Address Icon"
                  className="mr-3 inline-block"
                />
                <strong className=" mr-2">Address:</strong> Pump and Seals, Po
                Box 32925, Dubai, U.A.E
              </p>
              <p className="text-gray-700 text-lg mb-4 flex items-center">
                <img
                  src="images/icons/black-email.png"
                  alt="Email Icon"
                  className="mr-3 inline-block"
                />
                <strong className=" mr-2">Email:</strong> your@email.com
              </p>
              <p className="text-gray-700 text-lg flex items-center">
                <img
                  src="images/icons/black-phone.png"
                  alt="Phone Icon"
                  className="mr-3 inline-block"
                />
                <strong className=" mr-2">Telephone:</strong> +1 234 567 890
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <div className=" mt-10">
        <Footer />
      </div>
    </>
  );
};

export default ContactUs;
