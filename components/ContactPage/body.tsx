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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43421.828232368964!2d49.53224149754951!3d27.04621311923534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e3508ac245f9d8d%3A0xa2d87145eb4a9d58!2sSecond%20Industrial%20Support%20Area%2C%20Al%20Jubail%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1723659334783!5m2!1sen!2sin"
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

              <p className="text-gray-700 text-lg mb-4 flex">
                <div className="flex items-start">
                  <img
                    src="images/icons/address.png"
                    alt="Address Icon"
                    className="mr-3 inline-block"
                  />
                  <strong className="mr-2">Address:</strong>
                </div>
                <span className="flex-1">
                  Building No. 3487, Street No. 112, 1ST Industrial Area, Postal
                  Code 35717, Al Jubail - Kingdom of Saudi Arabia
                </span>
              </p>

              <p className="text-gray-700 text-lg mb-4 flex">
                <div className="flex items-start">
                  <img
                    src="images/icons/black-email.png"
                    alt="Email Icon"
                    className="mr-3 inline-block"
                  />
                  <strong className="mr-2">Email:</strong>
                </div>
                <span className="flex-1 hover:underline">
                  <a href="mailto:info@oqoodsa.com">info@oqoodsa.com</a>
                </span>
              </p>

              <p className="text-gray-700 text-lg flex">
                <div className="flex items-start">
                  <img
                    src="images/icons/black-phone.png"
                    alt="Phone Icon"
                    className="mr-3 inline-block"
                  />
                  <strong className="mr-2">Telephone:</strong>
                </div>
                <span className="flex-1">+1 234 567 890</span>
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
