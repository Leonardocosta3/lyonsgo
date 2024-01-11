var btnEntrar = document.getElementById('login-btn-entrar');

btnEntrar.addEventListener('click', function(){
    var ctnLogin = document.getElementById('container-lo');
    var ctnPa = document.getElementById('container-Pa');
    var ctnRs = document.getElementById('container-Rs');

    ctnLogin.style.display = "none";
    ctnPa.style.display = "flex";
    ctnRs.style.display = "none";
})