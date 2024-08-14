import MaxWidthWrapper from "../Wrapper/max-width-wrapper";
import aboutImg from "../../public/images/about-image.jpg";
import catalogImg from "../../public/images/catalog-image.jpg";
import qualityImg from "../../public/images/choose/Quality.png";
import customerImg from "../../public/images/choose/Customer.png";
import collabImg from "../../public/images/choose/collaboration.png";
import innovationImg from "../../public/images/choose/innovation.png";
import Image from "next/image";
import { items } from "./data/productsRange";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <section>
        <Carousel />
      </section>

      <section className=" flex flex-col gap-2 mt-14">
        <MaxWidthWrapper>
          <div className=" flex flex-col gap-2 text-blue-900">
            <h2 className=" font-light">ABOUT US</h2>
            <h2 className=" font-extrabold text-3xl">WHO WE ARE</h2>
            <div className=" w-24 h-[2px] bg-blue-900"></div>
          </div>
          <div className="grid grid-cols-2 gap-10 mt-8">
            <div className=" flex flex-col">
              <h1 className=" text-blue-900 text-5xl font-bold">
                OQOOD Al-BALAD
              </h1>
              <div className=" text-gray-500">
                <p className="mt-6 text-left leading-relaxed mb-6">
                  Hydro Serve Pumps & Machinery Trading Company is the one of
                  the leading trading company supplying & providing
                  comprehensive range of equipment for all type of Industries
                  including Oil & gas, Petrochemical, Fertilizer,
                  Pharmaceutical, Cement, Paper Pulp, Power, Paint, Marine, Food
                  & Beverages etc. companies across UAE & Middle East. The
                  company follows ISO 9001 : 2015 standards as per established
                  Quality Management System.
                </p>

                <p className="text-left leading-relaxed">
                  All our Products are sourced from reputed Original Equipment
                  Manufacturers & are quality certified as per ISO & other
                  international standards. We are known as the most reliable
                  supplier of quality products at competitive prices with timely
                  deliveries. WE have earned name among the entire UAE and
                  overseas customers for providing Cost Cutting effective
                  solutions. We always endeavor to provide prompt responses to
                  queries and complete technical support after sales.
                </p>
              </div>
            </div>
            <div>
              <Image src={aboutImg} alt="Parts" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className=" flex flex-col gap-2 mt-16">
        <MaxWidthWrapper>
          <div className=" flex flex-col gap-2 text-blue-900">
            <h2 className=" font-light">THE DIFFERENCE</h2>
            <h2 className=" font-extrabold text-3xl">WHY CHOOSE US</h2>
            <div className=" w-24 h-[2px] bg-blue-900"></div>
          </div>
          <div className="grid grid-cols-3 gap-2 mt-10">
            <div className="border-r border-gray-400 pr-4">
              <h2 className="text-lg font-semibold">Value</h2>
              <p className="text-gray-500">
                Innovation, Reliability, Excellence, Collaboration,
                Environmental Responsibility - Driving Success with Integrity
                and Sustainability.
              </p>
            </div>
            <div className="border-r border-gray-400 px-4">
              <h2 className="text-lg font-semibold">Our Mission</h2>
              <p className="text-gray-500">
                To achieve utmost customer satisfaction by providing innovative
                and sustainable technology solutions & products to our
                customers, meeting their business objectives.
              </p>
            </div>
            <div className="pl-4">
              <h2 className="text-lg font-semibold">Our Vision</h2>
              <p className="text-gray-500">
                Our Vision is strive for excellence & become a reliable &
                Competitive Partner which provides complete solution, services &
                supply International standard of quality products, adding value
                to your business.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section
        className="flex flex-col gap-2 mt-16"
        style={{
          backgroundImage: `url(${catalogImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <MaxWidthWrapper>
          <div className=" flex flex-col gap-4">
            <div className=" text-center mt-10">
              <h1 className=" font-bold text-white text-3xl">
                OUR PRODUCTS RANGE
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-10 mb-10">
            {items.map((item) => (
              <div
                key={item.name}
                className="border rounded-lg overflow-hidden"
              >
                <div className="relative w-full h-64">
                  {" "}
                  {/* Adjust height as needed */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    layout="fill" // Fills the entire container
                    objectFit="cover" // Ensures the image covers the container
                    className="absolute inset-0 hover:cursor-pointer"
                  />
                </div>
                <div className="p-4 text-center text-white">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <section className=" flex flex-col gap-2 mt-16">
        <MaxWidthWrapper>
          <div className=" flex flex-col">
            <div className=" text-center">
              <h2 className=" font-medium text-3xl text-blue-900">
                Why Choose Oqood ?
              </h2>
            </div>
            <div className=" mt-20 grid grid-cols-4 gap-14 mb-10">
              <div className=" flex flex-col gap-4 items-center text-center">
                <Image src={qualityImg} alt="Quality" className=" w-16" />
                <h2 className=" text-blue-900 text-lg">Quality</h2>
                <p className=" text-gray-500 text-sm">
                  We provide unwavering commitment to quality while
                  manufacturing and hence our boilers have low operational cost
                </p>
              </div>
              <div className=" flex flex-col gap-4 items-center text-center">
                <Image src={collabImg} alt="Quality" className=" w-16" />
                <h2 className=" text-blue-900 text-lg">Innovation</h2>
                <p className=" text-gray-500 text-sm">
                  Oqood has a strong commitment to innovation, continuously
                  striving to develop advanced thermal solutions that cater to
                  the evolving needs of diverse industries
                </p>
              </div>
              <div className=" flex flex-col gap-4 items-center text-center">
                <Image src={innovationImg} alt="Quality" className=" w-16" />
                <h2 className=" text-blue-900 text-lg">Sustainability</h2>
                <p className=" text-gray-500 text-sm">
                  Our products are designed to maximize energy efficiency,
                  resulting in reduced fuel consumption and lower carbon
                  footprints
                </p>
              </div>
              <div className=" flex flex-col gap-4 items-center text-center">
                <Image src={customerImg} alt="Quality" className=" w-16" />
                <h2 className=" text-blue-900 text-lg">Customer centric</h2>
                <p className=" text-gray-500 text-sm">
                  Our dedicated team of professionals ensures prompt and
                  efficient customer service, from initial consultation to
                  after-sales support
                </p>
              </div>
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

export default LandingPage;
