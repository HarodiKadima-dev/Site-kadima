document.addEventListener('DOMContentLoaded', () => {
  const numero = "+244933540750"; // Troca pelo teu número com código do país
  const mensagem = "Olá! Preciso de ajuda com o meu pedido na Kadima Services.";
  
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  document.getElementById('btnWhatsapp').href = link;
});

