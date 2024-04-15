const header = document.querySelector("header");
const footer = document.querySelector("footer");
let url = window.location.href;


function addNavbar() {
    header.insertAdjacentHTML("afterbegin", `
    <nav>
        <a href="index.html"><img src="/src/img/logo.png" class="logo" alt="La patroncita" /></a>
        <button class="abrir-menu" id="botonAbrir"><i class="bi bi-list" id="hamburguesa"></i></button>
        <ul class="nav-lista" id="nav">
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
    const nav = document.getElementById("nav");

    botonAbrir.addEventListener("click", function(){
        nav.classList.add("nav-visible");
        console.log("click");
    });

    botonCerrar.addEventListener("click", function(){
        nav.classList.remove("nav-visible");
    });

    document.addEventListener("click", function(event) {
        console.log(event.target);
        if (event.target !== nav && event.target !== botonAbrir && event.target !== hamburguesa) {
            nav.classList.remove("nav-visible");
        }
    });

    if (url.includes("index.html")) {
        document.getElementById("inicio").setAttribute("aria-current", "page");
    } else if (url.includes("menu.html")) {
        document.getElementById("menu").setAttribute("aria-current", "page");
    } else if (url.includes("nosotros.html")) {
        document.getElementById("nosotros").setAttribute("aria-current", "page");
    } else if (url.includes("contacto.html")) {
        document.getElementById("contacto").setAttribute("aria-current", "page");
    }
}

function addFooter(){
    footer.innerHTML = `
    <div>
        <img src="#" alt="" />
        <div>
            <h5>Contacto</h5>
            <p class="widgets">Teléfono</p>
            <p class="widgets">Correo</p>
            <br />
            <p class="widgets">Dirección Línea 1</p>
            <p class="widgets">Dirección Línea 2</p>
        </div>
        <div>
            <h5>Recibe nuestras promociones</h5>
            <form>
                <div>
                    <label for="correoSuscripcion">Únete a la comunidad de suscriptores para recibir noticias y ofertas
                    exclusivas.</label>
                    <input type="email" id="correoSuscripcion" placeholder="Correo electrónico" required />
                </div>
                <div>
                    <input type="checkbox" id="politicas" required>
                    <label for="politicas">He leído y acepto la <a href="politica.html" target="_blank">política de privacidad</a>.</label>
                </div>
                <button class="boton-amarillo" type="btnSubmit" id="suscripcion">Suscribirse</button>
            </form>
        </div>
    </div>
    <hr />
    <div>
        <p>
        &copy; 2024. Taquería "La Patroncita". Todos los derechos reservados.
        </p>
        <ul>
        <li><a href="https://www.facebook.com/profile.php?id=100064276886596" target="_blank">Facebook</a></li>
        <li><a href="https://www.instagram.com/taquerialapatroncita/" target="_blank">Instagram</a></li>
        <li><a href="https://wa.me/message/7MHHJSHGDGEDG1" target="_blank">WhatsApp</a></li>
        </ul>
    </div>
    `;
}


window.addEventListener("load", function(event){
    event.preventDefault;
    addNavbar();
    addFooter();
});

window.addEventListener("scroll")