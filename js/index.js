const textos = [
    "Hola, este es un efecto tipo máquina de escribir ✔️",
    "Ahora escribo otro texto diferente.",
    "¡Listo! Aquí tienes el icono de Word: 📄"
];

const typewriter = document.getElementById("typewriter");
let textoIndex = 0;
let charIndex = 0;

function escribir() {
    if (charIndex < textos[textoIndex].length) {
        typewriter.textContent += textos[textoIndex].charAt(charIndex);
        charIndex++;
        setTimeout(escribir, 50);
    } else {
        textoIndex++;
        if (textoIndex < textos.length) {
            setTimeout(() => {
                typewriter.textContent = "";
                charIndex = 0;
                escribir();
            }, 1000);
        }
    }
}
escribir();