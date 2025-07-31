function configurarControlesDaAbaAtiva() {
    const abaAtiva = document.querySelector('section.active, [data-content].active');
    if (!abaAtiva) return;

    const sideMenu = document.querySelector("aside");
    const menuBtn = abaAtiva.querySelector("#menu-btn");
    const closeBtn = document.querySelector("#close-btn");
    const themeToggler = abaAtiva.querySelector(".theme-toggler");

    // Evento abrir menu
    if (menuBtn && sideMenu) {
        menuBtn.onclick = () => {
            sideMenu.style.display = 'block';

            // Adiciona um listener para detectar cliques fora do menu
            document.addEventListener('click', fecharMenuAoClicarFora);
        };
    }

    // Evento fechar menu
    if (closeBtn && sideMenu) {
        closeBtn.onclick = () => {
            sideMenu.style.display = 'none';
            document.removeEventListener('click', fecharMenuAoClicarFora);
        };
    }

    // Alternar tema
    if (themeToggler) {
        themeToggler.onclick = () => {
            document.body.classList.toggle('dark-theme-variables');
            themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
            themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
        };
    }

    // Função que fecha o menu se clicar fora
    function fecharMenuAoClicarFora(event) {
        if (sideMenu && !sideMenu.contains(event.target) && !menuBtn.contains(event.target)) {
            sideMenu.style.display = 'none';
            document.removeEventListener('click', fecharMenuAoClicarFora);
        }
    }
}


// Chama a configuração ao carregar
configurarControlesDaAbaAtiva();

// Se você muda de aba com botões ou navegação, chame isso após trocar a aba:
document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(() => configurarControlesDaAbaAtiva(), 50);
    });
});


document.getElementById('btnHJ').addEventListener('click', function (e) {
    e.preventDefault(); // impede o comportamento padrão do link
    location.reload();  // força o reload da página
});

document.getElementById('btnMetais').addEventListener('click', function (e) {
    e.preventDefault();
    location.reload();
});


const navItems = document.querySelectorAll('.nav-item');
        const contentSections = document.querySelectorAll('main section');

        navItems.forEach(item => {
            item.addEventListener('click', e => {
                e.preventDefault();

                // Remove 'active' de todos os itens
                navItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                // Esconde todos os conteúdos
                contentSections.forEach(section => {
                    section.classList.remove('active');
                });

                // Mostra conteúdo da aba clicada
                const tabName = item.getAttribute('data-tab');
                const targetSection = document.querySelector(`section[data-content="${tabName}"]`);
                if (targetSection) {
                    targetSection.classList.add('active');
                }
            });
        });


function mostrarMais(e) {
    e.preventDefault();
    const linhas = document.querySelectorAll('#faturamento-body tr');
    linhas.forEach(linha => linha.style.display = 'table-row');
    document.getElementById('ver-mais').style.display = 'none';
}


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