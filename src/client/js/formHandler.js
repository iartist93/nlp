import postData from "./postData";
import { validURL } from "./utils";

const handleChange = (event) => {
  const text = event.target.value;

  const textArea = document.querySelector(".text-input");
  console.log(textArea.value);

  const sendBtn = document.querySelector(".post-btn");
  if (text.length > 20) {
    sendBtn.disabled = false;
  } else {
    sendBtn.disabled = true;
  }

  const counter = document.querySelector(".counter");
  const left = 20 - text.length;

  // min = 0, max = 20
  // stroke min = 7, max = 59
  // linar interpolation
  const precentage = left * 2.6 + 7;

  counter.innerHTML = left >= 0 ? left : "";
};

const handleSubmit = async (event) => {
  event.preventDefault();

  // TODO:: check what text was put into the form field
  const formText = document.querySelector(".text-input").value;
  const errorMessage = document.querySelector(".error-message");
  const resultContainer = document.querySelector(".result-container");
  const textInputConainer = document.querySelector(".text-input-container");

  if (
    (formText.includes("http") && !validURL(formText)) ||
    formText.length < 20
  ) {
    errorMessage.style.display = "block";
    resultContainer.style.display = "none";
    textInputConainer.style.width = "60%";
    return;
  } else {
    errorMessage.style.display = "none";
    textInputConainer.style.width = "100%";
  }

  const data = { text: formText };

  const res = await postData("http://localhost:8081/analysis", data);

  // show the result container
  resultContainer.style.display = "flex";

  // resize the text input
  const textInput = document.querySelector(".text-input-container");
  textInput.style.width = "100%";

  const agreement = res.agreement;
  const subjectivity = res.subjectivity;
  const irony = res.irony;
  const confidence = res.confidence;

  // remove all the current active knot
  const circles = document.querySelectorAll(".circle");
  for (const circle of circles) {
    circle.classList.remove("active");
  }

  // add active class
  if (agreement === "AGREEMENT") {
    document
      .querySelector("#agreement div:first-child")
      .classList.add("active");
  } else {
    document.querySelector("#agreement div:last-child").classList.add("active");
  }

  if (subjectivity == "subjectivity") {
    document
      .querySelector("#subjectivity div:first-child")
      .classList.add("active");
  } else {
    document
      .querySelector("#subjectivity div:last-child")
      .classList.add("active");
  }

  if (irony === "NONIRONIC") {
    document.querySelector("#irony div:first-child").classList.add("active");
  } else {
    document.querySelector("#irony div:last-child").classList.add("active");
  }

  document.querySelector("#confidence .label").innerHTML =
    "Confidence: " + confidence;
  document.querySelector(".line-front").style.width =
    (parseInt(confidence) / 100) * 295 + "px";
};

export { handleSubmit, handleChange };
