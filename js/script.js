document.addEventListener("DOMContentLoaded", function () {
    const carrinho = document.querySelector(".carrinho");
    const pista = document.querySelector(".fundo-pista");
  
    function percorrerPista() {
      const larguraPista = pista.offsetWidth;
      const larguraCarrinho = carrinho.offsetWidth;
      const limiteDireita = larguraPista - larguraCarrinho;
      
      // Obtém a posição atual do carrinho
      const posicaoAtual = carrinho.getBoundingClientRect().left;
  
      // Verifica se o carrinho atingiu o final da pista
      if (posicaoAtual >= limiteDireita) {
        // Inverte a direção para a esquerda
        carrinho.style.transform = `translateX(-${larguraCarrinho}px)`;
      } else {
        // Move o carrinho para a direita
        carrinho.style.transform = `translateX(${larguraPista}px)`;
      }
  
      // Anima o carrinho
      carrinho.style.transition = 'transform 2s linear';
  
      // Reinicia a animação depois de um intervalo
      setTimeout(() => {
        // Move o carrinho de volta para a posição inicial
        carrinho.style.transform = 'translateX(0)';
        // Remove a transição para evitar que seja aplicada durante a reinicialização
        carrinho.style.transition = 'none';
  
        // Chama novamente a função para iniciar a animação no sentido oposto
        setTimeout(percorrerPista, 100); // Ajuste conforme necessário
      }, 2000);
    }
  
    // Chama a função para iniciar a animação
    percorrerPista();
  
    // Adiciona um ouvinte de eventos para reiniciar a animação quando a janela for redimensionada
    window.addEventListener("resize", percorrerPista);
  });