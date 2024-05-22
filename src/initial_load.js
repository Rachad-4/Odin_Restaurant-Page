
export default function addContent() {
    const content = document.querySelector("#content");
    
    content.innerHTML = "";
    content.className = "";


    var h1 = document.createElement("h1");
    var p = document.createElement("p");

    content.classList.add("home");
    h1.setAttribute("id", "brand");

    content.appendChild(h1);
    content.appendChild(p);

    p.textContent = "Less is more! Less Spending = More Saving. LESS Quantity = More Quality. We live this idea!! We are offering just that - HIGH Quality - single items! Who needs a bunch of grapes if the majority of them aren't edible? Not you. Who needs a full kit-kat? Not you! One stick may be enough. Here, you can order a high quality grape or receive the perfect portion.";
    h1.textContent = "Singlè";


} 

export function img_create(src, alt) {
    var img = document.createElement("img");
    img.src = src;
    if (img.alt != null) img.alt = alt;
    return img;
}