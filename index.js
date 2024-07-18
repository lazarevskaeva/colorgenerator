document.addEventListener("DOMContentLoaded", function() {
    const containerEl = document.querySelector(".container");

    // Generate color containers
    for (let i = 0; i < 10; i++) { // Adjust 10 to the number of color containers you want
        const colorContainerEl = document.createElement("div");
        colorContainerEl.classList.add("color-container");
        containerEl.appendChild(colorContainerEl);
    }

    const colorContainerEls = document.querySelectorAll(".color-container");

    generateColors(); // Call the function here

    function generateColors() {
        colorContainerEls.forEach((colorContainerEl) => {
            const newColorCode = randomColor();
            colorContainerEl.style.backgroundColor = "#" + newColorCode;
            colorContainerEl.innerText = "#" + newColorCode;
        });
    }

    function randomColor() {
        const chars = "0123456789abcdef";
        const colorCodeLength = 6;
        let colorCode = "";
        for (let index = 0; index < colorCodeLength; index++) {
            const randomNum = Math.floor(Math.random() * chars.length);
            colorCode += chars.substring(randomNum, randomNum + 1);
        }
        return colorCode;
    }
});
