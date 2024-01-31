const corFundo = document.getElementById('teste-color');
const modo = document.getElementById('modo-off').querySelector('path.off');

corFundo.addEventListener('change', function () {
  
  const selectColor = corFundo.value;
  modo.setAttribute('fill', selectColor);
});