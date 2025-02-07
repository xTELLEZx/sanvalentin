document.addEventListener("DOMContentLoaded", function () {
    const openButton = document.getElementById("openCard");
    const closeButton = document.getElementById("closeCard");
    const card = document.querySelector(".card");

    openButton.addEventListener("click", function () {
        card.classList.add("open");
        openButton.style.display = "none"; // Ocultar el botón después de abrir
    });

    closeButton.addEventListener("click", function () {
        card.classList.remove("open");
        setTimeout(() => {
            openButton.style.display = "block"; // Mostrar el botón después de cerrar
        }, 800); // Espera a que termine la animación
    });

    // Generar corazones flotantes
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);

    // Generar tulipanes desde los lados
    function createTulip() {
        const tulip = document.createElement("div");
        tulip.classList.add("tulip");
        tulip.innerHTML = "🌷";

        // Decidir si sale de la izquierda o la derecha
        const side = Math.random() > 0.5 ? "left" : "right";
        tulip.style[side] = "-50px";
        tulip.style.bottom = Math.random() * 80 + "vh";
        tulip.style.animationDuration = Math.random() * 2 + 3 + "s";

        document.body.appendChild(tulip);

        setTimeout(() => {
            tulip.remove();
        }, 5000);
    }

    setInterval(createTulip, 1000);
});