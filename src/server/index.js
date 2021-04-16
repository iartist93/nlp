var path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mockAPIResponse = require("./mockAPI.js");
const dotenv = require("dotenv");
const axios = require("axios");
const cors = require("cors");

const app = express();

dotenv.config();

console.log(`API key is ${process.env.API_KEY}`);
console.log(__dirname);

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.get("/analysis_result", (req, res) => {
  // TODO:: Save the result in object in the server and send it back next time
});

app.post("/analysis", async function (req, res) {
  console.log(`Analysis text 2 =  ${req.body.text}`);
  const formText = req.body.text;

  const url = "https://api.meaningcloud.com/sentiment-2.1?";
  const key = `key=${process.env.API_KEY}`;
  const lang = "lang=en";
  // const model = "model=Restaurants";
  const text = `txt=${formText}`;
  const endpoint = url + key + "&" + lang + "&" + text;

  const response = await axios.post(endpoint);
  const result = response.data;
  console.log(result);
  res.send(result);
});
