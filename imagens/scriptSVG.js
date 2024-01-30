document.addEventListener('DOMContentLoaded', function () {

  const corFundo = document.getElementById('cores');
  var path = document.getElementById('whats').querySelector('path.cor');

  corFundo.addEventListener('change', function () {
    const setcor = corFundo.value;
    path.setAttribute('fill', setcor);
  });

});