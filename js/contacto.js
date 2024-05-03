const btnContacto = document.getElementById('enviarFormulario');
const btnWhatsapp = document.getElementById('ordenarWhatsapp');
const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const telefono = document.getElementById('telefono');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const politicas = document.getElementById('politicas');

const alertaNombre = document.getElementById('alertaNombre');
const alertaCorreo = document.getElementById('alertaCorreo');
const alertaTel = document.getElementById('alertaTel');
const alertaAsunto = document.getElementById('alertaAsunto');
const alertaMensaje = document.getElementById('alertaMensaje');
const alertaCheck = document.getElementById('alertaCheck');

const contactoModal = document.getElementById('contactoModal');
const modalHeader = document.querySelector('.modal-header');
const modalTitulo = document.getElementById('modalTitulo');
const modalTexto = document.getElementById('modalTexto');
const cerrarModal = document.getElementById('cerrarModal');
const aceptarModal = document.getElementById('aceptarModal');

const secureToken = "";
const correoDestinatario = "";

const expresiones = {
    regexNombre: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s']+$/,
    regexCorreo: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
    regexAsunto: /^.*(?=.*[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ])[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ;,.!¡?¿\d]{2,}.*$/,
    regexMensaje: /^[^\/\\<>]*$/,
    regexTel: /^(?!0{10})\d{10}$/
}


/*Validaciones*/
function validarNombre() {
    nombre.value = nombre.value.trim();
    if (nombre.value.length >= 3 && expresiones.regexNombre.test(nombre.value)) {
        alertaNombre.innerText = "";
        return true;
    } else {
        alertaNombre.innerText = "Ingrese un nombre válido.";
        nombre.focus();
        setTimeout(() => {
            alertaNombre.innerText = "";
        }, 60000);
        console.log("nombre no valido");
        return false;
    }
}

function validarCorreo() {
    correo.value = correo.value.trim();
    if (expresiones.regexCorreo.test(correo.value)) {
        alertaCorreo.innerText = "";
        return true;
    } else {
        alertaCorreo.innerText = "Ingrese un correo válido."
        correo.focus();
        setTimeout(() => {
            alertaCorreo.innerText = "";
        }, 60000);
        console.log("correo no valido");
        return false;
    }
}

function validarTel() {
    telefono.value = telefono.value.trim();
    if (expresiones.regexTel.test(telefono.value)) {
        alertaTel.innerText = "";
        return true;
    } else {
        alertaTel.innerText = "Ingrese un teléfono válido."
        telefono.focus();
        setTimeout(() => {
            alertaTel.innerText = "";
        }, 60000);
        console.log("tel no valido");
        return false;
    }
}

function validarAsunto() {
    asunto.value = asunto.value.trim();
    if (asunto.value.length >= 5 && expresiones.regexAsunto.test(asunto.value)) {
        alertaAsunto.innerText = "";
        return true;
    } else {
        alertaAsunto.innerText = "Ingrese un asunto válido y mayor a 5 caractéres.";
        asunto.focus();
        setTimeout(() => {
            alertaAsunto.innerText = "";
        }, 60000);
        console.log("asunto no valido");
        return false;
    }
}

function validarMensaje() {
    mensaje.value = mensaje.value.trim();
    if (mensaje.value.length >= 5 && expresiones.regexMensaje.test(nombre.value)) {
        alertaMensaje.innerText = "";
        return true;
    } else {
        alertaMensaje.innerText = "Ingrese un mensaje válido y mayor a 5 caractéres.";
        mensaje.focus();
        setTimeout(() => {
            alertaMensaje.innerText = "";
        }, 60000);
        console.log("msj no valido");
        return false;
    }
}

function validarAceptarPoliticas() {
    if (politicas.checked) {
        alertaCheck.innerText = "";
        return true;
    } else {
        alertaCheck.innerText = "Marque la casilla para continuar.";
        //politicas.focus();
        setTimeout(() => {
            alertaCheck.innerText = "";
        }, 60000);
        console.log("nocheck");
        return false;
    }
}

/*Enviar correo de contacto*/
function enviarMensaje(){
    btnContacto.innerText = "Enviando..."
    Email.send({
        SecureToken : secureToken,
        To : correoDestinatario,
        From : correo.value,
        Subject : asunto.value,
        Body : `
            ${mensaje.value}<br/><br/>
            <strong>Datos de contacto:</strong><br/>
            <strong>Nombre: </strong>${nombre.value}<br/>
            <strong>Correo: </strong>${correo.value}<br/>
            <strong>Teléfono: </strong>${telefono.value}
        `
    }).then(message => {
            if (message === "OK") {
                console.log(message);
                btnContacto.innerText = "Enviar"
                nombre.value = "";
                correo.value = "";
                asunto.value = "";
                telefono.value = "";
                mensaje.value = "";
                politicas.checked = false;

                /*Estilo modal contacto envio exitoso*/
                modalHeader.style.backgroundColor = 'var(--avocado)';
                modalTitulo.innerHTML=`<i class="bi bi-check-circle"></i> Aviso`;
                modalTexto.innerText = "¡Su mensaje se envió con éxito!";
                aceptarModal.classList.add('boton-verde');
                contactoModal.classList.add('show');
                contactoModal.style.display = 'block';
            } else {
                throw new Error(message);
            }
        }
    ).catch(error => {
            console.error("Error: ", error.message);
            btnContacto.innerText = "Enviar"
            /*Estilo modal contacto envio fallido*/
            contactoModal.style.display = 'block';
            contactoModal.classList.add('show');
            modalHeader.style.backgroundColor = 'var(--spanish-orange)';
            modalTitulo.innerHTML=`<i class="bi bi-x-circle"></i> Aviso`;
            modalTexto.innerHTML = `<strong>¡Su mensaje no pudo ser enviado!</strong><br/>Por favor intente nuevamente más tarde.`;
            aceptarModal.classList.add('boton-naranja');
        }
    );
}


/*Listeners*/
btnWhatsapp.addEventListener('click', function (event) {
    event.preventDefault();
    window.open('https://wa.me/message/7MHHJSHGDGEDG1', '_blank');
});

nombre.addEventListener('input', () => { validarNombre(); });
correo.addEventListener('input', () => { validarCorreo(); });
telefono.addEventListener('input', () => { validarTel(); });
asunto.addEventListener('input', () => { validarAsunto(); });
mensaje.addEventListener('input', () => { validarMensaje(); });
politicas.addEventListener('click', () => { alertaCheck.innerText = ""; });

btnContacto.addEventListener('click', function (event) {
    event.preventDefault();

    validarAceptarPoliticas();
    validarMensaje();
    validarAsunto();
    validarTel();
    validarCorreo();
    validarNombre();

    /*Envío de formulario de contacto si se aceptan validaciones*/
    if(validarNombre() && validarCorreo() && validarTel() && validarAsunto() && validarMensaje() && validarAceptarPoliticas()){
        console.log("Campos válidos");
        enviarMensaje();
    }
});

/*Cerrar modal*/
document.addEventListener("click", function (event) {
    //console.log(event.target);
    if (event.target == contactoModal || event.target == aceptarModal || event.target == cerrarModal) {
        contactoModal.style.display = 'none';
        contactoModal.classList.remove('show');
    }
});


