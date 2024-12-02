
// Canvas Size
const ROW_LENGTH = 16;
const COLUMN_LENGTH = 16;

// Document Objects
const canvas = document.querySelector(".canvas");
const canvasStyle = window.getComputedStyle(canvas);

let canvasSize = parseFloat(canvasStyle.width);
let dotSize = canvasSize / ROW_LENGTH;
console.log(`Canvas: ${canvasSize}, Dot: ${dotSize}`);


for(let row=0; row<ROW_LENGTH; row++) {
    for(let col=0; col<COLUMN_LENGTH; col++) {
        let dot = document.createElement("div");
        dot.classList.add("dot");
        dot.style["width"] = dotSize + "px";
        dot.style["height"] = dotSize + "px";

        dot.addEventListener("mouseover", () => {
            dot.style["background-color"] = "red";
        });

        canvas.appendChild(dot);
    }    
}