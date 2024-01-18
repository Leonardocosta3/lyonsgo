/*Navegação entre divs login */

var containerLogin = document.getElementById('container-login');
var containerPa = document.getElementById('container-pa');
var containerRs = document.getElementById('container-rs');

var btnEntrar = document.getElementById('login-btn-entrar');
var btnSemsenhalo = document.getElementById('login-semsenha');

var btnSalvar = document.getElementById('button-salvar');
var btnSemsenhapa = document.getElementById('pa-semsenha');

var btnRs= document.getElementById('recuperar-senha');

btnEntrar.addEventListener('click', function(){ 
    containerLogin.classList.add('hidden');
    containerPa.classList.remove('hidden');
    containerRs.classList.add('hidden');

});

btnSemsenhalo.addEventListener('click', function(){
    containerLogin.classList.add('hidden');
    containerPa.classList.add('hidden');
    containerRs.classList.remove('hidden');

});

btnSalvar.addEventListener('click', function(){
    containerLogin.classList.remove('hidden');
    containerPa.classList.add('hidden');
    containerRs.classList.add('hidden');

});

btnSemsenhapa.addEventListener('click', function(){
    containerLogin.classList.add('hidden');
    containerPa.classList.add('hidden');
    containerRs.classList.remove('hidden');

});

btnRs.addEventListener('click', function(){
    containerLogin.classList.remove('hidden');
    containerPa.classList.add('hidden');
    containerRs.classList.add('hidden');

});


function logar(){
    var login = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    if(login == 'admin' && senha == 'admin'){
        alert('Sucesso!');
        location.href = 'adm.html';   
    }else{
        alert('Usuário ou senha estão incoretos!');
    }

}