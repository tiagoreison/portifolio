document.getElementById('formContato').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();
    const status = document.getElementById('mensagem-status');

    if (!nome || !email || !mensagem) {
        status.style.color = 'red';
        status.textContent = 'Por favor, preencha todos os campos.';
        return;
    }

    status.style.color = 'green';
    status.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
   
    this.reset();

    setTimeout(() => {
        status.textContent = '';
    }, 5000);
});
