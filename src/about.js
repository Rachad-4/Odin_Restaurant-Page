import { img_create } from "./initial_load";

export default function aboutContent () {
    const content = document.querySelector("#content");
    const p = document.createElement("p");
    const info = document.createElement("div");
    var img = img_create("https://compote.slate.com/images/ff47615b-f476-4479-af98-add0a5255c80.jpeg?width=960&rect=1560x1040&offset=0x0", "picture of fake map");

    content.innerHTML = "";
    content.className = "";
    content.classList.add("about");
    info.setAttribute("id", "info");
    img.setAttribute("id", "map");

    p.textContent = "Stop looking for a website that is a perfect 10. You found the one! If you prefer in-person visits, come and see me for once!";
    info.appendChild(p);
    info.appendChild(img);
    content.appendChild(info);
}