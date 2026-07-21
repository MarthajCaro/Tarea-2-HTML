console.log("app.js está conectado correctamente.");

alert("Bienvenida y bienvenido a Un Mundo Distinto.");

let intereses = 0;

const contador = document.getElementById("contador");
const botonNebula = document.getElementById("btn-nebula");
const botonSolar = document.getElementById("btn-solar");
const botonPulse = document.getElementById("btn-pulse");

let nebulaActivo = false;
let solarActivo = false;
let pulseActivo = false;


botonNebula.addEventListener("click", function () {
    nebulaActivo = !nebulaActivo;

    if (nebulaActivo) {
        intereses++;
    } else {
        intereses--;
    }

    contador.textContent = intereses;
    console.log("Interés en Nébula:", intereses);
});


botonSolar.addEventListener("click", function () {
    solarActivo = !solarActivo;

    if (solarActivo) {
        intereses++;
    } else {
        intereses--;
    }

    contador.textContent = intereses;
    console.log("Interés en Solar:", intereses);
});


botonPulse.addEventListener("click", function () {
    pulseActivo = !pulseActivo;

    if (pulseActivo) {
        intereses++;
    } else {
        intereses--;
    }

    contador.textContent = intereses;
    console.log("Interés en Pulse:", intereses);
});