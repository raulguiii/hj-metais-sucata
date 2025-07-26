function configurarControlesDaAbaAtiva() {
    const abaAtiva = document.querySelector('section.active, [data-content].active');
    if (!abaAtiva) return;

    const sideMenu = document.querySelector("aside"); // Assumindo que há apenas um menu lateral
    const menuBtn = abaAtiva.querySelector("#menu-btn");
    const closeBtn = document.querySelector("#close-btn"); // Só precisa de um, se existir
    const themeToggler = abaAtiva.querySelector(".theme-toggler");

    // Evento abrir menu
    if (menuBtn && sideMenu) {
        menuBtn.onclick = () => {
            sideMenu.style.display = 'block';
        };
    }

    // Evento fechar menu
    if (closeBtn && sideMenu) {
        closeBtn.onclick = () => {
            sideMenu.style.display = 'none';
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
}

// Chama a configuração ao carregar
configurarControlesDaAbaAtiva();

// Se você muda de aba com botões ou navegação, chame isso após trocar a aba:
document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', () => {
        setTimeout(() => configurarControlesDaAbaAtiva(), 50);
    });
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



const modal = document.getElementById("modalPagamentoAgua");
  const btnAbrir = document.getElementById("btnAbrirModalAgua");
  const btnFechar = document.querySelector(".close-button-pagamento");
  const form = document.getElementById("formPagamentoAgua");

  btnAbrir.onclick = () => modal.style.display = "block";
  btnFechar.onclick = () => modal.style.display = "none";
  

  form.onsubmit = function (e) {
    e.preventDefault();
    const data = document.getElementById("dataAgua").value;
    const valor = document.getElementById("valorAgua").value;

    if (!data || !valor) {
      alert("Preencha todos os campos!");
      return;
    }

    const tabela = document.getElementById("agua-body");
    const novaLinha = document.createElement("tr");
    novaLinha.innerHTML = `<td>${data.split("-").reverse().join("/")}</td><td>${valor}</td>`;
    tabela.appendChild(novaLinha);

    modal.style.display = "none";
    form.reset();
  };