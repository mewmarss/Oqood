export const bearingMail = ({ formData }: { formData: any }) => {
  return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bearing Information Data - Oqood al balad factory</title>
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
                .bearing-image {
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
                    <h1>Bearing Data Sheet</h1>
                </div>
    
                <div>
                    <img src="https://i.imgur.com/QDBEpyu.png" alt="Bearing" class="bearing-image">
                </div>
    
                <div class="form-border">
                    <h2>Client Information</h2>
                    <table>
                        <tr><th>Client</th><td>${formData.client}</td></tr>
                        <tr><th>Address</th><td>${formData.address}</td></tr>
                    </table>
    
                    <h2>Bearing Isolator Information Data</h2>
                    <table>
                        <tr><th>d1 - Step Shaft OD</th><td>${
                          formData.stepShaftOD
                        }</td></tr>
                        <tr><th>d2 - Shaft OD</th><td>${
                          formData.shaftOD
                        }</td></tr>
                        <tr><th>d3 - Bore ID</th><td>${
                          formData.boreID
                        }</td></tr>
                        <tr><th>d4 - Flat Dia. free of obstructions</th><td>${
                          formData.flatDia
                        }</td></tr>
                        <tr><th>L1 - Available housing depth</th><td>${
                          formData.availableHousingDepth
                        }</td></tr>
                        <tr><th>L2 - Dist. to step from housing</th><td>${
                          formData.distToStepFromHousing
                        }</td></tr>
                        <tr><th>L3 - Distance to outboard first obstruction</th><td>${
                          formData.distanceToOutboardFirstObstruction
                        }</td></tr>
                    </table>
    
                    <h2>Equipment Details</h2>
                    <table>
                        <tr><th>Equipment Type</th><td>${
                          formData.equipmentType
                        }</td></tr>
                        <tr><th>Make</th><td>${formData.make}</td></tr>
                        <tr><th>Model</th><td>${formData.model}</td></tr>
                        <tr><th>Material of Construction</th><td>${
                          formData.materialOfConstruction
                        }</td></tr>
                    </table>
    
                    <h2>Seal Information</h2>
                    <table>
                        <tr><th>Previous Seal Design</th><td>${
                          formData.previousSealDesign
                        }</td></tr>
                        <tr><th>Seal Manufacturer</th><td>${
                          formData.sealManufacturer
                        }</td></tr>
                        <tr><th>Seal Part Number</th><td>${
                          formData.sealPartNumber
                        }</td></tr>
                        <tr><th>Quantity Required</th><td>${
                          formData.quantityRequired
                        }</td></tr>
                        <tr><th>Seal Design</th><td>${
                          formData.sealDesign
                        }</td></tr>
                        <tr><th>Mounting Method</th><td>${
                          formData.mountingMethod
                        }</td></tr>
                        <tr><th>Construction Material</th><td>${
                          formData.constructionMaterial
                        }</td></tr>
                        <tr><th>Seal Purpose</th><td>${
                          formData.sealPurpose
                        }</td></tr>
                    </table>
    
                    <h2>Operating Parameters</h2>
                    <table>
                        <tr><th>Speed</th><td>${formData.speed}</td></tr>
                        <tr><th>Temperature</th><td>${
                          formData.temperature
                        }</td></tr>
                        <tr><th>Pressure</th><td>${formData.pressure}</td></tr>
                        <tr><th>Total Indicated Runout</th><td>${
                          formData.totalIndicatedRunout
                        }</td></tr>
                        <tr><th>Axial Movement</th><td>${
                          formData.axialMovement
                        }</td></tr>
                        <tr><th>Shaft Orientation</th><td>${
                          formData.shaftOrientation
                        }</td></tr>
                        <tr><th>Lubrication Method</th><td>${
                          formData.lubricationMethod
                        }</td></tr>
                        <tr><th>Media Fill Level</th><td>${
                          formData.mediaFillLevel
                        }</td></tr>
                        <tr><th>Media Manufacturer</th><td>${
                          formData.mediaManufacturer
                        }</td></tr>
                        <tr><th>Media Product Name</th><td>${
                          formData.mediaProductName
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
