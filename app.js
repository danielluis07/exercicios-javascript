document.getElementById("meuBotao").addEventListener("click", function() {
    alert("Olá mundo!");
});

document.getElementById("meuBotao2").addEventListener("click", function() {
    let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let num2 = parseInt(prompt("Digite o segundo número inteiro:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
    } else if (num1 > num2) {
        alert("O número maior é: " + num1);
    } else if (num2 > num1) {
        alert("O número maior é: " + num2);
    } else {
        alert("Os dois números são iguais.");
    }
});

document.getElementById("copiarBotao").addEventListener("click", function() {
    let frase = document.getElementById("inputFrase").value;
    document.getElementById("exibirFrase").innerText = frase;
});

document.getElementById('verificarBtn').addEventListener('click', function() {
    var inputValue = document.getElementById('inputValue').value;
    var resultText = '';

    if (inputValue === '') {
        resultText = 'Por favor, insira um valor.';
    } else {
        var number = parseFloat(inputValue);
        if (number < 0) {
            resultText = 'O valor é menor que zero.';
        } else if (number === 0) {
            resultText = 'O valor é igual a zero.';
        } else {
            resultText = 'O valor é maior que zero.';
        }
    }

    document.getElementById('resultado-4').textContent = resultText;
});

function mostrarImpares() {
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado-5');
    resultado.innerHTML = '';

    if (numero === '' || isNaN(numero)) {
        resultado.innerHTML = 'Por favor, insira um número válido.';
        return;
    }

    const n = parseInt(numero);
    let impares = [];

    for (let i = 1; i <= n; i += 2) {
        impares.push(i);
    }

    resultado.innerHTML = `Números ímpares entre 0 e ${n}: <br> ${impares.join(', ')}`;
}

document.getElementById('texto').addEventListener('input', function () {
    var text = this.value;
    var characterCount = text.length;
    document.getElementById('contadorInput').value = characterCount;
});

document.getElementById('esconderBotao').addEventListener('click', function() {
    var paragrafo = document.getElementById('meuParagrafo');
    paragrafo.style.display = 'none';
});

document.getElementById('comecar').addEventListener('click', function() {
    let sum = 0;
    let input;

    do {
        input = parseFloat(prompt("Digite um número (Digite um número menor ou igual a 0 para finalizar):"));

        if (!isNaN(input) && input > 0) {
            sum += input;
        }
    } while (input > 0);

    document.getElementById('resultado-8').innerText = `A soma dos números é: ${sum}`;
});

function trocarImagem() {
    document.getElementById("imagem").src = "./imagens/bh.jpg";
}

function voltarImagem() {
    document.getElementById("imagem").src = "./imagens/arrasca.jpg";
}


document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('nome').value;
    const phone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('mensagem').value;

    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

    const resultHtml = `
        <h2>Mensagem Enviada!</h2>
        <p><strong>Data:</strong> ${formattedDate}</p>
        <p><strong>Emissor:</strong></p>
        <p>Nome: ${name}</p>
        <p>Telefone: ${phone}</p>
        <p>E-mail: ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
    `;

    document.getElementById('result').innerHTML = resultHtml;
});

