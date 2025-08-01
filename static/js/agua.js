// MODAL DE PAGAMENTO AGUA
const modalPagamentoAgua = document.getElementById("modalPagamentoAgua");
const btnAbrirModalAgua = document.getElementById("btnAbrirModalAgua"); // mesmo ID do botão "+"
const closeModalAgua = document.querySelector(".close-button-pagamento-agua");

// Abrir o modal
btnAbrirModalAgua.addEventListener("click", () => {
    modalPagamentoAgua.style.display = "block";
});

// Fechar o modal ao clicar no X
closeModalAgua.addEventListener("click", () => {
    modalPagamentoAgua.style.display = "none";
});