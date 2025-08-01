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

