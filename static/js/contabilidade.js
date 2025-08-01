// MODAL DE PAGAMENTO CONTABILIDADE
const modalPagamentoContabilidade = document.getElementById("modalPagamentoContabilidade");
const btnAbrirModalContabilidade = document.getElementById("btnAbrirModalContabilidade"); // mesmo ID do botão "+"
const closeModalContabilidade = document.querySelector(".close-button-pagamento-contabilidade");

// Abrir o modal
btnAbrirModalContabilidade.addEventListener("click", () => {
    modalPagamentoContabilidade.style.display = "block";
});

// Fechar o modal ao clicar no X
closeModalContabilidade.addEventListener("click", () => {
    modalPagamentoContabilidade.style.display = "none";
});