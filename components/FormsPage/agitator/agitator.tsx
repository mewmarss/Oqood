"use client";

import Image from "next/image";
import React, { useState } from "react";
import Navbar from "@/components/LandingPage/components/Navbar";
import Footer from "@/components/LandingPage/components/Footer";
import { sendMail } from "@/lib/actions/sendMail";
import { agitatorMail } from "@/lib/email/agitator";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const AgitatorFormPage = () => {
  const [isMailSending, setIsMailSending] = useState<boolean>(false);

  const initialFormData = {
    // Technical Specifications
    dFive: "",
    d51: "",
    shaftOD: "",
    shaft1OD: "",
    shaft2OD: "",
    padPlateID: "",
    boltCircle: "",
    numberOfBolts: "",
    boltSize: "",
    raisedCollar: "",
    thickness: "",
    shaftStepFromPad: "",
    distanceBetweenTwoSteps: "",
    nearestObstruction: "",
    radius: "",

    // Client Information
    client: "",
    address: "",

    // Agitator Data
    make: "",
    model: "",
    itemTagNo: "",
    materialOfConstruction: "",
    existingSealArrangement: "",
    mechanicalSealMakeType: "",
    existingMechanicalSealSatisfactory: "",
    sealFailureDetails: "",

    // Operating Parameters
    vesselPressure: "",
    speed: "",
    directionOfRotation: "",

    // Fluid Details
    fluid: "",
    temperature: "",
    specificGravity: "",
    velocity: "",
    fluidDescription: "",
    percentageOfSolids: "",
    grainSize: "",

    // API Plans
    recommendedBufferFluid: "",
    recommendedBufferFluidTemperature: "",
    recommendedApiPlan: "",

    // Remarks
    remarks: "",

    // Pad Plate Style
    padPlateStyle: "I",
  };

  const [formData, setFormData] = useState({
    // Technical Specifications
    dFive: "",
    d51: "",
    shaftOD: "",
    shaft1OD: "",
    shaft2OD: "",
    padPlateID: "",
    boltCircle: "",
    numberOfBolts: "",
    boltSize: "",
    raisedCollar: "",
    thickness: "",
    shaftStepFromPad: "",
    distanceBetweenTwoSteps: "",
    nearestObstruction: "",
    radius: "",

    // Client Information
    client: "",
    address: "",

    // Agitator Data
    make: "",
    model: "",
    itemTagNo: "",
    materialOfConstruction: "",
    existingSealArrangement: "",
    mechanicalSealMakeType: "",
    existingMechanicalSealSatisfactory: "",
    sealFailureDetails: "",

    // Operating Parameters
    vesselPressure: "",
    speed: "",
    directionOfRotation: "",

    // Fluid Details
    fluid: "",
    temperature: "",
    specificGravity: "",
    velocity: "",
    fluidDescription: "",
    percentageOfSolids: "",
    grainSize: "",

    // API Plans
    recommendedBufferFluid: "",
    recommendedBufferFluidTemperature: "",
    recommendedApiPlan: "",

    // Remarks
    remarks: "",

    // Pad Plate Style
    padPlateStyle: "I",
  });

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
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
      const htmlContent = agitatorMail({
        formData: formData,
      });
      await sendMail(
        htmlContent,
        `Enquiry made for Agitator Data Sheet: ${formData.client}`
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
              src="/images/forms/images/formAgitator.PNG"
              alt="Pump"
              width={634}
              height={444}
            />
          </div>

          {/* Technical Specifications */}
          <h2 className="text-xl font-semibold mt-6 mb-4">
            AGITATOR INFORMATION DATA
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">d - Shaft OD:</label>
              <input
                type="text"
                name="shaftOD"
                value={formData.shaftOD}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">d1 - Shaft OD:</label>
              <input
                type="text"
                name="shaft1OD"
                value={formData.shaft1OD}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">d2 - Shaft OD:</label>
              <input
                type="text"
                name="shaft2OD"
                value={formData.shaft2OD}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">d3 - Pad plate ID:</label>
              <input
                type="text"
                name="padPlateID"
                value={formData.padPlateID}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">d5 - Spigot:</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="dFive"
                  value={formData?.dFive || ""}
                  onChange={handleInputChange}
                  className="w-1/2 p-2 border rounded"
                  placeholder="d5"
                />
                <input
                  type="text"
                  name="d51"
                  value={formData.d51}
                  onChange={handleInputChange}
                  className="w-1/2 p-2 border rounded"
                  placeholder="d51"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2">d9 - Bolt Circle:</label>
              <input
                type="text"
                name="boltCircle"
                value={formData.boltCircle}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">M - No. of Bolts:</label>
              <input
                type="text"
                name="numberOfBolts"
                value={formData.numberOfBolts}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">Bolt Size:</label>
              <input
                type="text"
                name="boltSize"
                value={formData.boltSize}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">L - Raised collar:</label>
              <input
                type="text"
                name="raisedCollar"
                value={formData.raisedCollar}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">L1 - Thickness:</label>
              <input
                type="text"
                name="thickness"
                value={formData.thickness}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">L2 - Shaft step from Pad:</label>
              <input
                type="text"
                name="shaftStepFromPad"
                value={formData.shaftStepFromPad}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">
                L3 - Distance Between two steps:
              </label>
              <input
                type="text"
                name="distanceBetweenTwoSteps"
                value={formData.distanceBetweenTwoSteps}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">L9 - Nearest obstruction:</label>
              <input
                type="text"
                name="nearestObstruction"
                value={formData.nearestObstruction}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2">R - Radius:</label>
              <input
                type="text"
                name="radius"
                value={formData.radius}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          {/* Pad Plate Style */}
          <div className="mt-4">
            <label className="block mb-2">Pad Plate Style:</label>
            <select
              name="padPlateStyle"
              value={formData.padPlateStyle}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="I">PAD PLATE STYLE - I</option>
              <option value="II">PAD PLATE STYLE - II</option>
              <option value="III">PAD PLATE STYLE - III</option>
            </select>
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

        {/* Agitator Data */}
        <h2 className="text-xl font-semibold mt-6 mb-4">Agitator Data</h2>
        <div className="grid grid-cols-2 gap-4">
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
            <label className="block mb-2">Item/Tag No.:</label>
            <input
              type="text"
              name="itemTagNo"
              value={formData.itemTagNo}
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
        <div className="mt-4">
          <label className="block mb-2">Existing seal arrangement:</label>
          <select
            name="existingSealArrangement"
            value={formData.existingSealArrangement}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select arrangement</option>
            <option value="Gland Packing">Gland Packing</option>
            <option value="Mechanical Seal">Mechanical Seal</option>
          </select>
        </div>
        {formData.existingSealArrangement === "Mechanical Seal" && (
          <div className="mt-4">
            <label className="block mb-2">
              If mechanical seal, seal make & type:
            </label>
            <input
              type="text"
              name="mechanicalSealMakeType"
              value={formData.mechanicalSealMakeType}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        )}
        <div className="mt-4">
          <label className="block mb-2">
            Existing mechanical seal working satisfactory:
          </label>
          <select
            name="existingMechanicalSealSatisfactory"
            value={formData.existingMechanicalSealSatisfactory}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {formData.existingMechanicalSealSatisfactory === "No" && (
          <div className="mt-4">
            <label className="block mb-2">
              If No, give details of seal failure in brief:
            </label>
            <textarea
              name="sealFailureDetails"
              value={formData.sealFailureDetails}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              rows={3}
            ></textarea>
          </div>
        )}

        {/* Operating Parameters */}
        <h2 className="text-xl font-semibold mt-6 mb-4">
          Operating Parameters
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Vessel Pressure:</label>
            <input
              type="text"
              name="vesselPressure"
              value={formData.vesselPressure}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
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
            <label className="block mb-2">
              Direction of rotation from drive end:
            </label>
            <select
              name="directionOfRotation"
              value={formData.directionOfRotation}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Select</option>
              <option value="CW">CW</option>
              <option value="CCW">CCW</option>
            </select>
          </div>
        </div>

        {/* Fluid Details */}
        <h2 className="text-xl font-semibold mt-6 mb-4">Fluid Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Fluid:</label>
            <input
              type="text"
              name="fluid"
              value={formData.fluid}
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
            <label className="block mb-2">Specific Gravity:</label>
            <input
              type="text"
              name="specificGravity"
              value={formData.specificGravity}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Velocity:</label>
            <input
              type="text"
              name="velocity"
              value={formData.velocity}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block mb-2">Fluid Description:</label>
          <div className="flex space-x-4">
            {["CLEAN", "DIRTY", "ABRASIVE", "SLURRY", "TOXIC"].map((type) => (
              <label key={type} className="inline-flex items-center">
                <input
                  type="radio"
                  name="fluidDescription"
                  value={type}
                  checked={formData.fluidDescription === type}
                  onChange={handleInputChange}
                  className="form-radio"
                />
                <span className="ml-2">{type}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-2">Percentage Of solids:</label>
            <input
              type="text"
              name="percentageOfSolids"
              value={formData.percentageOfSolids}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Grain Size:</label>
            <input
              type="text"
              name="grainSize"
              value={formData.grainSize}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* API PLANS */}
        <h2 className="text-xl font-semibold mt-6 mb-4">API Plans</h2>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block mb-2">
              Recommended buffer fluid for double seal:
            </label>
            <input
              type="text"
              name="recommendedBufferFluid"
              value={formData.recommendedBufferFluid}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Temperature:</label>
            <input
              type="text"
              name="recommendedBufferFluidTemperature"
              value={formData.recommendedBufferFluidTemperature}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block mb-2">Recommended API Plan:</label>
          <select
            name="recommendedApiPlan"
            value={formData.recommendedApiPlan}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="">Select API Plan</option>
            <option value="Plan 52">
              Plan 52 (Non Pressurised thermosyphon)
            </option>
            <option value="Plan 53">Plan 53 (Pressurised Thermosyphon)</option>
            <option value="Plan 54">
              Plan 54 (Buffer Fluid Circulation by external pump/source)
            </option>
          </select>
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

export default AgitatorFormPage;
