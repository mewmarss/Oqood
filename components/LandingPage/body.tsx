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
import Link from "next/link";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <section>
        <Carousel />
      </section>

      <section className="flex flex-col gap-2 mt-14">
        <MaxWidthWrapper>
          <div className="flex flex-col gap-2 text-blue-900">
            <h2 className="font-light">ABOUT US</h2>
            <h2 className="font-extrabold text-3xl">WHO WE ARE</h2>
            <div className="w-24 h-[2px] bg-blue-900"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">
            <div className="flex flex-col">
              <h1 className="text-blue-900 text-5xl font-bold">
                OQOOD Al-BALAD
              </h1>
              <div className="text-gray-500 mt-6">
                <p className="text-left leading-relaxed mb-6">
                  Oqood is a dynamic and versatile company based in the heart of
                  the support industries in Jubail. We specialize in
                  contracting, trading, and manufacturing, offering a
                  comprehensive range of services designed to meet the diverse
                  needs of our clients. Our commitment to excellence is
                  reflected in our unwavering focus on ethical practices and the
                  timely delivery of projects and products.
                </p>

                <p className="text-left leading-relaxed">
                  At Oqood, we pride ourselves on our ability to navigate the
                  complexities of the modern market while maintaining the
                  highest standards of integrity and efficiency. Our dedicated
                  team works tirelessly to ensure that every project is
                  completed to the utmost satisfaction of our clients,
                  reinforcing our reputation as a reliable and trustworthy
                  partner in the industry. Join us at Oqood, where our
                  dedication to ethics and punctuality drives our success and
                  sets us apart in the competitive landscape of contracting,
                  trading, and manufacturing.
                </p>
              </div>
            </div>
            <div className="w-full h-auto hidden md:block">
              <Image
                src={aboutImg}
                alt="Parts"
                objectFit="cover"
                width={500}
                height={500}
              />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="flex flex-col gap-2 mt-16">
        <MaxWidthWrapper>
          <div className="flex flex-col gap-2 text-blue-900">
            <h2 className="font-light">THE DIFFERENCE</h2>
            <h2 className="font-extrabold text-3xl">WHY CHOOSE US</h2>
            <div className="w-24 h-[2px] bg-blue-900"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            <div className="border-r border-gray-400 pr-4 pl-4 md:pl-0">
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
                To deliver exceptional contracting, trading, and manufacturing
                services in Saudi Arabia, driven by innovation, quality, and
                integrity.
              </p>
            </div>
            <div className="pl-4">
              <h2 className="text-lg font-semibold">Our Vision</h2>
              <p className="text-gray-500">
                To be a leading force in Saudi Arabia&apos;s industrial
                landscape, setting new benchmarks in quality and efficiency.
              </p>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section
        className="flex flex-col gap-2 mt-16 py-10"
        style={{
          backgroundImage: `url(${catalogImg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <MaxWidthWrapper>
          <div className="flex flex-col gap-4">
            <div className="text-center mt-10">
              <h1 className="font-bold text-white text-3xl">
                OUR PRODUCTS RANGE
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 mb-10">
            {items.map((item) => (
              <Link key={item.name} href={item.href} passHref>
                <div className="border rounded-lg overflow-hidden cursor-pointer">
                  <div className="relative w-full h-64">
                    <Image
                      src={item.image}
                      alt={item.name}
                      layout="fill" // Fills the entire container
                      objectFit="cover" // Ensures the image covers the container
                      className="absolute inset-0"
                    />
                  </div>
                  <div className="p-4 text-center text-white bg-blue-900">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="flex flex-col gap-2 mt-16">
        <MaxWidthWrapper>
          <div className="flex flex-col">
            <div className="text-center">
              <h2 className="font-medium text-3xl text-blue-900">
                Why Choose OQOOD ?
              </h2>
            </div>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
              <div className="flex flex-col gap-4 items-center text-center">
                <Image src={qualityImg} alt="Quality" className="w-16" />
                <h2 className="text-blue-900 text-lg">Quality</h2>
                <p className="text-gray-500 text-sm">
                  We provide unwavering commitment to quality while
                  manufacturing and hence our boilers have low operational cost.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center text-center">
                <Image src={collabImg} alt="Collaboration" className="w-16" />
                <h2 className="text-blue-900 text-lg">Innovation</h2>
                <p className="text-gray-500 text-sm">
                  Oqood has a strong commitment to innovation, continuously
                  striving to develop advanced thermal solutions that cater to
                  the evolving needs of diverse industries.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center text-center">
                <Image
                  src={innovationImg}
                  alt="Sustainability"
                  className="w-16"
                />
                <h2 className="text-blue-900 text-lg">Sustainability</h2>
                <p className="text-gray-500 text-sm">
                  Our products are designed to maximize energy efficiency,
                  resulting in reduced fuel consumption and lower carbon
                  footprints.
                </p>
              </div>
              <div className="flex flex-col gap-4 items-center text-center">
                <Image
                  src={customerImg}
                  alt="Customer Centric"
                  className="w-16"
                />
                <h2 className="text-blue-900 text-lg">Customer Centric</h2>
                <p className="text-gray-500 text-sm">
                  Our dedicated team of professionals ensures prompt and
                  efficient customer service, from initial consultation to
                  after-sales support.
                </p>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
