export default function addContent() {
    const content = document.querySelector("#content");
    var h1 = document.createElement("h1");
    var p = document.createElement("p");

    h1.textContent = "Welcome to the GOOD life.";
    p.textContent = "Food was made for digesting... Not dissecting!";

    content.appendChild(img_create("https://media.greenmatters.com/brand-img/6y3xk06Da/0x0/organic-food-1564606251269.jpg","picture of produce"));
    content.appendChild(h1);
    content.appendChild(p);
} 

function img_create(src, alt) {
    var img = document.createElement("img");
    img.src = src;
    if (img.alt != null) img.alt = alt;
    return img;
}