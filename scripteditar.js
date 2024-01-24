document.addEventListener('DOMContentLoaded', function() {
    var botaoMostrar = document.getElementById('editar-contato');
    var infoContato = document.getElementById('info-contato');
    var salvarFechar = document.getElementById('salvar-contato');
    var fechaContato = document.getElementById('fechar-conteudo');

    fechaContato.addEventListener('click', function(){
        infoContato.style.display = 'none';
    });
  
    botaoMostrar.addEventListener('click', function() {
        infoContato.style.display = 'flex';
    });
  
    salvarFechar.addEventListener('click', function() {
        infoContato.style.display = 'none';
    });
  
    infoContato.addEventListener('click', function(event) {
      if (event.target === infoContato) {
        infoContato.style.display = 'none';
      }
    });
  });