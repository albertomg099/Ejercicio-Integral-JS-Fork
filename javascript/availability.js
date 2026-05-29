const statusBadge = document.getElementById("statusBadge");
const changeStatus = document.getElementById("changeStatus");
const statusTxt = document.getElementById("statusTxt");
let available = true;

export function changeAvailability() {
    changeStatus.addEventListener("click", () => {
        if (available) {
            available = false;
            statusBadge.innerText = "No disponible";
            statusTxt.innerText = "No disponible";
            statusBadge.style.color = "var(--color-danger)"; // rojo
            statusTxt.style.color = "var(--color-danger)"; // rojo
            statusBadge.style.backgroundColor = "var(--color-danger-light)";
        } else {
            available = true;
            statusBadge.innerText = "Disponible"; 
            statusTxt.innerText = "Disponible"; 
            statusBadge.style.color = "var(--color-success)"; // verde
            statusTxt.style.color = "var(--color-success)"; // verde
            statusBadge.style.backgroundColor = "var(--color-success-bg)";
        } // if else
    });
}// changeAvailability