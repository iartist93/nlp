import { checkForName } from "./js/nameChecker";
import { handleSubmit, handleChange } from "./js/formHandler";

import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";

// logo image
import logo from "./images/logo2.png";

document.querySelector(".logo").src = logo;

export { checkForName, handleSubmit, handleChange };
