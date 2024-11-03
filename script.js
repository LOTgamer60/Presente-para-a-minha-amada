// Mostra o alerta ao carregar a página
window.onload = function() {
    alert("Clique no coração para continuar ❤️");
};

// Evento para mudar de página ao clicar no coração
document.getElementById("heart-button").addEventListener("click", function() {
    document.body.classList.add("fade-out");
    setTimeout(function() {
        window.location.href = "surpresa.html";
    }, 500); // Tempo da transição
});
