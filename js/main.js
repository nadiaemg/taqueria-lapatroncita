const header = document.querySelector("header");
const footer = document.querySelector("footer");
const url = window.location.href;
const regexEmail = new RegExp("^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$");
const scriptURL = "https://script.google.com/macros/s/AKfycbx_CfROdeKRBfQ-IHgoddFnRF6Elol41OAaPG--FGCoLInZbep1lZZ4PAGFHPFpspix/exec";
const year = new Date().getFullYear();

function addNavbar() {
    header.insertAdjacentHTML("afterbegin", `
    <nav id="navbar">
        <a href="index.html"><img src="./src/img/logo.png" class="logo" alt="La patroncita" /></a>
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

    /*Navegación - Página actual*/
    if (url.includes("index.html")) {
        document.getElementById("inicio").setAttribute("aria-current", "page");
    } else if (url.includes("menu.html")) {
        document.getElementById("menu").setAttribute("aria-current", "page");
    } else if (url.includes("nosotros.html")) {
        document.getElementById("nosotros").setAttribute("aria-current", "page");
    } else if (url.includes("contacto.html")) {
        document.getElementById("contacto").setAttribute("aria-current", "page");
    }

    /*Menú hamburguesa*/
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

    /*Navbar dinámico al hacer scroll*/
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
        <div class="footer-contenedor">
            <div class="logo-footer">
                <img src="./src/img/logo.png" alt="La Patroncita" class="logo" />
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
                        <p class="widgets" id="alertaSuscripcion" style="font-weight: 700;"></p>
                        <p class="widgets" id="alertaCorreoSus" style="font-weight: 700;"></p>
                        <div class="email-contenedor">
                            <input type="email" class="form-control" id="correoSuscripcion" placeholder="Correo electrónico" name="email" autocomplete="email"
                                required />
                            <button class="boton-amarillo" type="submit" id="btnSuscripcion">
                                Suscribirse
                            </button>
                        </div>
                    </div>
                    <div>
                        <p class="widgets" id="alertaPoliticas" style="font-weight: 700;"></p>
                    </div>
                    <div class="checkbox-politicas">
                        <input type="checkbox" class="form-check-input" id="checkboxPoliticas" required />
                        <label for="checkboxPoliticas" class="form-check-label widgets">He leído y acepto la
                        <a href="politica.html" target="_blank">política de privacidad</a>.</label>
                    </div>
                </form>
            </div>
        </div>
        <hr />
        <div class="redes-contenedor">
            <p class="widgets">
                &copy; ${year}. Taquería "La Patroncita". Todos los derechos reservados.
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
    `;

    /*Formulario de suscripción*/
    const alertaSuscripcion = document.getElementById("alertaSuscripcion");
    const alertaCorreoSus = document.getElementById("alertaCorreoSus");
    const alertaPoliticas = document.getElementById("alertaPoliticas");
    const btnSuscripcion = document.getElementById("btnSuscripcion");
    const inputCorreo = document.getElementById("correoSuscripcion");
    const checkboxPoliticas = document.getElementById("checkboxPoliticas");
    const form = document.forms['submit-to-google-sheet'];

    inputCorreo.addEventListener("change", function () {
        alertaCorreoSus.innerText = "";
    })

    checkboxPoliticas.addEventListener("click", function () {
        alertaPoliticas.innerText = "";
    })

    btnSuscripcion.addEventListener("click", function (event) {
        event.preventDefault();
        console.log("click");
        alertaSuscripcion.innerText = "";
        alertaCorreoSus.innerText = "";
        alertaPoliticas.innerText = "";

        if (!checkboxPoliticas.checked) {
            alertaPoliticas.style.color = "var(--rusty-red)";
            alertaPoliticas.innerText = "Por favor, marque la casilla para continuar.";
            setTimeout(() => {
                alertaPoliticas.innerText = "";
            }, 30000);
            checkboxPoliticas.focus();
        }
        if (!regexEmail.test(inputCorreo.value)) {
            alertaCorreoSus.style.color = "var(--rusty-red)";
            alertaCorreoSus.innerText = "Por favor, ingrese un correo válido.";
            setTimeout(() => {
                alertaCorreoSus.innerText = "";
            }, 30000);
            inputCorreo.focus();
        }
        if (checkboxPoliticas.checked && regexEmail.test(inputCorreo.value)) {
            alertaSuscripcion.style.color = "var(--avocado)";
            alertaSuscripcion.innerText = "Enviando datos...";

            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Error");
                    } else {
                        console.log("Todo bien: ", response);
                        inputCorreo.value = "";
                        checkboxPoliticas.checked = false;
                        alertaSuscripcion.style.color = "var(--avocado)";
                        alertaSuscripcion.innerText = "¡Suscripción exitosa!";
                        setTimeout(() => {
                            alertaSuscripcion.innerText = "";
                        }, 30000);
                    }
                })
                .catch(error => {
                    console.error("Error: ", error.message)
                    alertaSuscripcion.style.color = "var(--rusty-red)";
                    alertaSuscripcion.innerText = "Por el momento el servicio no está disponible. Inténtelo más tarde";
                    setTimeout(() => {
                        alertaSuscripcion.innerText = "";
                    }, 30000);
                });
        }
    });

}

window.addEventListener("load", function (event) {
    event.preventDefault;
    //window.scrollTo(0,0);
    addNavbar();
    addFooter();

});
