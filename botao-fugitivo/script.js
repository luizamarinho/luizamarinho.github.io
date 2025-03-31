/** @type {HTMLElement} */
const botao_nao = document.querySelector('.botao-nao');

function moveBotao() {
  let x = Math.random() * 60 - 30;
  let y = Math.random() * 60 - 30;
  botao_nao.style.translate = x + 'vw ' + y + 'vh';
}

function alerta() {
  alert('Vai contratar sim');
  location.href = 'https://luizamarinho.github.io/';
}
