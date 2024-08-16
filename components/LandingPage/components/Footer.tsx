const Footer = () => {
  return (
    <>
      <div className="bg-gray-700 text-white p-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8">
          {/* Contact Us Section */}
          <div id="contact-us" className="text-left lg:mr-10">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">
              <strong>Address:</strong> Building No. 3487, Street No. 112, 1ST
              Industrial Area, Postal Code 35717, Al Jubail - Kingdom of Saudi
              Arabia
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@oqoodsa.com" className="hover:underline">
                info@oqoodsa.com
              </a>
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +966 0553394387
            </p>
          </div>

          {/* Map Section */}
          <div id="map" className="text-left">
            <h2 className="text-xl font-semibold mb-4">Map Location</h2>
            <div className="w-full max-w-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d888.0835434366281!2d49.554839269535265!3d27.082757192586918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDA0JzU3LjkiTiA0OcKwMzMnMTkuNyJF!5e0!3m2!1sen!2sin!4v1723723321036!5m2!1sen!2sin"
                className="w-full md:w-[500px] h-[300px]"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-white p-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8">
          <p className="text-center lg:text-left font-semibold text-sm">
            &copy; 2024 OQOOD. All rights reserved.
          </p>
          <p className="text-center lg:text-right text-sm font-semibold">
            Made by: Saud Khan
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
