// script.js
document.addEventListener('DOMContentLoaded', function() {
    const rangeInput = document.getElementById('quantidade');
    const output = document.getElementById('quantidade-output');

    rangeInput.addEventListener('input', function() {
        output.value = rangeInput.value;
        output.textContent = rangeInput.value; // Para garantir compatibilidade com todos os navegadores
    });
});
