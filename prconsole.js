// Função para sobrescrever o conteúdo das respostas
function overwriteAnswers() {
    // Seleciona todas as opções de múltipla escolha. Aqui, '.ets-act-mct-option' representa os elementos de resposta na página.
    const options = document.querySelectorAll('.ets-act-mct-option');
    
    // Se nenhuma opção for encontrada, exibe uma mensagem no console e para a execução da função.
    if (options.length === 0) {
        console.log('Nenhuma opção de resposta encontrada.');
        return;
    }

    // Itera sobre cada uma das opções de múltipla escolha encontradas.
    options.forEach(option => {
        // Obtém o valor do atributo 'data-at-id' de cada opção, que será usado para determinar a resposta.
        const answerId = option.getAttribute('data-at-id');
        // Obtém o texto atual da opção, removendo espaços extras no início e no fim.
        const answerText = option.textContent.trim();
        
        // Verifica o último número do 'data-at-id' e modifica o conteúdo da resposta baseado nisso.
        // Se o 'data-at-id' terminar com "1", indica que é a resposta certa.
        if (answerId.endsWith('1')) {
            option.innerHTML = '<span style="color: green;">Resposta Certa</span>';
        } 
        // Se o 'data-at-id' terminar com "2", indica que é a resposta errada.
        else if (answerId.endsWith('2')) {
            option.innerHTML = '<span style="color: red;">Resposta Errada</span>';
        } 
        // Para outros casos, indica uma resposta diferente.
        else {
            option.innerHTML = '<span style="color: orange;">Outra Resposta</span>';
        }

        // Registra no console o ID da resposta e o texto original da resposta para fins de depuração.
        console.log(`ID: ${answerId}, Resposta: ${answerText}`);
    });
}

// Função para colorir os cards com base no último número do 'data-at-id'
function colorCards() {
    // Seleciona todos os cards usando os seletores '.ets-mb-top' e '.ets-mb-bottom'.
    const cards = document.querySelectorAll('.ets-mb-top, .ets-mb-bottom');

    // Se nenhum card for encontrado, exibe uma mensagem no console e para a execução da função.
    if (cards.length === 0) {
        console.log('Nenhum card encontrado.');
        return;
    }

    // Itera sobre cada um dos cards.
    cards.forEach(card => {
        // Obtém o valor do atributo 'data-at-id' do card, que será usado para determinar a cor.
        const cardId = card.getAttribute('data-at-id');

        // Verifica o último número do 'data-at-id' e aplica uma cor ao fundo do card com base nisso.
        if (cardId.endsWith('1')) {
            card.style.backgroundColor = 'green';  // Cor verde para IDs que terminam em 1
        } else if (cardId.endsWith('2')) {
            card.style.backgroundColor = 'red';    // Cor vermelha para IDs que terminam em 2
        } else if (cardId.endsWith('3')) {
            card.style.backgroundColor = 'blue';   // Cor azul para IDs que terminam em 3
        } else if (cardId.endsWith('4')) {
            card.style.backgroundColor = 'purple'; // Cor roxa para IDs que terminam em 4
        } else if (cardId.endsWith('5')) {
            card.style.backgroundColor = 'yellow'; // Cor amarela para IDs que terminam em 5
        } else if (cardId.endsWith('6')) {
            card.style.backgroundColor = 'orange'; // Cor laranja para IDs que terminam em 6
        } else if (cardId.endsWith('7')) {
            card.style.backgroundColor = 'pink';   // Cor rosa para IDs que terminam em 7
        } else if (cardId.endsWith('8')) {
            card.style.backgroundColor = 'brown';  // Cor marrom para IDs que terminam em 8
        } else if (cardId.endsWith('9')) {
            card.style.backgroundColor = 'gray';   // Cor cinza para IDs que terminam em 9
        } else {
            card.style.backgroundColor = 'lightgray'; // Cor cinza claro para IDs indefinidos ou outros números
        }

        // Registra no console o ID do card e uma mensagem indicando que a cor foi aplicada, para depuração.
        console.log(`ID do Card: ${cardId}, Cor aplicada.`);
    });
}

// Executa as funções de sobrescrever respostas e colorir cards ao carregar o script.
overwriteAnswers();
colorCards();
