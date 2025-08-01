// MODAL DE PAGAMENTO GÁS
const modalPagamentoGas = document.getElementById("modalPagamentoGas");
const btnAbrirModalGas = document.getElementById("btnAbrirModalGas"); // mesmo ID do botão "+"
const closeModalGas = document.querySelector(".close-button-pagamento-gas");

// Abrir o modal
btnAbrirModalGas.addEventListener("click", () => {
    modalPagamentoGas.style.display = "block";
});

// Fechar o modal ao clicar no X
closeModalGas.addEventListener("click", () => {
    modalPagamentoGas.style.display = "none";
});
