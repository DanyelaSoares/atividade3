let form = document.getElementById('contactForm');
let responseDiv = document.getElementById('response');
let mensagemConfirmacao = document.getElementById("mensagemConfirmacao");

// Adiciona o evento de envio do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    // Captura os valores inseridos no formulário
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Exibe uma mensagem de confirmação
    responseDiv.innerHTML = `<p>Obrigado, <strong>${name}</strong>! Sua mensagem foi enviada com sucesso.</p>
                             <p>Email: ${email}</p>
                             <p>Mensagem: ${message}</p>`;
    responseDiv.style.display = "block"; // Exibe a mensagem de resposta

    // Limpa o formulário após o envio
    form.reset();
});
