"use client";

import Image from "next/image";
import React, { useState } from "react";
import formPumpImage from "../../../public/images/forms/images/formPump.PNG";
import Navbar from "@/components/LandingPage/components/Navbar";
import Footer from "@/components/LandingPage/components/Footer";
import { sendMail } from "@/lib/actions/sendMail";
import { pumpMail } from "@/lib/email/pump";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

const PumpFormPage = () => {
  const [isMailSending, setIsMailSending] = useState<boolean>(false);

  const initialFormData = {
    client: "",
    address: "",
    make: "",
    model: "",
    materialOfConstruction: "",
    bearingBracket: "",
    itemTagNo: "",
    existingSeal: "",
    totalHead: "",
    suctionPressure: "",
    dischargePressure: "",
    boxPressure: "",
    speed: "",
    directionOfRotation: "",
    fluid: "",
    pumpingTemperature: "",
    maximumTemperature: "",
    specificGravity: "",
    viscosity: "",
    boilingPoint: "",
    freezingPoint: "",
    fluidDescription: "",
    percentageOfSolids: "",
    grainSize: "",
    sealFlushingAcceptable: false,
    sealFlushingFluid: "",
    recommendedBufferFluid: "",
    recommendedBufferFluidTemperature: "",
    apiPlan: "",
    remarks: "",

    shaftOD: "",
    sleeveOD: "",
    stuffingBoxID: "",
    stuffingBoxBore: "",
    boltCircle: "",
    numberOfBolts: "",
    boltSize: "",
    sleeveExtention: "",
    shaftHub: "",
    impellerSleeveLength: "",
    stuffingBoxDepth: "",
    nearestObstruction: "",
    studHolesOrientation: "",
    stuffingBoxCover: "",

    // Dimension fields
    d101: "",
    d102: "",
    L: "",
    L1: "",
    L2: "",
    L3: "",
    L8: "",
    L9: "",
    L11: "",
    L12: "",
    M: "",
    d: "",
    d1: "",
    d2: "",
    d4: "",
    d5: "",
    d9: "",
    a: "",
    b: "",
    c: "",
  };

  const [formData, setFormData] = useState({
    client: "",
    address: "",
    make: "",
    model: "",
    materialOfConstruction: "",
    bearingBracket: "",
    itemTagNo: "",
    existingSeal: "",
    totalHead: "",
    suctionPressure: "",
    dischargePressure: "",
    boxPressure: "",
    speed: "",
    directionOfRotation: "",
    fluid: "",
    pumpingTemperature: "",
    maximumTemperature: "",
    specificGravity: "",
    viscosity: "",
    boilingPoint: "",
    freezingPoint: "",
    fluidDescription: "",
    percentageOfSolids: "",
    grainSize: "",
    sealFlushingAcceptable: false,
    sealFlushingFluid: "",
    recommendedBufferFluid: "",
    recommendedBufferFluidTemperature: "",
    apiPlan: "",
    remarks: "",

    shaftOD: "",
    sleeveOD: "",
    stuffingBoxID: "",
    stuffingBoxBore: "",
    boltCircle: "",
    numberOfBolts: "",
    boltSize: "",
    sleeveExtention: "",
    shaftHub: "",
    impellerSleeveLength: "",
    stuffingBoxDepth: "",
    nearestObstruction: "",
    studHolesOrientation: "",
    stuffingBoxCover: "",

    // Dimension fields
    d101: "",
    d102: "",
    L: "",
    L1: "",
    L2: "",
    L3: "",
    L8: "",
    L9: "",
    L11: "",
    L12: "",
    M: "",
    d: "",
    d1: "",
    d2: "",
    d4: "",
    d5: "",
    d9: "",
    a: "",
    b: "",
    c: "",
    // Add more fields for pump information data here
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

    if (!formData.client || !formData.remarks || !formData.address) {
      toast.error("Please fill in all the required fields.");
      setIsMailSending(false);
      return;
    }

    try {
      const htmlContent = pumpMail({
        formData: formData,
      });
      await sendMail(
        htmlContent,
        `Enquiry made for Pump Data Sheet: ${formData.client}`
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
        className="max-w-7xl mx-auto p-6 bg-white shadow-xl rounded-lg mt-5"
      >
        <div className=" grid grid-cols-2 mb-8">
          <div>
            <Image src={formPumpImage} alt="Pump" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mt-6 mb-4">
              PUMP INFORMATION DATA
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
                <label className="block mb-2">d1 - Sleeve OD:</label>
                <input
                  type="text"
                  name="sleeveOD"
                  value={formData.sleeveOD}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">d2 - Stuffing Box ID:</label>
                <input
                  type="text"
                  name="stuffingBoxID"
                  value={formData.stuffingBoxID}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">d4 - Stuffing Box Bore:</label>
                <input
                  type="text"
                  name="stuffingBoxBore"
                  value={formData.stuffingBoxBore}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">d5 - Spigot dia:</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    name="d101"
                    value={formData.d101}
                    onChange={handleInputChange}
                    className="w-1/2 p-2 border rounded"
                    placeholder="d101"
                  />
                  <input
                    type="text"
                    name="d102"
                    value={formData.d102}
                    onChange={handleInputChange}
                    className="w-1/2 p-2 border rounded"
                    placeholder="d102"
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
                <label className="block mb-2">L - Raised Collar:</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    name="L11"
                    value={formData.L11}
                    onChange={handleInputChange}
                    className="w-1/2 p-2 border rounded"
                    placeholder="L11"
                  />
                  <input
                    type="text"
                    name="L12"
                    value={formData.L12}
                    onChange={handleInputChange}
                    className="w-1/2 p-2 border rounded"
                    placeholder="L12"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2">L1 - Sleeve Extention:</label>
                <input
                  type="text"
                  name="sleeveExtention"
                  value={formData.sleeveExtention}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">L2 - Shaft Hub:</label>
                <input
                  type="text"
                  name="shaftHub"
                  value={formData.shaftHub}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">
                  L3 - Impeller Sleeve Length:
                </label>
                <input
                  type="text"
                  name="impellerSleeveLength"
                  value={formData.impellerSleeveLength}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div>
                <label className="block mb-2">L8 - Stuffing Box depth:</label>
                <input
                  type="text"
                  name="stuffingBoxDepth"
                  value={formData.stuffingBoxDepth}
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
            </div>

            <div className="mt-4">
              <label className="block mb-2">Stud holes:</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="a"
                  value={formData.a}
                  onChange={handleInputChange}
                  className="w-1/3 p-2 border rounded"
                  placeholder="a"
                />
                <input
                  type="text"
                  name="b"
                  value={formData.b}
                  onChange={handleInputChange}
                  className="w-1/3 p-2 border rounded"
                  placeholder="b"
                />
                <input
                  type="text"
                  name="c"
                  value={formData.c}
                  onChange={handleInputChange}
                  className="w-1/3 p-2 border rounded"
                  placeholder="c"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block mb-2">Stud holes:</label>
              <select
                name="studHolesOrientation"
                value={formData.studHolesOrientation}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select orientation</option>
                <option value="on axis">on axis</option>
                <option value="off axis">off axis</option>
              </select>
            </div>

            <div className="mt-4">
              <label className="block mb-2">Stuffing Box cover:</label>
              <select
                name="stuffingBoxCover"
                value={formData.stuffingBoxCover}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              >
                <option value="">Select type</option>
                <option value="jacketed">jacketed</option>
                <option value="non jacketed">non jacketed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Client Information */}
        <div className="mb-4">
          <label className="block mb-2">Client:</label>
          <input
            type="text"
            name="client"
            value={formData.client}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Pump Data */}
        <h2 className="text-xl font-semibold mt-6 mb-4">Pump Data</h2>
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
            <label className="block mb-2">Bearing Bracket:</label>
            <input
              type="text"
              name="bearingBracket"
              value={formData.bearingBracket}
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
          <div>
            <label className="block mb-2">Existing Seal:</label>
            <input
              type="text"
              name="existingSeal"
              value={formData.existingSeal}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>

        {/* Operating Parameters */}
        <h2 className="text-xl font-semibold mt-6 mb-4">
          Operating Parameters
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Total Head:</label>
            <input
              type="text"
              name="totalHead"
              value={formData.totalHead}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Suction Pressure:</label>
            <input
              type="text"
              name="suctionPressure"
              value={formData.suctionPressure}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Discharge Pressure:</label>
            <input
              type="text"
              name="dischargePressure"
              value={formData.dischargePressure}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Box Pressure:</label>
            <input
              type="text"
              name="boxPressure"
              value={formData.boxPressure}
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
            <label className="block mb-2">Direction of rotation:</label>
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
            <label className="block mb-2">Pumping temperature:</label>
            <input
              type="text"
              name="pumpingTemperature"
              value={formData.pumpingTemperature}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Maximum temperature:</label>
            <input
              type="text"
              name="maximumTemperature"
              value={formData.maximumTemperature}
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
            <label className="block mb-2">Viscosity:</label>
            <input
              type="text"
              name="viscosity"
              value={formData.viscosity}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Boiling Point:</label>
            <input
              type="text"
              name="boilingPoint"
              value={formData.boilingPoint}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block mb-2">Freezing Point:</label>
            <input
              type="text"
              name="freezingPoint"
              value={formData.freezingPoint}
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

        {/* API Plans */}
        <h2 className="text-xl font-semibold mt-6 mb-4">API Plans</h2>
        <div>
          <label className="flex items-center mb-2">
            <input
              type="checkbox"
              name="sealFlushingAcceptable"
              checked={formData.sealFlushingAcceptable}
              onChange={handleInputChange}
              className="form-checkbox"
            />
            <span className="ml-2">
              Whether seal flushing by external fluid acceptable?
            </span>
          </label>
          {formData.sealFlushingAcceptable && (
            <input
              type="text"
              name="sealFlushingFluid"
              value={formData.sealFlushingFluid}
              onChange={handleInputChange}
              placeholder="What Fluid"
              className="w-full p-2 border rounded mt-2"
            />
          )}
        </div>
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
            name="apiPlan"
            value={formData.apiPlan}
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
            <option value="Plan 32">
              Plan 32 (Fluid Injection by external pump/source)
            </option>
            <option value="Plan 02">
              Plan 02 (Dead ended with no circulation of buffer fluid & with
              cooling jacket)
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

export default PumpFormPage;
