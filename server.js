// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// // Route to handle form submission
// app.post('/send-email', async (req, res) => {
//     const { name, email, subject, message } = req.body;

//     // Configure Nodemailer
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: 'joshuachibuike14@gmail.com', // Replace with your Gmail
//             pass: 'Ifeanyi123@', // Replace with your Gmail password or app password
//         },
//     });

//     const mailOptions = {
//         from: email,
//         to: 'joshuachibuike14@gmail.com', // Replace with your Gmail
//         subject: subject || 'Contact Form Submission',
//         text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         res.status(200).send('Email sent successfully!');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Failed to send email.');
//     }
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });