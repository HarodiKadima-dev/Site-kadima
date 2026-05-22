let pedidos = [];

// Quando carrega a página, preenche produto e ID vindos da URL
window.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);

  document.getElementById('nomeProduto').value = params.get('nome') || '';
  document.getElementById('idUsuario').value = params.get('id') || '';

  carregarPedidos();
  mostrarPedidos();
});

// Botão Adicionar Pedido
document.getElementById('btnAdicionar').addEventListener('click', function() {
  const nomeUsuario = document.getElementById('nomeUsuario').value;
  const idUsuario = document.getElementById('idUsuario').value;
  const nomeProduto = document.getElementById('nomeProduto').value;
  const quantidade = document.getElementById('quantidade').value;

  if (!nomeUsuario ||!nomeProduto ||!quantidade) {
    alert('Preenche o nome e a quantidade!');
    return;
  }

  const pedido = {
    usuario: nomeUsuario,
    id: idUsuario,
    produto: nomeProduto,
    qtd: quantidade,
    status: 'Pendente'
  };

  pedidos.push(pedido);
  salvarPedidos();
  mostrarPedidos();

  // Limpa só produto e quantidade pra adicionar outro
  document.getElementById('nomeProduto').value = '';
  document.getElementById('idUsuario').value = '';
  document.getElementById('quantidade').value = '1';
});

// Mostra os pedidos na tabela
function mostrarPedidos() {
  const corpo = document.getElementById('tabelaCorpo');

  if (pedidos.length === 0) {
    corpo.innerHTML = '';
    document.getElementById('totalPedidos').textContent = 'Total Pedidos:0';
    return;
  }

  corpo.innerHTML = pedidos.map((p, i) => `
    <div class="linha-pedido">
      <span>${p.usuario}</span>
      <span>${p.id}</span>
      <span>${p.produto}</span>
      <span>${p.qtd}</span>
      <span>${p.status}</span>
      <span><button onclick="removerPedido(${i})">Apagar</button></span>
    </div>
  `).join('');

  document.getElementById('totalPedidos').textContent = `Total Pedidos:${pedidos.length}`;
}

// Remove pedido
function removerPedido(index) {
  pedidos.splice(index, 1);
  salvarPedidos();
  mostrarPedidos();
}

// Salva no navegador
function salvarPedidos() {
  localStorage.setItem('pedidos', JSON.stringify(pedidos));
}

// Carrega pedidos salvos
function carregarPedidos() {
  const salvos = localStorage.getItem('pedidos');
  if (salvos) {
    pedidos = JSON.parse(salvos);
  }
}

