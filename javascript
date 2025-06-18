document.getElementById('gerarSenha').addEventListener('click', function() {
    let senha = Math.random().toString(36).slice(-8); // Gera uma senha aleatória de 8 caracteres
    document.getElementById('senhaGerada').innerText = 'Senha gerada: ' + senha; // Exibe a senha gerada na tela
});
