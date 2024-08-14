"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "../LandingPage/components/Footer";
import Navbar from "../LandingPage/components/Navbar";
import pumpImage from "../../public/images/pumpimage.jpg";
import { enquiryMail } from "@/lib/email/enquiry";
import { sendMail } from "@/lib/actions/sendMail";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const serviceOptions = [
  "EPC PROJECT DIVISION",
  "CHEMICAL DIVISION",
  "PUMPS",
  "MECHANICAL SEALS",
  "SEAL SUPPORTING SYSTEMS",
  "VALVES",
  "GRAPHITE PACKINGS & GASKETS",
  "EXPANSION JOINT & BELLOWS",
  "INPRO SEALS (BEARING ISOLATOR)",
  "SEGMENTAL CARBON RINGS",
  "COUPLINGS",
  "ALL TYPE OF INSTRUMENTS",
  "OTHER",
];

const EnquiryPage = () => {
  const [isMailSending, setIsMailSending] = useState<boolean>(false);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [descriptionMessage, setDescriptionMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceInterest, setServiceInterest] = useState("");

  const handleSendMail = async () => {
    setIsMailSending(true);

    if (!senderName || !senderEmail || !descriptionMessage) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    try {
      const htmlContent = enquiryMail({
        sender: senderEmail,
        description: descriptionMessage,
        interest: serviceInterest,
        phone: phone,
      });
      await sendMail(htmlContent, `Enquiry made by ${senderName}: Oqood`);
      toast.success("Email sent successfully!");
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsMailSending(false);
    }
  };

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
          <form
            onSubmit={async (e) => {
              e.preventDefault();
              await handleSendMail();
            }}
            className="space-y-4"
          >
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Name *"
                className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email *"
                className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Phone"
                className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <select
                className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
                value={serviceInterest}
                onChange={(e) => setServiceInterest(e.target.value)}
                required
              >
                <option value="">Select Interested Service</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <textarea
              placeholder="Messages *"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900 h-32"
              value={descriptionMessage}
              onChange={(e) => setDescriptionMessage(e.target.value)}
              required
            ></textarea>
            <Button
              type="submit"
              className="bg-red-500 text-white font-bold py-2 px-6 rounded-md hover:bg-red-600 transition"
              disabled={isMailSending}
            >
              {isMailSending ? "Sending..." : "SUBMIT"}
            </Button>
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

      <div className="mt-12">
        <Footer />
      </div>
    </>
  );
};

export default EnquiryPage;
