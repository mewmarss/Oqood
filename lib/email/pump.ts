export const pumpMail = ({ formData }: { formData: any }) => {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pump Information Data - Oqood al balad factory</title>
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
          .pump-image {
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
              <h1>Pump Data Sheet</h1>
          </div>
  
          <div>
              <img src="https://i.imgur.com/ay1rIkj.png" alt="Pump" class="pump-image">
          </div>
  
          <div class="form-border">
              <h2>Client Information</h2>
              <table>
                  <tr><th>Client</th><td>${formData.client}</td></tr>
                  <tr><th>Address</th><td>${formData.address}</td></tr>
              </table>
  
              <h2>Pump Data</h2>
              <table>
                  <tr><th>Make</th><td>${formData.make}</td></tr>
                  <tr><th>Model</th><td>${formData.model}</td></tr>
                  <tr><th>Material of Construction</th><td>${
                    formData.materialOfConstruction
                  }</td></tr>
                  <tr><th>Bearing Bracket</th><td>${
                    formData.bearingBracket
                  }</td></tr>
                  <tr><th>Item/Tag No.</th><td>${formData.itemTagNo}</td></tr>
                  <tr><th>Existing Seal</th><td>${
                    formData.existingSeal
                  }</td></tr>
              </table>
  
              <h2>Operating Parameters</h2>
              <table>
                  <tr><th>Total Head</th><td>${formData.totalHead}</td></tr>
                  <tr><th>Suction Pressure</th><td>${
                    formData.suctionPressure
                  }</td></tr>
                  <tr><th>Discharge Pressure</th><td>${
                    formData.dischargePressure
                  }</td></tr>
                  <tr><th>Box Pressure</th><td>${formData.boxPressure}</td></tr>
                  <tr><th>Speed</th><td>${formData.speed}</td></tr>
                  <tr><th>Direction of rotation</th><td>${
                    formData.directionOfRotation
                  }</td></tr>
              </table>
  
              <h2>Fluid Details</h2>
              <table>
                  <tr><th>Fluid</th><td>${formData.fluid}</td></tr>
                  <tr><th>Pumping temperature</th><td>${
                    formData.pumpingTemperature
                  }</td></tr>
                  <tr><th>Maximum temperature</th><td>${
                    formData.maximumTemperature
                  }</td></tr>
                  <tr><th>Specific Gravity</th><td>${
                    formData.specificGravity
                  }</td></tr>
                  <tr><th>Viscosity</th><td>${formData.viscosity}</td></tr>
                  <tr><th>Boiling Point</th><td>${
                    formData.boilingPoint
                  }</td></tr>
                  <tr><th>Freezing Point</th><td>${
                    formData.freezingPoint
                  }</td></tr>
                  <tr><th>Fluid Description</th><td>${
                    formData.fluidDescription
                  }</td></tr>
                  <tr><th>Percentage Of solids</th><td>${
                    formData.percentageOfSolids
                  }</td></tr>
                  <tr><th>Grain Size</th><td>${formData.grainSize}</td></tr>
              </table>
  
              <h2>API Plans</h2>
              <table>
                  <tr><th>Seal flushing acceptable</th><td>${
                    formData.sealFlushingAcceptable ? "Yes" : "No"
                  }</td></tr>
                  <tr><th>Seal flushing fluid</th><td>${
                    formData.sealFlushingFluid
                  }</td></tr>
                  <tr><th>Recommended buffer fluid</th><td>${
                    formData.recommendedBufferFluid
                  }</td></tr>
                  <tr><th>Buffer fluid temperature</th><td>${
                    formData.recommendedBufferFluidTemperature
                  }</td></tr>
                  <tr><th>Recommended API Plan</th><td>${
                    formData.apiPlan
                  }</td></tr>
              </table>
  
              <h2>Technical Specifications</h2>
              <table>
                  <tr><th>Shaft OD (d)</th><td>${formData.shaftOD}</td></tr>
                  <tr><th>Sleeve OD (d1)</th><td>${formData.sleeveOD}</td></tr>
                  <tr><th>Stuffing Box ID (d2)</th><td>${
                    formData.stuffingBoxID
                  }</td></tr>
                  <tr><th>Stuffing Box Bore (d4)</th><td>${
                    formData.stuffingBoxBore
                  }</td></tr>
                  <tr><th>Spigot dia (d5)</th><td>d101: ${
                    formData.d101
                  }, d102: ${formData.d102}</td></tr>
                  <tr><th>Bolt Circle (d9)</th><td>${
                    formData.boltCircle
                  }</td></tr>
                  <tr><th>No. of Bolts (M)</th><td>${
                    formData.numberOfBolts
                  }</td></tr>
                  <tr><th>Bolt Size</th><td>${formData.boltSize}</td></tr>
                  <tr><th>Raised Collar (L)</th><td>L11: ${
                    formData.L11
                  }, L12: ${formData.L12}</td></tr>
                  <tr><th>Sleeve Extention (L1)</th><td>${
                    formData.sleeveExtention
                  }</td></tr>
                  <tr><th>Shaft Hub (L2)</th><td>${formData.shaftHub}</td></tr>
                  <tr><th>Impeller Sleeve Length (L3)</th><td>${
                    formData.impellerSleeveLength
                  }</td></tr>
                  <tr><th>Stuffing Box depth (L8)</th><td>${
                    formData.stuffingBoxDepth
                  }</td></tr>
                  <tr><th>Nearest obstruction (L9)</th><td>${
                    formData.nearestObstruction
                  }</td></tr>
                  <tr><th>Stud holes</th><td>a: ${formData.a}, b: ${
    formData.b
  }, c: ${formData.c}</td></tr>
                  <tr><th>Stud holes orientation</th><td>${
                    formData.studHolesOrientation
                  }</td></tr>
                  <tr><th>Stuffing Box cover</th><td>${
                    formData.stuffingBoxCover
                  }</td></tr>
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
