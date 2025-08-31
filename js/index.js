const texto = "Hola, este es un efecto tipo máquina de escribir ✔️";
const elemento = document.getElementById("typewriter");
let i = 0;
function escribir() {
    if (i < texto.length) {
        elemento.textContent += texto.charAt(i);
        i++;
        setTimeout(escribir, 100); // Velocidad de tipeo
    }
}

escribir();