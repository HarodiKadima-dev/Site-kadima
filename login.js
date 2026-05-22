// Pegando os elementos do HTML
const nome = document.getElementById('nome');
const senha = document.getElementById('senha');
const btnLogin = document.getElementById('btnLogin');
const mensagem = document.getElementById('mensagem');

// Evento do botão Entrar
btnLogin.addEventListener('click', function() {
  const nomeVal = nome.value.trim(); // trim() remove espaços em branco
  const senhaVal = senha.value.trim();

  // Limpa mensagem anterior
  mensagem.textContent = '';
  mensagem.className = 'msg';

  // Validação 1: campo vazio
  if (!nomeVal) {
    mensagem.textContent = 'Digite o seu nome';
    mensagem.classList.add('erro');
    return;
  }

  if (!senhaVal) {
    mensagem.textContent = 'Digite a sua palavra passe';
    mensagem.classList.add('erro');
    return;
  }

  // devido a falta de backend implementei simplesmente essa lógica
  mensagem.textContent = 'Entrando... Aguarde';
  mensagem.classList.add('sucesso');

  // Espera 2 segundos e redireciona
  setTimeout(() => {
    window.location.href = 'produtos.html';
  }, 2000);
});

// Navegação das tabs e seta de voltar
document.getElementById('tabRegister').addEventListener('click', () => {
  window.location.href = 'register.html';
});

document.getElementById('backBtn').addEventListener('click', () => {
  window.location.href = 'index.html';
});

