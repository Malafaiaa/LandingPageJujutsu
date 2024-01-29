document.addEventListener("DOMContentLoaded", function () {
    const botao = document.querySelector(".btn-plataforma");
    const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

    botao.addEventListener("click", () => {
        elementoPlataformas.classList.toggle("ativo");
    });

    const inputsPlataformas = document.querySelectorAll(".plataformas input");
    inputsPlataformas.forEach(input => {
        input.addEventListener("click", () => {
            const linkDaPlataforma = input.getAttribute("data-link");
            window.open(linkDaPlataforma, '_blank'); // Abre o link em uma nova guia
        });
    });
});