const Footer = () => {
  return (
    <>
      <div className="bg-gray-700 text-white p-8">
        <div className="max-w-6xl mx-auto flex justify-between">
          {/* Contact Us Section */}
          <div id="contact-us" className="text-left">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p>
              Address: Hydro Serve Pumps & Machinery Trading L.L.C <br />
              Po Box 32925, Dubai, U.A.E
            </p>
            <p>Email: your@email.com</p>
            <p>Phone: +1 234 567 890</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="LinkedIn">
                <img src="/images/linkedin.png" alt="LinkedIn" />
              </a>
              <a href="#" aria-label="Facebook">
                <img src="/images/facebook.png" alt="Facebook" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src="/images/twitter.png" alt="Twitter" />
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div id="map" className="text-left">
            <h2 className="text-lg font-semibold mb-4">Map Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1806507.0806762038!2d49.51072844984936!3d27.013191479657944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35b89f12742f69%3A0x4cce7ffdab12de4!2sJubail%2C%20Eastern%20Province%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1692118288888!5m2!1sen!2sus"
              width="400"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className=" p-4 pl-24 pr-24 bg-gray-900 w-full text-white font-semibold flex justify-between items-center text-sm">
        <p>&copy; 2023 Pumps and Seals. All rights reserved.</p>
        <p>Made by: Saud Khan</p>
      </div>
    </>
  );
};

export default Footer;
