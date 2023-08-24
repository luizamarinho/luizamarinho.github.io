<script>
      let body = document.querySelector('body');
      let pagina_1 = document.querySelector('.pagina_1');
      let pagina_2 = document.querySelector('.pagina_2');
      pagina_1.classList.remove('sumir');
      let foto = document.querySelector('.foto');
      let resposta = document.querySelector('.resposta');
      let resposta_texto1 = document.querySelector('.resposta_texto1');
      let resposta_texto2 = document.querySelector('.resposta_texto2');
      let blocos = document.querySelector('.blocos');

      let iniciar = () => {
        console.log('chegou aqui');
        pagina_1.classList.add('sumir');
        body.classList.add('bg2');
        body.classList.remove('bg1');
        pagina_2.classList.remove('sumir');
        pagina_1.classList.add('sumir2');
      };

      let alternativa_1 = () => {
        console.log('alternativa correta');
        resposta.classList.add('verde');
        resposta.classList.remove('sumir2');
        foto.classList.add('sumir2');
        resposta_texto1.classList.remove('sumir3');
        blocos.classList.add('opacidade');
      };
      let alternativa_2 = () => {
        console.log('alternativa incorreta');
        resposta.classList.add('vermelho');
        resposta.classList.remove('sumir2');
        foto.classList.add('sumir2');
        resposta_texto2.classList.remove('sumir4');
        blocos.classList.add('opacidade');
      };
      let alternativa_3 = () => {
        console.log('alternativa errada');
        resposta.classList.add('vermelho');
        resposta.classList.remove('sumir2');
        foto.classList.add('sumir2');
        resposta_texto2.classList.remove('sumir4');
        blocos.classList.add('opacidade');
      };
      let alternativa_4 = () => {
        console.log('alternativa errada');
        resposta.classList.add('vermelho');
        resposta.classList.remove('sumir2');
        foto.classList.add('sumir2');
        resposta_texto2.classList.remove('sumir4');
        blocos.classList.add('opacidade');
      };
    </script>