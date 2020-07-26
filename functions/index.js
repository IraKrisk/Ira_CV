const functions = require('firebase-functions');
const admin = require("firebase-admin");
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

const gmailEmail = functions.config().gmail.login;
const gmailPassword = functions.config().gmail.pass;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});
admin.initializeApp();

exports.emailMessage = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      return;
    }
    const mailOptions = {
      to: gmailEmail,
      from: "From: ${req.body.email}",
      subject: `CV contact form message: ${req.body.name} (${req.body.email})`,
      text: req.body.message,
      html: req.body.message
    };
    
    mailTransport.sendMail(mailOptions, function(error, info){
     if(error){
        console.log(error.message);
     }
     res.status(200).send({
       message: "success"
     });
    });
  });
});