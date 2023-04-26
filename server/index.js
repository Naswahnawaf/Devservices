const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.static(path.join(__dirname + '/client/build')));
app.use(cors());
console.log(__dirname);

app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


app.post('/send', (req,res) => {

  try {

    var transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:'465',
    secure: true,
      auth: {
          user: process.env.EMAIL, // your email address to send email from
          pass: process.env.PASSWORD // your gmail account password
      }
     });

    const mailOptions = {
      from: req.body.email, // sender address
      to: process.env.EMAIL, // list of receivers
      subject: "Mail from contact form on website", // Subject line
      html: `
      <p>You have a new contact request.</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Name: ${req.body.fname} ${req.body.lname} </li>
        <li>Email: ${req.body.email}</li>
        <li>Business: ${req.body.bname}</li>
        <li>Servicetype: ${req.body.servicetype}</li>
        <li>Message: ${req.body.message}</li>
      </ul>
      `
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: 'Something went wrong. Try again later'
        });
        console.log(err);
      } else {
        res.send({
          success: true,
          message: 'Thanks for contacting us. We will get back to you shortly'
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: 'Something went wrong. Try again later'
    });
    console.log(err);
  }

  transporter.close();

});

app.listen(process.env.PORT || 4000, () => {
  console.log('server start on port 4000');
});
