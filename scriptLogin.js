/*Área de Login */
/*Navegação entre divs adm */
var btnEntrar = document.getElementById('login-btn-entrar');

btnEntrar.addEventListener('click', function(){
    var ctnLogin = document.getElementById('container-login');
    var ctnPa = document.getElementById('container-pa');
    var ctnRs = document.getElementById('container-rs');

    ctnLogin.style.display = "none";
    ctnPa.style.display = "flex";
    ctnRs.style.display = "none";
})