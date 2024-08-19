export const agitatorMail = ({ formData }: { formData: any }) => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Agitator Information Data - Oqood al balad factory</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { width: 100%; max-width: 800px; margin: 0 auto; border: 1px solid #dce1e6; padding: 20px; border-radius: 8px; }
            h1, h2 { color: #0056b3; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            .footer {
                background-color: #f4f4f4;
                padding: 10px;
                text-align: center;
                font-size: 12px;
                color: #777777;
            }
            .footer a {
                color: #0066cc;
                text-decoration: none;
            }
            .header {
                background-color: #dfe8e1;
                color: #ffffff;
                padding: 20px;
                text-align: center;
            }
            .header img {
                max-width: 150px;
            }
            .header h1 {
                margin: 10px 0;
                font-size: 24px;
            }
            .description {
                background-color: #f0e9e9;
                padding: 8px;
                border-radius: 8px;
            }
            .agitator-image {
                display: block;
                margin: 20px auto;
                max-width: 100%;
            }
            .form-border {
                padding: 20px;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <img src="https://i.imgur.com/sSadT8S.png" alt="Oqood Logo">
                <h1>Agitator Data Sheet</h1>
            </div>
    
            <div>
                <img src="https://i.imgur.com/iYOKMru.png" alt="Agitator" class="agitator-image">
            </div>
    
            <div class="form-border">
                <h2>Client Information</h2>
                <table>
                    <tr><th>Client</th><td>${formData.client}</td></tr>
                    <tr><th>Address</th><td>${formData.address}</td></tr>
                </table>
    
                <h2>Agitator Data</h2>
                <table>
                    <tr><th>Make</th><td>${formData.make}</td></tr>
                    <tr><th>Model</th><td>${formData.model}</td></tr>
                    <tr><th>Item/Tag No.</th><td>${formData.itemTagNo}</td></tr>
                    <tr><th>Material of Construction</th><td>${
                      formData.materialOfConstruction
                    }</td></tr>
                    <tr><th>Existing Seal Arrangement</th><td>${
                      formData.existingSealArrangement
                    }</td></tr>
                    <tr><th>Mechanical Seal Make/Type</th><td>${
                      formData.mechanicalSealMakeType
                    }</td></tr>
                    <tr><th>Existing Mechanical Seal Satisfactory</th><td>${
                      formData.existingMechanicalSealSatisfactory
                    }</td></tr>
                    <tr><th>Seal Failure Details</th><td>${
                      formData.sealFailureDetails
                    }</td></tr>
                </table>
    
                <h2>Operating Parameters</h2>
                <table>
                    <tr><th>Vessel Pressure</th><td>${
                      formData.vesselPressure
                    }</td></tr>
                    <tr><th>Speed</th><td>${formData.speed}</td></tr>
                    <tr><th>Direction of Rotation</th><td>${
                      formData.directionOfRotation
                    }</td></tr>
                </table>
    
                <h2>Fluid Details</h2>
                <table>
                    <tr><th>Fluid</th><td>${formData.fluid}</td></tr>
                    <tr><th>Temperature</th><td>${
                      formData.temperature
                    }</td></tr>
                    <tr><th>Specific Gravity</th><td>${
                      formData.specificGravity
                    }</td></tr>
                    <tr><th>Velocity</th><td>${formData.velocity}</td></tr>
                    <tr><th>Fluid Description</th><td>${
                      formData.fluidDescription
                    }</td></tr>
                    <tr><th>Percentage Of Solids</th><td>${
                      formData.percentageOfSolids
                    }</td></tr>
                    <tr><th>Grain Size</th><td>${formData.grainSize}</td></tr>
                </table>
    
                <h2>API Plans</h2>
                <table>
                    <tr><th>Recommended Buffer Fluid</th><td>${
                      formData.recommendedBufferFluid
                    }</td></tr>
                    <tr><th>Buffer Fluid Temperature</th><td>${
                      formData.recommendedBufferFluidTemperature
                    }</td></tr>
                    <tr><th>Recommended API Plan</th><td>${
                      formData.recommendedApiPlan
                    }</td></tr>
                </table>
    
                <h2>Technical Specifications</h2>
                <table>
                    <tr><th>Shaft OD</th><td>${formData.shaftOD}</td></tr>
                    <tr><th>Shaft 1 OD</th><td>${formData.shaft1OD}</td></tr>
                    <tr><th>Shaft 2 OD</th><td>${formData.shaft2OD}</td></tr>
                    <tr><th>Pad Plate ID</th><td>${
                      formData.padPlateID
                    }</td></tr>
                    <tr><th>Spigot (d5)</th><td>d5: ${formData.dFive}, d51: ${
    formData.d51
  }</td></tr>
                    <tr><th>Bolt Circle</th><td>${formData.boltCircle}</td></tr>
                    <tr><th>No. of Bolts</th><td>${
                      formData.numberOfBolts
                    }</td></tr>
                    <tr><th>Bolt Size</th><td>${formData.boltSize}</td></tr>
                    <tr><th>Raised Collar</th><td>${
                      formData.raisedCollar
                    }</td></tr>
                    <tr><th>Thickness</th><td>${formData.thickness}</td></tr>
                    <tr><th>Shaft Step from Pad</th><td>${
                      formData.shaftStepFromPad
                    }</td></tr>
                    <tr><th>Distance Between Two Steps</th><td>${
                      formData.distanceBetweenTwoSteps
                    }</td></tr>
                    <tr><th>Nearest Obstruction</th><td>${
                      formData.nearestObstruction
                    }</td></tr>
                    <tr><th>Radius</th><td>${formData.radius}</td></tr>
                </table>
    
                <h2>Remarks</h2>
                <p class="description">${formData.remarks}</p>
            </div>
    
            <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Oqood al balad factory. All rights reserved.</p>
                <p><a href="https://oqoodsa.com">Visit our website</a></p>
            </div>
        </div>
    </body>
    </html>`;
};
