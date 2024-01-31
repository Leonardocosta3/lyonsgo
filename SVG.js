document.addEventListener('DOMContentLoaded', function () {
  // Seleciona o SVG pelo ID
  const corFundo = document.getElementById('teste-color');
  const svgElement = document.getElementById('modo-off').querySelector('path');

  corFundo.addEventListener('change', function () {
    select = corFundo.value;
    svgElement.setAttribute('fill', select);
  })
  
});