require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

// Twilio Config
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;
const MessagingResponse = require("twilio").twiml.MessagingResponse;
const client = require("twilio")(accountSid, authToken);

const PORT = process.env.PORT || 5000;
const app = express();

// MIDDLEWARES
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// ROUTES
// Hello Word
app.use("/", (req, res) => {
  res.end("Hello World");
});

// Listens for new messages from twilio and determine message response
app.use("/api/twilio-webhook", async (req, res) => {
  // console.log(res);

  // Grab the Twilio Request Params from request (req).
  // Basic Params
  const { MessageSid, SmsSid, AccountSid, From, To, Body, NumMedia } =
    req.params;
  // WhatsApp-specific Parameters
  const { ProfileName, WaId, Forwarded, FrequentlyForwarded, ButtonText } =
    req.params;
  // For incoming WhatsApp messages that share a location
  // const { Latitude, Longitude, Address, Label } = req.params;
  // Geographic Data-related Parameters
  const { FromCity, FromState, FromZip, FromCountry } = req.params;

  // responding to an imcoming message
  const twiml = new MessagingResponse();
  const message = twiml.message();
  message.body(`Hello World ${ProfileName}, you said:\n${Body}`);

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
