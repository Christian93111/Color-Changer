let btnFlipper = document.getElementById("flipper");
let color = document.getElementById("colorChange");

color.addEventListener("click", () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let result = "rgb(" + red + "," + green + "," + blue + ")";

    btnFlipper.style.backgroundColor = result;
});