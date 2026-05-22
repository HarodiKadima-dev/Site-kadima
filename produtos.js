function adicionarPedido(nome, id, preco) {
  const url = `gestao-pedidos.html?nome=${encodeURIComponent(nome)}&id=${encodeURIComponent(id)}&preco=${encodeURIComponent(preco)}`;
  window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
  const inputBusca = document.getElementById('search');
  if (inputBusca) {
    inputBusca.addEventListener('input', function(e) {
      const termo = e.target.value.toLowerCase().trim();
      const cards = document.querySelectorAll('.produtos-grid .card');

      cards.forEach(card => {
        const nome = card.querySelector('h2')?.textContent.toLowerCase() || '';
        const spec = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const id = card.querySelector('h4')?.textContent.toLowerCase() || '';
        
        card.style.display = (nome.includes(termo) || spec.includes(termo) || id.includes(termo)) 
          ? 'block' 
          : 'none';
      });
    });
  }
});