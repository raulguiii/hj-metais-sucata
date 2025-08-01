// MODAL DE PAGAMENTO FUNCIONARIOS
const modalPagamentoFuncionarios = document.getElementById("modalPagamentoFuncionarios");
const btnAbrirModalFuncionarios = document.getElementById("btnAbrirModalFuncionarios"); // mesmo ID do botão "+"
const closeModalFuncionarios = document.querySelector(".close-button-pagamento-funcionarios");

// Abrir o modal
btnAbrirModalFuncionarios.addEventListener("click", () => {
    modalPagamentoFuncionarios.style.display = "block";
});

// Fechar o modal ao clicar no X
closeModalFuncionarios.addEventListener("click", () => {
    modalPagamentoFuncionarios.style.display = "none";
});