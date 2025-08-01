// MODAL DE PAGAMENTO ENERGIA
const modalPagamentoEnergia = document.getElementById("modalPagamentoEnergia");
const btnAbrirModalEnergia = document.getElementById("btnAbrirModalEnergia"); // mesmo ID do botão "+"
const closeModalEnergia = document.querySelector(".close-button-pagamento-energia");

// Abrir o modal
btnAbrirModalEnergia.addEventListener("click", () => {
    modalPagamentoEnergia.style.display = "block";
});

// Fechar o modal ao clicar no X
closeModalEnergia.addEventListener("click", () => {
    modalPagamentoEnergia.style.display = "none";
});