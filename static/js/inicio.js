function mostrarMais(e) {
    e.preventDefault();
    const linhas = document.querySelectorAll('#faturamento-body tr');
    linhas.forEach(linha => linha.style.display = 'table-row');
    document.getElementById('ver-mais').style.display = 'none';
}