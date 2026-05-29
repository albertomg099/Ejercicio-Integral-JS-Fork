const showDescription = document.getElementById("showDescription");
const description = document.getElementById("description");
let expanded = false;

export function showDetails() {
    showDescription.addEventListener("click", () => {
        if (!expanded) {
            expanded = true
            showDescription.innerText = "Mostrar menos...";
            description.innerHTML = `
            Kit básico para el cuidado de la piel. Uso diario.

            <div id="fullDescription">
              <ul>
                 <li>Crema corporal humectante.</li>
                 <li>Jabón limpiador de impurezas.</li>
                 <li>Protector solar de espectro amplio.</li>
                 <li>Loción corporal con aroma refrescante.</li>
               </ul>
            </div>
            
            <strong>* Este kit ha sido probado en diferentes tipos de piel, mostrando resultados bastante positivos *</strong>

            `;
        } else {
            expanded = false
            showDescription.innerText = "Mostrar más...";
            description.innerText = "Kit básico para el cuidado de la piel. Uso diario.";
        }// else
    });
}// showDetails

