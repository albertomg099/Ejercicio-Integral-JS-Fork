const likeBtn = document.getElementById("likeBtn");
const likeCounter = document.getElementById("likeCounter");
const infoBtn = document.getElementById("infoBtn");

let count = 0;

export function countLikes() {
    likeBtn.addEventListener("click", () => {
        count++;
        likeCounter.textContent = count; // similar a innerText
        
        if (count > 10) {
            infoBtn.innerHTML = `<button type="button" class="btn btn-info flex-shrink-0">¡Producto destacado!</button>`;
        }
    });
} // countLikes