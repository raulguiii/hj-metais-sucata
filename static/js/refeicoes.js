// MODAL DE PAGAMENTO REFEICOES
const modalPagamentoRefeicoes = document.getElementById("modalPagamentoRefeicoes");
const btnAbrirModalRefeicoes = document.getElementById("btnAbrirModalRefeicoes"); // mesmo ID do botão "+"
const closeModalRefeicoes = document.querySelector(".close-button-pagamento-refeicoes");

// Abrir o modal
btnAbrirModalRefeicoes.addEventListener("click", () => {
    modalPagamentoRefeicoes.style.display = "block";
});

// Fechar o modal ao clicar no X
closeModalRefeicoes.addEventListener("click", () => {
    modalPagamentoRefeicoes.style.display = "none";
});
