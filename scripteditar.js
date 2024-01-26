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

  document.addEventListener('DOMContentLoaded', function(){
    var btnMostrar1 = document.getElementById('addLink-sec1');
    var btnMostrar2 = document.getElementById('addLink-sec2');
    var btnMostrar3 = document.getElementById('addLink-sec3');
    var btnMostrar4 = document.getElementById('addLink-sec4');
    var addLink = document.getElementById('adiciona-icone');
    var fechaaddLink = document.getElementById('btn-add-title');

    btnMostrar1.addEventListener('click', function(){
      addLink.classList.remove('hidden');
    });

    btnMostrar2.addEventListener('click', function(){
      addLink.classList.remove('hidden');
    });

    btnMostrar3.addEventListener('click', function(){
      addLink.classList.remove('hidden');
    });

    btnMostrar4.addEventListener('click', function(){
      addLink.classList.remove('hidden');
    });

    fechaaddLink.addEventListener('click', function(){
      addLink.classList.add('hidden');
    })


  })