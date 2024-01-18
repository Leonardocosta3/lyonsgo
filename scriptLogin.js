/*Navegação entre divs login */

var containerLogin = document.getElementById('container-login');
var containerPa = document.getElementById('container-pa');
var containerRs = document.getElementById('container-rs');

var btnEntrar = document.getElementById('login-btn-entrar');
var btnSemsenhalo = document.getElementById('login-semsenha');

var btnSalvar = document.getElementById('button-salvar');
var btnSemsenhapa = document.getElementById('pa-semsenha');

var btnRs= document.getElementById('recuperar-senha');

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

const usuarios = [
    {
        login: 'user1',
        senha: 'senha1'
    },
    {
        login: 'user2',
        senha: 'senha2'
    },
    {
        login: 'user3',
        senha: 'senha3'
    }
]

class Clientes{
    constructor(){
        this.arrayClientes = [];
    }

     entrar(){
        var login = document.getElementById('email').value;
        var senha = document.getElementById('password').value;
        var validaUser = false;
        var validaAdm = false;
    
        for(var i in usuarios){
            if(login == usuarios[i].login && senha == usuarios[i].senha){
                validaUser = true;
                break
            }else if(login == 'admin' && senha == 'admin'){
                validaAdm = true;
            }
        }
        if(validaUser == true){
            containerLogin.classList.add('hidden');
            containerPa.classList.remove('hidden');
            containerRs.classList.add('hidden'); 
        }else if(validaAdm == true){
            location.href = 'adm.html';
        }else{
            alert('Usuario não encontrado!');
        }
    
    }

    validaLogin(){

    }
    adicionar(){

    }
    lerDados() {
        
    }
    novaSenha() {

    }
    salvar(){
        
    }







}
var clientes = new Clientes();
