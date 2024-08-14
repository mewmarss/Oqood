export const enquiryMail = ({
  sender,
  description,
  interest,
  phone,
}: {
  sender: string;
  description: string;
  interest: string;
  phone: string;
}) => {
  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NEWT AI - Share Editor Access</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }

        .container {
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
            border: 1px solid #dce1e6;
        }

        .header {
            background-color: #b3afaf;
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

        .content {
            padding: 20px;
            color: #333333;
        }

        .content h2 {
            font-size: 20px;
            margin-bottom: 10px;
        }

        .content p {
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .email {
            font-weight: bold;
            color: #0066cc;
        }

        .newsletter {
            font-style: italic;
            color: #333333;
        }

        .cta-button {
            display: block;
            width: 200px;
            margin: 0 auto;
            padding: 10px 20px;
            background-color: #8a2be1;
            color: #ffffff !important;
            text-align: center;
            border-radius: 5px;
            text-decoration: none;
            font-size: 18px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }

        .cta-button:hover {
            background-color: #8a2be1;
            opacity: 0.8;
        }

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

        p {
            font-size: 16px;
        }

        .description {
            background-color: #f0e9e9;
            padding: 8px;
            border-radius: 8px;
        }

        @media (max-width: 600px) {
            .header h1 {
                font-size: 20px;
            }

            .content h2 {
                font-size: 18px;
            }

            .cta-button {
                width: 100%;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <img src="https://i.imgur.com/sSadT8S.png" alt="Oqood Logo">
            <h1>Enquiry</h1>
        </div>
        <div class="content">
            <p>
                <strong>Hello,</strong>
            </p>
            <p>
                <span class="email">${sender}</span> has created an Enquiry on Oqood!
            </p>
            <p>
                <strong>Contact No:</strong> ${phone}
            </p>
            <p>
                <strong>Interest of service:</strong> ${interest}
            </p>
            <p>
                <strong>Enquiry Message:</strong>
            </p>
            <p class="description">
                ${description}
            </p>
            <p>
                <i>An Enquiry Made on Oqood</i>
            </p>
        </div>
        <div class="footer">
            <p>
                © 2024 Oqood. All rights reserved. <br>
            </p>
        </div>
    </div>
</body>

</html>
`;
};
