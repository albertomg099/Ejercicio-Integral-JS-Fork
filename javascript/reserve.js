const cartBtn = document.getElementById("cartBtn");
const statusBadge = document.getElementById("statusBadge"); // La etiqueta de arriba

// Buscamos el elemento de disponibilidad del final de la página usando su jerarquía de CSS
const disponibilidadTexto = document.querySelector("section.container:last-of-type .col-12:last-child .fw-bold");

let isReserved = false;

export function toggleReserve() {
    cartBtn.addEventListener("click", () => {
        if (!isReserved) {
            // --- ESTADO: AÑADIR AL CARRITO (Apartado) ---
            isReserved = true;

            // 1. Cambiar texto del botón y aplicar el color rojo desde tus variables CSS
            cartBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102z"/>
                </svg> Quitar del carrito`;
            
            // Usamos las variables de tu paleta para el estado activo del carrito
            cartBtn.style.setProperty("background-color", "var(--color-cart-active)");
            cartBtn.style.setProperty("border-color", "var(--color-cart-active)");

            // 2. Modificar la etiqueta de arriba (#statusBadge) a "Apartado" con tonos amarillos
            if (statusBadge) {
                statusBadge.innerText = "Apartado";
                statusBadge.style.setProperty("color", "var(--color-warning)");
                statusBadge.style.setProperty("background-color", "var(--color-warning-bg)");
                statusBadge.style.setProperty("border-color", "var(--color-warning-border)");
            }

            // 3. Modificar el texto de disponibilidad del final de la página
            if (disponibilidadTexto) {
                disponibilidadTexto.innerText = "Apartado";
                disponibilidadTexto.style.setProperty("color", "var(--color-warning)");
            }

        } else {
            // --- ESTADO: QUITAR DEL CARRITO (Regresa a Disponible) ---
            isReserved = false;

            // 1. Restaurar botón a su estado azul/verde original quitando los estilos en línea
            cartBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102z"/>
                </svg> Agregar al carrito`;
            
            cartBtn.style.removeProperty("background-color");
            cartBtn.style.removeProperty("border-color");

            // 2. Restaurar la etiqueta de arriba a "Disponible"
            if (statusBadge) {
                statusBadge.innerText = "Disponible";
                statusBadge.style.removeProperty("color");
                statusBadge.style.removeProperty("background-color");
                statusBadge.style.removeProperty("border-color");
            }

            // 3. Restaurar el texto del final de la página
            if (disponibilidadTexto) {
                disponibilidadTexto.innerText = "Disponible";
                disponibilidadTexto.style.removeProperty("color");
            }
        }
    });
}