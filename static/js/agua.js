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

// Máscara de moeda brasileira no campo de valor
document.getElementById('valorAgua').addEventListener('input', function (e) {
    let valor = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número
    valor = (parseInt(valor, 10) / 100).toFixed(2) + ''; // Divide por 100 e formata
    valor = valor.replace('.', ','); // Troca ponto decimal por vírgula
    valor = valor.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Adiciona separador de milhar
    e.target.value = 'R$' + valor;
});

// Carregar dados na tabela da aba Água
function carregarAgua() {
    const loading = document.getElementById('loading-agua');
    const tbody = document.getElementById('agua-body');

    loading.style.display = 'block';  // mostra loading
    tbody.innerHTML = '';             // limpa tabela

    fetch('/api/agua')
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${item.titulo}</td>
                    <td>${new Date(item.data).toLocaleDateString()}</td>
                    <td>R$ ${parseFloat(item.valor).toFixed(2).replace('.', ',')}</td>
                `;
                tbody.appendChild(tr);
            });
            atualizarTotalAgua();
        })
        .catch(error => {
            console.error("Erro ao carregar os dados da água:", error);
        })
        .finally(() => {
            loading.style.display = 'none';  // oculta loading
        });
}

// Atualiza o valor total exibido na parte superior
function atualizarTotalAgua() {
    const linhas = document.querySelectorAll('#agua-body tr');
    let total = 0;

    linhas.forEach(linha => {
        const textoValor = linha.children[2]?.textContent || '';
        const numero = parseFloat(textoValor.replace('R$', '').replace(/\./g, '').replace(',', '.'));
        if (!isNaN(numero)) total += numero;
    });

    const valorFormatado = 'R$' + total.toFixed(2).replace('.', ',');
    const totalAguaElement = document.getElementById('valorTotalAgua');
    if (totalAguaElement) {
        totalAguaElement.textContent = valorFormatado;
    }
}

// Detectar quando a aba "água" for ativada
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
        const tabName = item.getAttribute('data-tab');
        if (tabName === "agua") {
            setTimeout(carregarAgua, 100);
        }
    });
});


// Enviar dados do formulário para o back-end
document.getElementById("formPagamentoAgua").addEventListener("submit", function (e) {
    e.preventDefault();

    const titulo = document.getElementById("tituloAgua").value;
    const data = document.getElementById("dataAgua").value;
    const valor = document.getElementById("valorAgua").value;

    fetch("/api/agua", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ titulo, data, valor }),
    })
    .then((res) => {
        if (!res.ok) throw new Error("Erro ao salvar");
        return res.json();
    })
    .then((data) => {
        modalPagamentoAgua.style.display = "none"; // Fecha o modal
        document.getElementById("formPagamentoAgua").reset(); // Limpa o formulário
        carregarAgua(); // Atualiza a tabela
    })
    .catch((err) => {
        console.error("Erro:", err);
        alert("Falha ao registrar pagamento.");
    });
});
