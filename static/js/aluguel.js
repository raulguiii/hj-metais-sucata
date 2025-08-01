// MODAL DE PAGAMENTO ALUGUEL
const modalPagamentoAluguel = document.getElementById("modalPagamentoAluguel");
const btnAbrirModalAluguel = document.getElementById("btnAbrirModalAluguel"); // mesmo ID do botão "+"
const closeModalAluguel = document.querySelector(".close-button-pagamento-aluguel");

// Abrir o modal
btnAbrirModalAluguel.addEventListener("click", () => {
    modalPagamentoAluguel.style.display = "block";
});

// Fechar o modal ao clicar no X
closeModalAluguel.addEventListener("click", () => {
    modalPagamentoAluguel.style.display = "none";
});