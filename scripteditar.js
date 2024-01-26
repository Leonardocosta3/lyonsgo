document.addEventListener('DOMContentLoaded', function() {
    var botaoMostrar = document.getElementById('editar-contato');
    var infoContato = document.getElementById('info-contato');
    var salvarFechar = document.getElementById('salvar-contato');
    var fechaContato = document.getElementById('fechar-conteudo');

    fechaContato.addEventListener('click', function(){
        infoContato.classList.add('hidden');
    });
  
    botaoMostrar.addEventListener('click', function() {
        infoContato.classList.remove('hidden');
    });
  
    salvarFechar.addEventListener('click', function() {
        infoContato.classList.remove('hidden');
    });
  
    /*
    Esconde a div caso clique fora dela
    infoContato.addEventListener('click', function(event) {
      if (event.target === infoContato) {
        infoContato.classList.add('hidden');
      }
    });*/
  });