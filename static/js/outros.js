// MODAL DE PAGAMENTO Diversos
const modalPagamentoDiversos = document.getElementById("modalPagamentoDiversos");
const btnAbrirModalDiversos = document.getElementById("btnAbrirModalDiversos"); // mesmo ID do botão "+"
const closeModalDiversos = document.querySelector(".close-button-pagamento-diversos");

// Abrir o modal
btnAbrirModalDiversos.addEventListener("click", () => {
    modalPagamentoDiversos.style.display = "block";
});

// Fechar o modal ao clicar no X
closeModalDiversos.addEventListener("click", () => {
    modalPagamentoDiversos.style.display = "none";
});