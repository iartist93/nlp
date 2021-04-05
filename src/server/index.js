var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const dotenv = require("dotenv");
const axios = require("axios");

const app = express();
dotenv.config();

console.log(`API key is ${process.env.API_KEY}`);

app.use(express.static("dist"));

console.log(__dirname);

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

app.get("/analysis", async function (req, res) {
  const url = "https://api.meaningcloud.com/sentiment-2.1?";
  const key = `key=${process.env.API_KEY}`;
  const lang = "lang=en";
  // const model = "model=Restaurants";
  const text =
    "txt=Main dishes were quite good, but desserts were too sweet for me.";
  const endpoint = url + key + "&" + lang + "&" + text;
  console.log(endpoint);
  const response = await axios.post(endpoint);
  const result = response.data;
  // console.log(response);
  console.log(result);
  res.send(result);
});
