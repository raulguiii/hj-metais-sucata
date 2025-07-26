const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");


// Abrir sidebar
menuBtn.addEventListener('click' , () => {
    sideMenu.style.display = 'block';
})

//Fechar sidbar
closeBtn.addEventListener( 'click', () =>{
    sideMenu.style.display = 'none'
})

// MUDAR THEME

themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})


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