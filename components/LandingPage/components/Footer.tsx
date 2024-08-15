const Footer = () => {
  return (
    <>
      <div className="bg-gray-700 text-white p-8">
        <div className="max-w-6xl mx-auto flex justify-between">
          {/* Contact Us Section */}
          <div id="contact-us" className="text-lef mr-10">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p>
              <strong>Address:</strong> Building No. 3487, Street No. 112, 1ST
              Industrial Area, Postal Code 35717, Al Jubail - Kingdom of Saudi
              Arabia
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@oqoodsa.com" className=" hover:underline">
                info@oqoodsa.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong> +966 0553394387
            </p>
            {/* <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="LinkedIn">
                <img src="/images/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="#" aria-label="Facebook">
                <img src="/images/facebook.png" alt="Facebook" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src="/images/twitter.png" alt="Twitter" />
              </a>
            </div> */}
          </div>

          {/* Map Section */}
          <div id="map" className="text-left">
            <h2 className="text-lg font-semibold mb-4">Map Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d888.0835434366281!2d49.554839269535265!3d27.082757192586918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDA0JzU3LjkiTiA0OcKwMzMnMTkuNyJF!5e0!3m2!1sen!2sin!4v1723723321036!5m2!1sen!2sin"
              width="500"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className=" p-4 pl-24 pr-24 bg-gray-900 w-full text-white font-semibold flex justify-between items-center text-sm">
        <p>&copy; 2024 OQOOD. All rights reserved.</p>
        <p>Made by: Saud Khan</p>
      </div>
    </>
  );
};

export default Footer;
