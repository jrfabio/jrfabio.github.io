document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calcularBtn').addEventListener('click', calcularIMC);
    document.getElementById('limparBtn').addEventListener('click', limparCampos);
});

function calcularIMC() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);
    
    if (altura && peso) {
        var imc = peso / (altura * altura);
        var resultado = document.getElementById('resultado');
        resultado.innerHTML = 'Seu IMC é: ' + imc.toFixed(2) + '<br>';
        // Adicionando a mensagem de status com base no valor do IMC
        if (imc < 18.5) {
            resultado.innerHTML += '<span id="status">Status: Abaixo do peso</span>';
        } else if (imc >= 18.5 && imc < 25) {
            resultado.innerHTML += '<span id="status">Status: Peso normal</span>';
        } else if (imc >= 25 && imc < 30) {
            resultado.innerHTML += '<span id="status">Status: Sobrepeso</span>';
        } else {
            resultado.innerHTML += '<span id="status">Status: Obesidade</span>';
        }
    } else {
        alert('Por favor, insira sua altura e peso.');
    }
}

function limparCampos() {
    document.getElementById('altura').value = ''; // Limpa o campo de altura
    document.getElementById('peso').value = ''; // Limpa o campo de peso
    document.getElementById('resultado').innerHTML = ''; // Limpa o resultado do IMC
}
