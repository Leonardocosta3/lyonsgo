document.addEventListener('DOMContentLoaded', function () {
  var botaoMostrar = document.getElementById('editar-contato');
  var infoContato = document.getElementById('info-contato');
  var salvarFechar = document.getElementById('salvar-contato');
  var fechaContato = document.getElementById('fechar-conteudo');

  fechaContato.addEventListener('click', function () {
    infoContato.classList.add('hidden');
  });

  botaoMostrar.addEventListener('click', function () {
    infoContato.classList.remove('hidden');
  });

  salvarFechar.addEventListener('click', function () {
    infoContato.classList.add('hidden');
  });

  
  /*infoContato.addEventListener('click', function(event) {
    if (event.target === infoContato) {
      infoContato.classList.add('hidden');
    }
  });*/
});

document.addEventListener('DOMContentLoaded', function () {
  var btnMostrar1 = document.getElementById('addLink-sec1');
  var btnMostrar2 = document.getElementById('addLink-sec2');
  var btnMostrar3 = document.getElementById('addLink-sec3');
  var btnMostrar4 = document.getElementById('addLink-sec4');
  var addLink = document.getElementById('adiciona-icone');
  var fechaaddLink = document.getElementById('btn-add-title');

  btnMostrar1.addEventListener('click', function () {
    addLink.classList.remove('hidden');
  });

  btnMostrar2.addEventListener('click', function () {
    addLink.classList.remove('hidden');
  });

  btnMostrar3.addEventListener('click', function () {
    addLink.classList.remove('hidden');
  });

  btnMostrar4.addEventListener('click', function () {
    addLink.classList.remove('hidden');
  });

  fechaaddLink.addEventListener('click', function () {
    addLink.classList.add('hidden');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var abriradIcon1 = document.getElementById('ad-icon-site');
  var abriradIcon2 = document.getElementById('ad-icon-instagram');
  var abriradIcon3 = document.getElementById('ad-icon-whatsapp');
  var abriradIcon4 = document.getElementById('ad-icon-mapa');
  var abriradIcon5 = document.getElementById('ad-icon-email');
  var abriradIcon6 = document.getElementById('ad-icon-facebook');
  var abriradIcon7 = document.getElementById('ad-icon-twitter');
  var abriradIcon8 = document.getElementById('ad-icon-pix');
  var adlink = document.getElementById('btn-ad-link')
  var fecharadIcon = document.getElementById('btn-ad-icon');
  var adIcone = document.getElementById('ad-icone');
  var fechaLink = document.getElementById('adiciona-icone');

  abriradIcon1.addEventListener('click', function () {
    adIcone.classList.remove('hidden');
    fechaLink.classList.add('hidden');
    

  });
  abriradIcon2.addEventListener('click', function () {
    adIcone.classList.remove('hidden');
    fechaLink.classList.add('hidden');

  });
  abriradIcon3.addEventListener('click', function () {
    adIcone.classList.remove('hidden');
    fechaLink.classList.add('hidden');
  });
  abriradIcon4.addEventListener('click', function () {
    adIcone.classList.remove('hidden');
    fechaLink.classList.add('hidden');
  });
  abriradIcon5.addEventListener('click', function () {
    adIcone.classList.remove('hidden');
    fechaLink.classList.add('hidden');
  });
  abriradIcon6.addEventListener('click', function () {
    adIcone.classList.remove('hidden');
    fechaLink.classList.add('hidden');
  });
  abriradIcon7.addEventListener('click', function () {
    adIcone.classList.remove('hidden');
    fechaLink.classList.add('hidden');
  });
  abriradIcon8.addEventListener('click', function () {
    adIcone.classList.remove('hidden');
    fechaLink.classList.add('hidden');
  });
  fecharadIcon.addEventListener('click', function () {
    adIcone.classList.add('hidden');
    fechaLink.classList.remove('hidden');
  });

  adlink.addEventListener('click', function () {
    adIcone.classList.add('hidden');
    fechaLink.classList.add('hidden');
  });
});

document.addEventListener('DOMContentLoaded', function () {

const corFundo = document.getElementById('cor-fundo');
const fundoBody = document.getElementById('body');
const corEditcontato = document.getElementById('editar-contato');
const corNome = document.getElementById('campos-cartao-nome');
const corOff = document.getElementById('modo-off').querySelector('path');
const corLabel = document.getElementById('modo-off-label');
const corIconEnviar = document.getElementById('icone-enviar').querySelector('path');
const corEnviar = document.getElementById('label-enviar');


corFundo.addEventListener('change', function () {
  
  const selectColor = corFundo.value;
  fundoBody.style.backgroundColor = selectColor;
  corEditcontato.style.backgroundColor = selectColor;
  corEditcontato.style.color = 'white';
  corNome.style.color = selectColor;
  corOff.setAttribute('fill', selectColor);
  corLabel.style.color = selectColor;
  corEnviar.style.color = selectColor;
  corIconEnviar.setAttribute('fill', selectColor);
});

const corCartao = document.getElementById('cor-cartao');
const fundoCartao = document.getElementById('cartao');

corCartao.addEventListener('change', function () {
  const selectColor = corCartao.value;
  fundoCartao.style.backgroundColor = selectColor;
});

const corDestaque = document.getElementById('cor-destaque');
const fundoDestaque = document.getElementById('foto-cartao');

corDestaque.addEventListener('change', function () {
  const selectColor = corDestaque.value;
  fundoDestaque.style.borderColor = selectColor;
});

});