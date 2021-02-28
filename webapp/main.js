import foo from "./modules/foo.js";

const paragraph = document.createElement("p");
paragraph.innerHTML = foo("bar");
document.body.appendChild(paragraph);
