const display = document.getElementById('display');

// Adiciona número ou operador ao display
function adicionarAoDisplay(valor) {
    display.value += valor;
}

// Limpa o display
function limparDisplay() {
    display.value = '';
}

// Apaga último caractere
function apagarUltimo() {
    display.value = display.value.slice(0, -1);
}

// Calcula o resultado
function calcularResultado() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}

// Suporte ao teclado físico
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if ((key >= '0' && key <= '9') || key === '.' || ['+', '-', '*', '/'].includes(key)) {
        adicionarAoDisplay(key);
    } else if (key === 'Enter' || key === '=') {
        calcularResultado();
    } else if (key === 'Backspace') {
        apagarUltimo();
    } else if (key.toLowerCase() === 'c' || key === 'Escape') {
        limparDisplay(); // Adiciona Esc para limpar
    }
});
