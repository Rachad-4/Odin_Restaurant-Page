import content from "./initial_load.js";
import displayMenu from "./menu.js";
import './style.css';      

const menuBTN = document.querySelector("#menu");
const homeBTN = document.querySelector("#home");

content();

menuBTN.addEventListener("click", () => {
    displayMenu();
});

homeBTN.addEventListener("click", () => {
    content();
});
