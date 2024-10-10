// Obtém o elemento "resultado" do HTML
const resultado = document.getElementById('resultado');

// Adiciona um evento "submit" ao formulário
formulario.addEventListener('submit', (e) => {

    // Evita que a página seja recarregada
    e.preventDefault();

    // Obtém o nome do aluno
    const nome = document.getElementById('nome').value;

    // Converte as notas para float
    const p1 = parseFloat(document.getElementById('p1').value);
    const p2 = parseFloat(document.getElementById('p2').value);
    const pim = parseFloat(document.getElementById('pim').value);

    // Valida se os valores são números
    if (isNaN(p1) || isNaN(p2) || isNaN(pim)) {
        // Exibe uma mensagem de erro se não forem números
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
        // Exibe uma mensagem de erro se as notas estiverem fora da faixa
        resultado.innerHTML = 'Erro: as notas devem estar entre 0 e 10.';
        return;
    }

    // Valida se casas decimais são válidas (apenas 2)
    const regex = /^\d+(\.\d{1,2})?$/;
    if (!regex.test(p1.toString()) || !regex.test(p2.toString()) || !regex.test(pim.toString())) {
        // Exibe uma mensagem de erro se as casas decimais forem inválidas
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

    // Define a mensagem de aprovação ou reprovação
    let mensagem = `Olá ${nome}, sua média final é: ${media.toLocaleString('pt-BR', {minimumFractionDigits: 2})}.`;
    if (media >= 7) {
        mensagem += ` Você foi <strong>aprovado(a)</strong>!`;
        // Adiciona a classe "aprovado" ao elemento "resultado"
        resultado.classList.remove('reprovado');
        resultado.classList.add('aprovado');
    } else {
        mensagem += ` Você foi <strong>reprovado(a)</strong>.`;
        // Adiciona a classe "reprovado" ao elemento "resultado"
        resultado.classList.remove('aprovado');
        resultado.classList.add('reprovado');
    }

    // Exibe a mensagem com efeitos visuais
    resultado.innerHTML = mensagem;
    // Adiciona a classe "efeito" ao elemento "resultado"
    resultado.classList.add('efeito');
    // Remove a classe "efeito" após 1 segundo
    setTimeout(() => {
        resultado.classList.remove('efeito');
    }, 1000);
});
