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
    /*containerLogin.classList.add('hidden');
    containerPa.classList.remove('hidden');
    containerRs.classList.add('hidden');
    localStorage.setItem('visible', 'container-pa');*/

});

btnSemsenhalo.addEventListener('click', function(){
    containerLogin.classList.add('hidden');
    containerPa.classList.add('hidden');
    containerRs.classList.remove('hidden');
    localStorage.setItem('visible', 'container-rs');

});

btnSalvar.addEventListener('click', function(){
    containerLogin.classList.remove('hidden');
    containerPa.classList.add('hidden');
    containerRs.classList.add('hidden');
    localStorage.setItem('visible', 'container-login');

});

btnSemsenhapa.addEventListener('click', function(){
    containerLogin.classList.add('hidden');
    containerPa.classList.add('hidden');
    containerRs.classList.remove('hidden');
    localStorage.setItem('visible', 'container-rs');

});

btnRs.addEventListener('click', function(){
    containerLogin.classList.remove('hidden');
    containerPa.classList.add('hidden');
    containerRs.classList.add('hidden');
    localStorage.setItem('visible', 'container-rs');

});

var visible = localStorage.getItem('visible');
// Se houver um estado armazenado, aplicá-lo
if(visible === 'container-pa') {
    containerLogin.classList.add('hidden');
    containerPa.classList.remove('hidden');
    containerRs.classList.add('hidden');
}else if(visible === 'container-rs'){
    containerLogin.classList.add('hidden');
    containerPa.classList.add('hidden');
    containerRs.classList.remove('hidden');
}

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