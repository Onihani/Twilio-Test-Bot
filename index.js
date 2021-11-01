require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");

// Twilio Config
const accountSid = "AC7b9446309286f744b8c2e5ab8535aa46";
const authToken = "6f253642a1f131b33362019f57ae3b6a";
const MessagingResponse = require("twilio").twiml.MessagingResponse;
const client = require("twilio")(accountSid, authToken);

const PORT = 5000 || process.env.PORT;
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
