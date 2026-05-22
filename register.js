const nome = document.getElementById('nome');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmarSenha');
const btnRegistar = document.getElementById('btnRegistar');
const mensagem = document.getElementById('mensagem');

// Função pra validar senha: 8+ chars, tem letra e número
function validarSenha(senha) {
  const temLetra = /[a-zA-Z]/.test(senha);
  const temNumero = /[0-9]/.test(senha);
  return senha.length >= 8 && temLetra && temNumero;
}

btnRegistar.addEventListener('click', function() {
  const nomeVal = nome.value.trim();
  const senhaVal = senha.value.trim();
  const confirmarVal = confirmarSenha.value.trim();

  mensagem.textContent = '';
  mensagem.className = 'msg';

  if (!nomeVal) {
    mensagem.textContent = 'Preencha os dados';
    mensagem.classList.add('erro');
    return;
  }

  if (!senhaVal) {
    mensagem.textContent = 'Digite a sua palavra passe';
    mensagem.classList.add('erro');
    return;
  }

  if (!validarSenha(senhaVal)) {
    mensagem.textContent = 'A senha deve ter 8+ caracteres, com letra e número';
    mensagem.classList.add('erro');
    return;
  }

  if (!confirmarVal) {
    mensagem.textContent = 'Confirma a sua palavra passe';
    mensagem.classList.add('erro');
    return;
  }

  if (senhaVal !== confirmarVal) {
    mensagem.textContent = 'A palavra passe não corresponde';
    mensagem.classList.add('erro');
    return;
  }

  mensagem.textContent = 'O seu registro está sendo feito. Aguarde um pouquinho';
  mensagem.classList.add('sucesso');

  setTimeout(() => {
    window.location.href = 'produtos.html';
  }, 3000);
});

document.getElementById('tabLogin').addEventListener('click', () => {
  window.location.href = 'login.html';
});

document.getElementById('backBtn').addEventListener('click', () => {
  window.location.href = 'index.html';
});