// Seleciona o formulário e o elemento de resultado
const form = document.getElementById('contactForm');
const result = document.getElementById('result');

// Adiciona um ouvinte de evento para o envio do formulário
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão para poder validar antes

    // Limpa o conteúdo anterior do elemento de resultado
    result.textContent = "";

    // Obtém os valores dos campos de entrada
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Variável de controle para rastrear a validade do formulário
    let isValid = true;

    // Validação do nome: deve ter pelo menos 3 caracteres
    if (name.length < 3) {
        result.innerHTML += "<p>O nome deve ter pelo menos 3 caracteres.</p>";
        isValid = false;
    }

    // Validação do email: usa uma expressão regular simples para verificar o formato
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        result.innerHTML += "<p>Por favor, insira um endereço de email válido.</p>";
        isValid = false;
    }

    // Validação da mensagem: deve ter pelo menos 10 caracteres
    if (message.length < 10) {
        result.innerHTML += "<p>A mensagem deve ter pelo menos 10 caracteres.</p>";
        isValid = false;
    }

    // Se o formulário passou por todas as validações, exibe uma mensagem de sucesso
    if (isValid) {
        result.innerHTML = "<p>Formulário enviado com sucesso!</p>";

        // Reseta o formulário após o envio
        form.reset();
    }
});
