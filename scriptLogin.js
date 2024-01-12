/*Navegação entre divs */

var btnEntrar = document.getElementById('login-btn-entrar');

btnEntrar.addEventListener('click', function(){
    var ctnlogin = document.getElementById('container-login');
    var ctnPa = document.getElementById('container-pa');
    var ctnRs = document.getElementById('container-rs');

    ctnlogin.style.display = 'none';
    ctnPa.style.display = 'block';
    ctnRs.style.display = 'none';   


    
})

var semsenha = document.getElementById('login-semsenha');

semsenha.addEventListener('click', function(){
    var ctnlogin = document.getElementById('container-login');
    var ctnPa = document.getElementById('container-pa');
    var ctnRs = document.getElementById('container-rs');

    ctnlogin.style.display = 'none';
    ctnPa.style.display = 'none';
    ctnRs.style.display = 'block';
    
})

var semsenha = document.getElementById('login-semsenha2');

semsenha.addEventListener('click', function(){
    var ctnlogin = document.getElementById('container-login');
    var ctnPa = document.getElementById('container-pa');
    var ctnRs = document.getElementById('container-rs');

    ctnlogin.style.display = 'none';
    ctnPa.style.display = 'none';
    ctnRs.style.display = 'block';
    
})

var salvarLogin = document.getElementById('button-salvar');

salvarLogin.addEventListener('click', function(){
    var ctnlogin = document.getElementById('container-login');
    var ctnPa = document.getElementById('container-pa');
    var ctnRs = document.getElementById('container-rs');

    ctnlogin.style.display = 'block';
    ctnPa.style.display = 'none';
    ctnRs.style.display = 'none';
    
})


