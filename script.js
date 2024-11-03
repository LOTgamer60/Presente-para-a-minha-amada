document.getElementById("heart-button").addEventListener("click", function() {
    // Adiciona a classe 'fade-out' ao body
    document.body.classList.add("fade-out");

    // Espera o tempo da transição (0.5s) antes de redirecionar para a nova página
    setTimeout(function() {
        window.location.href = "surpresa.html";
    }, 500); // Tempo em milissegundos
});