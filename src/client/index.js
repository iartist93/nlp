import { checkForName } from "./js/nameChecker";
import { handleSubmit } from "./js/formHandler";

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

console.log(checkForName);
console.log("CHANGE!!");

// alert("I EXIST");

const btn = document.querySelector(".get-user");
const testDiv = document.querySelector(".user-details");

btn.addEventListener("click", async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const content = await result.json();
  console.log(content);
  testDiv.innerHTML = content.title;
});

testDiv.addEventListener("click", () => {
  console.log("clicked");
  testDiv.innerHTML = "Clicked here";
});

export { checkForName, handleSubmit };
