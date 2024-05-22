import { img_create } from "./initial_load.js";

export default function menuContent () {
    const container = document.querySelector("#content");
    const viewMoreBTN = document.createElement("button");

    viewMoreBTN.textContent = "View Full Menu";
    container.innerHTML = "";
    container.className = "";
    container.classList.add("menu");
    

    for (let i = 0; i < 3; i++) {  
        const item = document.createElement("div");
        const card = document.createElement("div");
        const desc = document.createElement("p");
        const price = document.createElement("p");

        item.classList.add("item");
        desc.classList.add("desc");
        price.classList.add("price");
        card.classList.add("price-card");

        if (i === 0) {
            var img = img_create("https://thumbs.dreamstime.com/b/closeup-isolated-single-red-grape-white-background-clipping-path-194497735.jpg", "picture of single grape");
            desc.textContent = "The perfect grape.";
            price.textContent = "$0.20";
        } else if (i === 1) {
            var img = img_create("https://img-9gag-fun.9cache.com/photo/abvg1Y9_700b.jpg","picture of grain of sand");
            desc.textContent = "The perfect grain of sand.";
            price.textContent = "$0.05";
        }    
        else if (i === 2) {
            var img = img_create("https://storage.newspark.ca/storage/22124219/15","picture of a raindrop");
            desc.textContent = "The most perfect raindrop.";
            price.textContent = "$1000.00";
        }
    
        card.appendChild(desc);
        card.appendChild(price);
        item.appendChild(img);
        item.appendChild(card);
        container.appendChild(item);
        container.appendChild(viewMoreBTN);
    }
}

