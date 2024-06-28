function register() {
    const fullName = document.getElementById('fullName').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (fullName && phone && email && dob && username && password) {
        document.getElementById('output').innerHTML = `
            <h2>Detalhes de Registro</h2>
            <p><strong>Nome Completo:</strong> ${fullName}</p>
            <p><strong>Número de Telefone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Data de Nascimento:</strong> ${dob}</p>
            <p><strong>Nome de Usuário:</strong> ${username}</p>
        `;
        alert('Registro concluído com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos');
    }
}

function submitContactForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Mensagem enviada com sucesso!');
        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, preencha todos os campos');
    }
}

window.onload = function() {
    console.log("Página Carregada");
};