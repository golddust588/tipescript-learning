
import { addBook } from "./actions.js";


const button: HTMLButtonElement = document.querySelector("button")!;
button.addEventListener("click", addBook);
