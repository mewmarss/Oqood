"use client";

import Image from "next/image";
import React, { useState } from "react";
import Navbar from "@/components/LandingPage/components/Navbar";
import Footer from "@/components/LandingPage/components/Footer";
import { sendMail } from "@/lib/actions/sendMail";
import { bearingMail } from "@/lib/email/bearing";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const BearingFormPage = () => {
  const [isMailSending, setIsMailSending] = useState<boolean>(false);

  const initialFormData = {
    stepShaftOD: "",
    shaftOD: "",
    boreID: "",
    flatDia: "",
    availableHousingDepth: "",
    distToStepFromHousing: "",
    distanceToOutboardFirstObstruction: "",
    client: "",
    address: "",
    equipmentType: "",
    make: "",
    model: "",
    materialOfConstruction: "",
    previousSealDesign: "",
    sealManufacturer: "",
    sealPartNumber: "",
    quantityRequired: "",
    sealDesign: "",
    mountingMethod: "",
    constructionMaterial: "",
    sealPurpose: "",
    speed: "",
    temperature: "",
    pressure: "",
    totalIndicatedRunout: "",
    axialMovement: "",
    shaftOrientation: "",
    lubricationMethod: "",
    mediaFillLevel: "",
    mediaManufacturer: "",
    mediaProductName: "",
    remarks: "",
  };

  const [formData, setFormData] = useState({
    stepShaftOD: "",
    shaftOD: "",
    boreID: "",
    flatDia: "",
    availableHousingDepth: "",
    distToStepFromHousing: "",
    distanceToOutboardFirstObstruction: "",
    client: "",
    address: "",
    equipmentType: "",
    make: "",
    model: "",
    materialOfConstruction: "",
    previousSealDesign: "",
    sealManufacturer: "",
    sealPartNumber: "",
    quantityRequired: "",
    sealDesign: "",
    mountingMethod: "",
    constructionMaterial: "",
    sealPurpose: "",
    speed: "",
    temperature: "",
    pressure: "",
    totalIndicatedRunout: "",
    axialMovement: "",
    shaftOrientation: "",
    lubricationMethod: "",
    mediaFillLevel: "",
    mediaManufacturer: "",
    mediaProductName: "",
    remarks: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const isFormValid = (formData: Record<string, any>): boolean => {
  //   return Object.values(formData).every((value) => {
  //     return value !== "" && value !== null && value !== undefined;
  //   });
  // };

  const handleSendMail = async () => {
    setIsMailSending(true);

    if (!formData.client || !formData.address || !formData.remarks) {
      toast.error("Please fill in all the required fields.");
      setIsMailSending(false);
      return;
    }

    try {
      const htmlContent = bearingMail({
        formData: formData,
      });
      await sendMail(
        htmlContent,
        `Enquiry made for Bearing Isolator Data Sheet: ${formData.client}`
      );
      toast.success("Email sent successfully!");
      setFormData(initialFormData);
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

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await handleSendMail();
        }}
        className="max-w-7xl mx-auto p-6 bg-white shadow-md rounded-lg"
      >
        <div className=" flex flex-col mb-8">
          <div className=" items-center flex justify-center">
            <Image
              src="/images/forms/images/formBearing.PNG"
              alt="Bearing"
              width={434}
              height={444}
            />
          </div>

          {/* Bearing Isolator Information Data */}
          <h2 className="text-xl font-semibold mt-6 mb-4">
            BEARING ISOLATOR INFORMATION DATA
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">d1 - Step Shaft OD:</label>
              <input
                type="text"
                name="stepShaftOD"
                value={formData.stepShaftOD}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">d2 - Shaft OD:</label>
              <input
                type="text"
                name="shaftOD"
                value={formData.shaftOD}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">d3 - Bore ID:</label>
              <input
                type="text"
                name="boreID"
                value={formData.boreID}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">
                d4 - Flat Dia. free of obstructions:
              </label>
              <input
                type="text"
                name="flatDia"
                value={formData.flatDia}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">
                L1 - Available housing depth:
              </label>
              <input
                type="text"
                name="availableHousingDepth"
                value={formData.availableHousingDepth}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">
                L2 - Dist. to step from housing:
              </label>
              <input
                type="text"
                name="distToStepFromHousing"
                value={formData.distToStepFromHousing}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">
                L3 - Distance to outboard first obstruction:
              </label>
              <input
                type="text"
                name="distanceToOutboardFirstObstruction"
                value={formData.distanceToOutboardFirstObstruction}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        {/* Client Information */}
        <h2 className="text-xl font-semibold mt-6 mb-4">Client Information</h2>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="block mb-2">Client:</label>
            <input
              type="text"
              name="client"
              value={formData.client}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Address:</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Equipment Details */}
        <h2 className="text-xl font-semibold mt-6 mb-4">Equipment Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Equipment type:</label>
            <select
              name="equipmentType"
              value={formData.equipmentType}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select type</option>
              <option value="pump">Pump</option>
              <option value="heat">Heat</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Make:</label>
            <input
              type="text"
              name="make"
              value={formData.make}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Model:</label>
            <input
              type="text"
              name="model"
              value={formData.model}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Material of Construction:</label>
            <input
              type="text"
              name="materialOfConstruction"
              value={formData.materialOfConstruction}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Seal Information */}
        <h2 className="text-xl font-semibold mt-6 mb-4">Seal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Previous seal design:</label>
            <select
              name="previousSealDesign"
              value={formData.previousSealDesign}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select design</option>
              <option value="Oil seal">Oil seal</option>
              <option value="Bearing isolator">Bearing isolator</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Seal manufacturer:</label>
            <input
              type="text"
              name="sealManufacturer"
              value={formData.sealManufacturer}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Seal Part Number:</label>
            <input
              type="text"
              name="sealPartNumber"
              value={formData.sealPartNumber}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Quantity required:</label>
            <input
              type="number"
              name="quantityRequired"
              value={formData.quantityRequired}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Seal design:</label>
            <select
              name="sealDesign"
              value={formData.sealDesign}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select design</option>
              <option value="Solid">Solid</option>
              <option value="Split">Split</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Mounting method:</label>
            <select
              name="mountingMethod"
              value={formData.mountingMethod}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select method</option>
              <option value="Cam lock o ring method">
                Cam lock o ring method
              </option>
              <option value="Epoxy mount">Epoxy mount</option>
              <option value="Bolting flange">Bolting flange</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Construction material:</label>
            <select
              name="constructionMaterial"
              value={formData.constructionMaterial}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select material</option>
              <option value="Bronze">Bronze</option>
              <option value="SS316">SS316</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Seal purpose:</label>
            <select
              name="sealPurpose"
              value={formData.sealPurpose}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select purpose</option>
              <option value="Contamination Exlusion">
                Contamination Exlusion
              </option>
              <option value="Lubricant Retention">Lubricant Retention</option>
              <option value="Shaft Grounding">Shaft Grounding</option>
            </select>
          </div>
        </div>

        {/* Application Condition */}
        <h2 className="text-xl font-semibold mt-6 mb-4">
          Application Condition
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Speed:</label>
            <input
              type="text"
              name="speed"
              value={formData.speed}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Temperature:</label>
            <input
              type="text"
              name="temperature"
              value={formData.temperature}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Pressure:</label>
            <input
              type="text"
              name="pressure"
              value={formData.pressure}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Total indicated run out:</label>
            <input
              type="text"
              name="totalIndicatedRunout"
              value={formData.totalIndicatedRunout}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Axial movement:</label>
            <input
              type="text"
              name="axialMovement"
              value={formData.axialMovement}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Shaft Orientation:</label>
            <select
              name="shaftOrientation"
              value={formData.shaftOrientation}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select orientation</option>
              <option value="Horizontal">Horizontal</option>
              <option value="Vertical top">Vertical top</option>
              <option value="Vertical bottom">Vertical bottom</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Lubrication method:</label>
            <select
              name="lubricationMethod"
              value={formData.lubricationMethod}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select method</option>
              <option value="Grease">Grease</option>
              <option value="Oil sump">Oil sump</option>
              <option value="Air oil">Air oil</option>
              <option value="Oil mist">Oil mist</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Media fill level:</label>
            <select
              name="mediaFillLevel"
              value={formData.mediaFillLevel}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select level</option>
              <option value="Below shaft">Below shaft</option>
              <option value="Mid shaft">Mid shaft</option>
              <option value="Submerged shaft">Submerged shaft</option>
            </select>
          </div>
          <div>
            <label className="block mb-2">Media manufacturer:</label>
            <input
              type="text"
              name="mediaManufacturer"
              value={formData.mediaManufacturer}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Media product name:</label>
            <input
              type="text"
              name="mediaProductName"
              value={formData.mediaProductName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Remarks */}
        <div className="mt-6">
          <label className="block mb-2">Remarks:</label>
          <textarea
            name="remarks"
            value={formData.remarks}
            onChange={handleInputChange}
            rows={3}
            className="w-full p-2 border rounded"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="mt-6">
          <Button
            type="submit"
            className="bg-red-500 text-white font-bold py-2 px-6 rounded-md hover:bg-red-600 transition w-full md:w-auto"
            disabled={isMailSending}
          >
            {isMailSending ? "Sending..." : "SUBMIT"}
          </Button>
        </div>
      </form>

      <div className=" mt-14">
        <Footer />
      </div>
    </>
  );
};

export default BearingFormPage;
