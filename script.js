const formulario = document.getElementById('formulario');
const resultado = document.getElementById('resultado');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    // Converte as notas para float
    const p1 = parseFloat(document.getElementById('p1').value);
    const p2 = parseFloat(document.getElementById('p2').value);
    const pim = parseFloat(document.getElementById('pim').value);

    // Valida se os valores são números
    if (isNaN(p1) || isNaN(p2) || isNaN(pim)) {
        resultado.innerHTML = 'Erro: valores inválidos. Insira apenas números.';
        return;
    }

    // Valida se as notas estão entre 0 e 10
    if (
        p1 < 0 ||
        p1 > 10 ||
        p2 < 0 ||
        p2 > 10 ||
        pim < 0 ||
        pim > 10
    ) {
        resultado.innerHTML = 'Erro: as notas devem estar entre 0 e 10.';
        return;
    }

    // Valida se casas decimais são válidas (apenas 2)
    const regex = /^\d+(\.\d{1,2})?$/;
    if (!regex.test(p1.toString()) || !regex.test(p2.toString()) || !regex.test(pim.toString())) {
        if (!regex.test(p1.toString())) {
            resultado.innerHTML = 'Erro: a nota da P1 possui casas decimais inválidas.';
            return;
        } else if (!regex.test(p2.toString())) {
            resultado.innerHTML = 'Erro: a nota da P2 possui casas decimais inválidas.';
            return;
        } else if (!regex.test(pim.toString())) {
            resultado.innerHTML = 'Erro: a nota do PIM possui casas decimais inválidas.';
            return;
        }
    }

    // Calcula a média
    const media = ((p1 * 4) + (p2 * 4) + (pim * 2)) / 10;

    // Exibe a média com 2 casas decimais
    resultado.innerHTML = `Sua média final é: ${media.toLocaleString('pt-BR', {minimumFractionDigits: 2})}.`;

    // Efeitos visuais
    resultado.classList.add('efeito');
    setTimeout(() => {
        resultado.classList.remove('efeito');
    }, 1000);
});
