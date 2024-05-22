import content from "./initial_load.js";
import displayMenu from "./menu.js";
import displayAbout from "./about.js";
import './style.css';      

const menuBTN = document.querySelector("#menu");
const homeBTN = document.querySelector("#home");
const aboutBTN = document.querySelector("#about");

content();

menuBTN.addEventListener("click", () => {
    displayMenu();
});

homeBTN.addEventListener("click", () => {
    content();
});

aboutBTN.addEventListener("click", () => {
    displayAbout();
}); 
