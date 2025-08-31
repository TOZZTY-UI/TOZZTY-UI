window.addEventListener('load', function() {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    const loader = document.querySelector('.loader');
    const body = document.body;

    // 1. Aplica animación de zoom antes de ocultar
    setTimeout(() => {
        loader.classList.add('zoom-out');

        // 2. Espera a que termine la animación y luego oculta
        setTimeout(() => {
            loaderWrapper.style.display = 'none';
            body.classList.add('zoom-in'); // Zoom de entrada al contenido, opcional
            // Iniciar máquina de escribir después de ocultar el loader
            escribir();
        }, 1500); // igual a la duración de la animación `zoomOut`
    }, 5000);
});

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
            }, 8000);
        }
    }
}