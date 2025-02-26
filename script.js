let num = document.getElementById("num");
let btn = document.querySelector("button");
let img = document.getElementById("img");

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * 6) + 1;

    if (random == 1) {
        img.src = './1d.png';
        img.style.transform = "rotate(90deg)";
    } else if (random == 2) {
        img.src = "./2d.png";
        img.style.transform = "rotate(90deg)";
    } else if (random == 3) {
        img.src = "./3d.png";
        img.style.transform = "rotate(90deg)";
    } else if (random == 4) {
        img.src = "./4.png";
        img.style.transform = "rotate(90deg)";
    } else if (random == 5) {
        img.src = "./5.png";
        img.style.transform = "rotate(90deg)";
    } else {
        img.src = "./6.png";
        img.style.transform = "rotate(90deg)";
    }
})
