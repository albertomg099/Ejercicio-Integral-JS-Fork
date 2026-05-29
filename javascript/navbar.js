const mainNavbar = document.getElementById("mainNavbar");

export function navBar() {
    mainNavbar.innerHTML = `  
    <div class="container-fluid">
            <a class="navbar-brand" href="./index.html">MiniProyecto</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="./index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./producto.html">Producto</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./registro.html">Registro</a>
                    </li>
                </ul>
            </div>
        </div>
        `;
}// navBar