function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.querySelector(".text-input").value;
  Client.checkForName(formText);

  console.log("::: Form Submitted :::");
  fetch("http://localhost:8081/analysis")
    .then((res) => res.json())
    .then(function (res) {
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
        document
          .querySelector("#agreement div:last-child")
          .classList.add("active");
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
        document
          .querySelector("#irony div:first-child")
          .classList.add("active");
      } else {
        document.querySelector("#irony div:last-child").classList.add("active");
      }

      document.querySelector("#confidence .label").innerHTML =
        "Confidence: " + confidence;
      document.querySelector(".line-front").style.width =
        (parseInt(confidence) / 100) * 300 + "px";
    });
}

export { handleSubmit };
