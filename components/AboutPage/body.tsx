import Navbar from "../LandingPage/components/Navbar";
import MaxWidthWrapper from "../Wrapper/max-width-wrapper";
import valuesImg from "../../public/images/valuesbg.jpg";
import Footer from "../LandingPage/components/Footer";

const AboutUs = () => {
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
          ABOUT US
          <p className=" text-lg font-light mt-5">Home/ About us</p>
        </h1>
      </div>

      <section>
        <MaxWidthWrapper>
          <div className=" flex flex-col gap-4 mt-24">
            <h2 className=" text-4xl font-extrabold text-blue-900">
              About Oqood
            </h2>
            <p className=" text-gray-500 leading-relaxed mt-5">
              OQOOD IS A DYNAMIC AND VERSATILE COMPANY BASED IN THE HEART OF THE
              SUPPORT INDUSTRIES IN JUBAIL. WE SPECIALIZE IN CONTRACTING,
              TRADING, AND MANUFACTURING, OFFERING A COMPREHENSIVE RANGE OF
              SERVICES DESIGNED TO MEET THE DIVERSE NEEDS OF OUR CLIENTS. OUR
              COMMITMENT TO EXCELLENCE IS REFLECTED IN OUR UNWAVERING FOCUS ON
              ETHICAL PRACTICES AND THE TIMELY DELIVERY OF PROJECTS AND
              PRODUCTS. <br />
              <br />
              AT OQOOD, WE PRIDE OURSELVES ON OUR ABILITY TO NAVIGATE THE
              COMPLEXITIES OF THE MODERN MARKET WHILE MAINTAINING THE HIGHEST
              STANDARDS OF INTEGRITY AND EFFICIENCY. OUR DEDICATED TEAM WORKS
              TIRELESSLY TO ENSURE THAT EVERY PROJECT IS COMPLETED TO THE UTMOST
              SATISFACTION OF OUR CLIENTS, REINFORCING OUR REPUTATION AS A
              RELIABLE AND TRUSTWORTHY PARTNER IN THE INDUSTRY. JOIN US AT
              OQOOD, WHERE OUR DEDICATION TO ETHICS AND PUNCTUALITY DRIVES OUR
              SUCCESS AND SETS US APART IN THE COMPETITIVE LANDSCAPE OF
              CONTRACTING, TRADING, AND MANUFACTURING. <br />
              <br />
              OUR MISSION IS TO DELIVER EXCEPTIONAL CONTRACTING, TRADING AND
              MANUFACTURING SERVICES IN SAUDI ARABIA, DRIVEN BY INNOVATION,
              QUALITY, AND INTEGRITY. WE STRIVE TO MEET AND EXCEED OUR CLIENTS
              EXPECTATIONS THROUGH ETHICAL PRACTICES AND TIMELY EXECUTION,
              FOSTERING LONG-TERM PARTNERSHIPS AND CONTRIBUTING TO THE REGIONS
              ECONOMIC DEVELOPMENT. OUR DEDICATED TEAM IS COMMITTED TO ACHIEVING
              EXCELLENCE AND CREATING VALUE FOR ALL STAKEHOLDERS.
            </p>
          </div>
        </MaxWidthWrapper>
      </section>

      <section
        className="bg-cover bg-center bg-no-repeat py-32 text-white mt-24"
        style={{ backgroundImage: `url(${valuesImg.src})` }}
      >
        <div className="max-w-screen-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">CORE VALUES</h2>
          <p className="mb-12">
            We believe that our continued success is built upon our core values.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b-2 border-white inline-block">
                Customer Focus
              </h3>
              <p>
                We are deeply committed to meeting the needs of our customers
                and constantly focus on customer satisfaction.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b-2 border-white inline-block">
                Quality
              </h3>
              <p>
                Quality is ingrained in the work of our team and all our values.
                We are dedicated to delivering Quality Products & Services.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b-2 border-white inline-block">
                Performance
              </h3>
              <p>
                We strive for continuous improvement in our performance,
                measuring results carefully and ensuring that integrity and
                respect for people are never compromised.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b-2 border-white inline-block">
                Integrity
              </h3>
              <p>
                Every employee of Hydro Serve will act with the highest level of
                business ethics. We act openly and with honesty. We will comply
                with local rules and regulations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b-2 border-white inline-block">
                Health & Safety
              </h3>
              <p>
                We manage HSE as a core business activity and expect everyone to
                be a Safety Leader.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 border-b-2 border-white inline-block">
                Team Work
              </h3>
              <p>
                We work shoulder to shoulder to achieve team objectives & glory.
                We believe “win-win” always for our customers, partners, and
                colleagues.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-blue-900 text-gray-200 py-10 px-12 flex justify-between items-center">
        <div className="flex-2">
          <p className="text-2xl leading-relaxed">
            Looking for an Adequate Solution for your Company?
          </p>
          <br />
          <span className="text-sm">
            Contact us today for free consultation or more information.
          </span>
        </div>
        <div className="flex-1 text-right">
          <a
            href="#"
            className="inline-block py-4 px-6 text-gray-200 border-2 border-yellow-400 rounded-md text-base transition-colors duration-200 hover:bg-yellow-400 hover:text-blue-900"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;
