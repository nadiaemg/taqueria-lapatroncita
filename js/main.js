const header = document.querySelector("header");
const footer = document.querySelector("footer");
let url = window.location.href;
let regexEmail = new RegExp("^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$");

function addNavbar() {
    header.insertAdjacentHTML("afterbegin", `
    <nav id="navbar">
        <a href="index.html"><img src="/src/img/logo.png" class="logo" alt="La patroncita" /></a>
        <button class="abrir-menu" id="botonAbrir"><i class="bi bi-list" id="hamburguesa"></i></button>
        <ul class="nav-lista" id="navElementos">
            <button class="cerrar-menu" id="botonCerrar"><i class="bi bi-x"></i></button>
            <li><a href="index.html" id="inicio">Inicio</a></li>
            <li><a href="menu.html" id="menu">Menú</a></li>
            <li><a href="nosotros.html" id="nosotros">Nosotros</a></li>
            <li><a href="contacto.html" id="contacto">Contacto</a></li>
            <li><a href="https://wa.me/message/7MHHJSHGDGEDG1" target="_blank">Ordene aquí</a></li>
        </ul>
    </nav>
    `);

    const botonAbrir = document.getElementById("botonAbrir");
    const botonCerrar = document.getElementById("botonCerrar");
    const hamburguesa = document.getElementById("hamburguesa");
    const navbar = document.getElementById("navbar")
    const navElementos = document.getElementById("navElementos");

    if (url.includes("index.html")) {
        document.getElementById("inicio").setAttribute("aria-current", "page");
    } else if (url.includes("menu.html")) {
        document.getElementById("menu").setAttribute("aria-current", "page");
    } else if (url.includes("nosotros.html")) {
        document.getElementById("nosotros").setAttribute("aria-current", "page");
    } else if (url.includes("contacto.html")) {
        document.getElementById("contacto").setAttribute("aria-current", "page");
    }

    botonAbrir.addEventListener("click", function () {
        navElementos.classList.add("nav-visible");
        //console.log("click");
    });

    botonCerrar.addEventListener("click", function () {
        navElementos.classList.remove("nav-visible");
    });

    document.addEventListener("click", function (event) {
        //console.log(event.target);
        if (event.target !== navElementos && event.target !== botonAbrir && event.target !== hamburguesa) {
            navElementos.classList.remove("nav-visible");
        }
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

function addFooter() {
    footer.innerHTML = `
    <footer>
        <div class="footer-contenedor">
            <div class="logo-footer">
                <img src="/src/img/logo.png" alt="La Patroncita" class="logo" />
            </div>
            <div class="contacto-contenedor">
                <h6>Contacto</h6>
                <p class="widgets">Teléfono</p>
                <p class="widgets">Correo</p>
                <br />
                <p class="widgets">Dirección Línea 1</p>
                <p class="widgets">Dirección Línea 2</p>
            </div>
            <div class="suscripcion-contenedor">
                <h6>Recibe nuestras promociones</h6>
                <form name="submit-to-google-sheet">
                    <div class="mb-3">
                        <label for="correoSuscripcion" class="form-label widgets">Únete a la comunidad de suscriptores para recibir noticias y ofertas exclusivas.</label>
                        <div class="email-contenedor">
                            <input type="email" class="form-control" id="correoSuscripcion" placeholder="Correo electrónico" name="email"
                                required />
                            <button class="boton-amarillo" type="submit" id="btnSuscripcion">
                                Suscribirse
                            </button>
                        </div>
                    </div>
                    <div class="checkbox-politicas">
                        <input type="checkbox" class="form-check-input" id="politicasSuscripcion" required />
                        <label for="politicas" class="form-check-label widgets">He leído y acepto la
                        <a href="politica.html" target="_blank">política de privacidad</a>.</label>
                    </div>
                </form>
            </div>
        </div>
        <hr />
        <div class="redes-contenedor">
            <p class="widgets">
                &copy; 2024. Taquería "La Patroncita". Todos los derechos reservados.
            </p>
            <ul class="redes-sociales">
                <li>
                    <a href="https://www.facebook.com/profile.php?id=100064276886596" target="_blank"><i
                    class="bi bi-facebook"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/taquerialapatroncita/" target="_blank"><i class="bi bi-instagram"></i></a>
                </li>
                <li>
                    <a href="https://wa.me/message/7MHHJSHGDGEDG1" target="_blank"><i class="bi bi-whatsapp"></i></a>
                </li>
            </ul>
        </div>
    </footer>
    `;

}

window.addEventListener("load", function (event) {
    event.preventDefault;
    //window.scrollTo(0,0);
    addNavbar();
    addFooter();
});
